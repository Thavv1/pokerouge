import i18next from "i18next";
import {BattleType} from "../battle";
import BattleScene from "../battle-scene";
import {EggTier} from "../data/enums/egg-type";
import {Species} from "../data/enums/species";
import {TrainerType} from "../data/enums/trainer-type";
import {MysteryEncounterVariant} from "../data/mystery-encounter";
import PokemonSpecies, {getPokemonSpecies, speciesStarters} from "../data/pokemon-species";
import {StatusEffect} from "../data/status-effect";
import {TrainerConfig, trainerConfigs, TrainerSlot} from "../data/trainer-config";
import {FieldPosition, PlayerPokemon} from "../field/pokemon";
import Trainer, {TrainerVariant} from "../field/trainer";
import {PokemonExpBoosterModifier} from "../modifier/modifier";
import {
  CustomModifierSettings,
  ModifierPoolType,
  ModifierTypeFunc,
  regenerateModifierPoolThresholds
} from "../modifier/modifier-type";
import {BattleEndPhase, EggLapsePhase, ModifierRewardPhase, TrainerVictoryPhase} from "../phases";
import {MysteryEncounterBattlePhase, PostMysteryEncounterPhase} from "../phases/mystery-encounter-phase";
import * as Utils from "../utils";
import {SelectModifierPhase} from "#app/phases/select-modifier-phase";

/**
 * Util file for functions used in mystery encounters
 * **MIGHT** be useful outside of mystery encounters but no guarantees of functionality
 */

/**
 * Async function that is called every time a mystery encounter option is selected
 * If there are intro visuals as part of an encounter, they will fade back and then be removed
 * Async logic can be used to await or promise chain once visuals are finished being removed
 * Note: If Trainer objects are part of a mystery encounter battle, those will be shown after intro visuals
 * @param scene - Battle scene object
 * @returns - Promise
 */
export function hideMysteryEncounterIntroVisuals(scene: BattleScene): Promise<boolean> {
  return new Promise(resolve => {
    const introVisuals = scene.currentBattle.mysteryEncounter.introVisuals;
    if (introVisuals) {
      // Hide
      scene.tweens.add({
        targets: introVisuals,
        x: "+=16",
        y: "-=16",
        alpha: 0,
        ease: "Sine.easeInOut",
        duration: 750,
        onComplete: () => {
          scene.field.remove(introVisuals);
          introVisuals.setVisible(false);
          introVisuals.destroy();
          resolve(true);
        }
      });
    } else {
      resolve(true);
    }
  });
}

/**
 *
 * Will never remove the player's last non-fainted Pokemon (if they only have 1)
 * Otherwise, picks a Pokemon completely at random and removes from the party
 * @param scene
 * @param isAllowedInBattle - default false. If true, only picks from unfainted mons. If there is only 1 unfainted mon left and doNotReturnLastAbleMon is also true, will return fainted mon
 * @param doNotReturnLastAbleMon - If true, will never return the last unfainted pokemon in the party. Useful when this function is being used to determine what Pokemon to remove from the party (Don't want to remove last unfainted)
 * @returns
 */
export function getRandomPlayerPokemon(scene: BattleScene, isAllowedInBattle: boolean = false, doNotReturnLastAbleMon: boolean = false): PlayerPokemon {
  const party = scene.getParty();
  let chosenIndex: number;
  let chosenPokemon: PlayerPokemon;
  const unfaintedMons = party.filter(p => p.isAllowedInBattle());
  const faintedMons = party.filter(p => !p.isAllowedInBattle());

  if (doNotReturnLastAbleMon && unfaintedMons.length === 1) {
    chosenIndex = Utils.randSeedInt(faintedMons.length);
    chosenPokemon = faintedMons.at(chosenIndex);
  } else if (isAllowedInBattle) {
    chosenIndex = Utils.randSeedInt(unfaintedMons.length);
    chosenPokemon = unfaintedMons.at(chosenIndex);
  } else {
    chosenIndex = Utils.randSeedInt(party.length);
    chosenPokemon = party.at(chosenIndex);
  }

  return chosenPokemon;
}

/**
 * Ties are broken by whatever mon is closer to the front of the party
 * @param scene
 * @param unfainted - default false. If true, only picks from unfainted mons.
 * @returns
 */
export function getHighestLevelPlayerPokemon(scene: BattleScene, unfainted: boolean = false): PlayerPokemon {
  const party = scene.getParty();
  let pokemon: PlayerPokemon;
  party.every(p => {
    if (unfainted && p.isFainted()) {
      return true;
    }

    pokemon = pokemon ? pokemon?.level < p?.level ? p : pokemon : p;
    return true;
  });

  return pokemon;
}

/**
 * Ties are broken by whatever mon is closer to the front of the party
 * @param scene
 * @param unfainted - default false. If true, only picks from unfainted mons.
 * @returns
 */
export function getLowestLevelPlayerPokemon(scene: BattleScene, unfainted: boolean = false): PlayerPokemon {
  const party = scene.getParty();
  let pokemon: PlayerPokemon;
  party.every(p => {
    if (unfainted && p.isFainted()) {
      return true;
    }

    pokemon = pokemon ? pokemon?.level > p?.level ? p : pokemon : p;
    return true;
  });

  return pokemon;
}

export function koPlayerPokemon(pokemon: PlayerPokemon) {
  pokemon.hp = 0;
  pokemon.trySetStatus(StatusEffect.FAINT);
  pokemon.updateInfo();
}

/**
 * Will display a message in UI with injected encounter data tokens
 * @param scene
 * @param contentKey
 */
export function showEncounterText(scene: BattleScene, contentKey: TemplateStringsArray | `mysteryEncounter:${string}`): Promise<void> {
  return new Promise<void>(resolve => {
    let text: string = i18next.t(contentKey);
    const dialogueTokens = scene.currentBattle?.mysteryEncounter?.dialogueTokens;
    if (dialogueTokens) {
      dialogueTokens.forEach((token) => {
        text = text.replace(token[0], token[1]);
      });
    }

    const onMessageContinue = (() => {
      resolve();
    });

    scene.ui.showText(text, null, onMessageContinue, 0, true);
  });
}

/**
 * Will display a dialogue (with speaker title) in UI with injected encounter data tokens
 * @param scene
 * @param textContentKey
 * @param speakerContentKey
 * @param callback
 */
export function showEncounterDialogue(scene: BattleScene, textContentKey: TemplateStringsArray | `mysteryEncounter:${string}`, speakerContentKey: TemplateStringsArray | `mysteryEncounter:${string}`, callback?: Function) {
  let text: string = i18next.t(textContentKey);
  let speaker: string = i18next.t(speakerContentKey);
  const dialogueTokens = scene.currentBattle?.mysteryEncounter?.dialogueTokens;
  if (dialogueTokens) {
    dialogueTokens.forEach((token) => {
      text = text.replace(token[0], token[1]);
      speaker = speaker.replace(token[0], token[1]);
    });
  }

  scene.ui.showDialogue(text, speaker, null, callback, 0, 0);
}

/**
 *
 * Will pick lowest and highest of the starter costs for tiers provided, then return a random Species
 * NOTE: This returns ANY random species, including those locked behind eggs, etc.
 * @param scene
 * @param tiers
 * @returns
 */
export function getRandomSpeciesByEggTier(scene: BattleScene, tiers: EggTier[]): Species {
  let values: number[] = [];
  tiers.forEach((tier) => {
    switch (tier) {
    case EggTier.COMMON:
      values = values.concat([0, 3]);
      break;
    case EggTier.GREAT:
      values = values.concat([4, 5]);
      break;
    case EggTier.ULTRA:
      values = values.concat([6, 7]);
      break;
    case EggTier.MASTER:
      values = values.concat([8, 10]);
      break;
    }
  });
  values.sort((a, b) => a - b);
  const min = values[0];
  const max = values[values.length - 1];

  const filteredSpecies = Object.entries(speciesStarters)
    .filter(s => s[1] >= min && s[1] <= max)
    .map(s => parseInt(s[0]))
    .filter(s => getPokemonSpecies(s));

  const index = Utils.randSeedInt(filteredSpecies.length);
  return Phaser.Math.RND.shuffle(filteredSpecies)[index];
}

export class EnemyPartyConfig {
  levelAdditiveMultiplier?: number = 0; // Formula for enemy: level += waveIndex / 10 * levelAdditive
  doubleBattle?: boolean = false;
  trainerType?: TrainerType; // Generates trainer battle solely off trainer type
  trainerConfig?: TrainerConfig; // More customizable option for configuring trainer battle
  pokemonSpecies?: PokemonSpecies[];
  pokemonBosses?: PokemonSpecies[];
}

/**
 * Generates an enemy party for a mystery encounter battle
 * This will override and replace any standard encounter generation logic
 * Useful for tailoring specific battles to mystery encounters
 * @param scene - Battle Scene
 * @param partyConfig - Can pass various customizable attributes for the enemy party, see EnemyPartyConfig
 */
export async function initBattleWithEnemyConfig(scene: BattleScene, partyConfig: EnemyPartyConfig): Promise<void> {
  const loaded = false;
  const loadEnemyAssets = [];

  const battle = scene.currentBattle;

  const normalCount = partyConfig?.pokemonSpecies?.length || 0;
  const bossCount = partyConfig?.pokemonBosses?.length || 0;

  // Trainer
  const trainerType = partyConfig?.trainerType;
  const trainerConfig = partyConfig?.trainerConfig;
  if (trainerType || partyConfig?.trainerConfig) {
    scene.currentBattle.mysteryEncounter.encounterVariant = MysteryEncounterVariant.TRAINER_BATTLE;
    if (scene.currentBattle.trainer) {
      scene.currentBattle.trainer.setVisible(false);
      scene.currentBattle.trainer.destroy();
    }

    const trainerConfig = partyConfig?.trainerConfig ? partyConfig?.trainerConfig : trainerConfigs[trainerType];

    const doubleTrainer = trainerConfig.doubleOnly || (trainerConfig.hasDouble && partyConfig?.doubleBattle);
    const newTrainer = new Trainer(scene, trainerConfig.trainerType, doubleTrainer ? TrainerVariant.DOUBLE : Utils.randSeedInt(2) ? TrainerVariant.FEMALE : TrainerVariant.DEFAULT, null, null, null, trainerConfig);
    newTrainer.x += 300;
    newTrainer.setVisible(false);
    scene.field.add(newTrainer);
    scene.currentBattle.trainer = newTrainer;
    loadEnemyAssets.push(newTrainer.loadAssets());

    battle.enemyLevels = scene.currentBattle.trainer.getPartyLevels(scene.currentBattle.waveIndex);
  } else {
    // Wild
    scene.currentBattle.mysteryEncounter.encounterVariant = MysteryEncounterVariant.WILD_BATTLE;
    battle.enemyLevels = new Array(normalCount + bossCount > 0 ? normalCount + bossCount : partyConfig?.doubleBattle ? 2 : 1).fill(null).map(() => scene.currentBattle.getLevelForWave());
  }

  scene.getEnemyParty().forEach(enemyPokemon => enemyPokemon.destroy());
  battle.enemyParty = [];

  // Adjust levels for battle by modifier
  battle.enemyLevels = battle.enemyLevels.map(level => Math.round(level + scene.currentBattle.waveIndex / 10 * partyConfig.levelAdditiveMultiplier));

  battle.enemyLevels.forEach((level, e) => {
    let enemySpecies;
    let isBoss = false;
    if (!loaded) {
      if (trainerType || trainerConfig) {
        battle.enemyParty[e] = battle.trainer.genPartyMember(e);
      } else {
        // Normal pokemon loaded first, Bosses second
        // If no species are specified, picks random

        if (normalCount - 1 >= e) {
          enemySpecies = partyConfig?.pokemonSpecies?.[e];
        } else if (bossCount - 1 >= e - normalCount) {
          scene.currentBattle.mysteryEncounter.encounterVariant = MysteryEncounterVariant.BOSS_BATTLE;
          isBoss = true;
          enemySpecies = partyConfig?.pokemonBosses?.[e];
        } else {
          enemySpecies = scene.randomSpecies(battle.waveIndex, level, true);
        }

        battle.enemyParty[e] = scene.addEnemyPokemon(enemySpecies, level, TrainerSlot.NONE, isBoss);
      }
    }

    const enemyPokemon = scene.getEnemyParty()[e];
    if (isBoss) {
      enemyPokemon.setBoss(true, scene.getEncounterBossSegments(scene.currentBattle.waveIndex, level, enemySpecies, true));
    }

    if (e < (partyConfig?.doubleBattle ? 2 : 1)) {
      enemyPokemon.setX(-66 + enemyPokemon.getFieldPositionOffset()[0]);
      enemyPokemon.resetSummonData();
    }

    if (!loaded) {
      scene.gameData.setPokemonSeen(enemyPokemon, true, !!(trainerType || trainerConfig));
    }

    loadEnemyAssets.push(enemyPokemon.loadAssets());

    console.log(enemyPokemon.name, enemyPokemon.species.speciesId, enemyPokemon.stats);
  });

  scene.pushPhase(new MysteryEncounterBattlePhase(scene));

  await Promise.all(loadEnemyAssets);
  battle.enemyParty.forEach((enemyPokemon_2, e_1) => {
    if (e_1 < (partyConfig?.doubleBattle ? 2 : 1)) {
      enemyPokemon_2.setVisible(false);
      if (battle.double) {
        enemyPokemon_2.setFieldPosition(e_1 ? FieldPosition.RIGHT : FieldPosition.LEFT);
      }
      // Spawns at current visible field instead of on "next encounter" field (off screen to the left)
      enemyPokemon_2.x += 300;
    }
  });
  if (!loaded) {
    regenerateModifierPoolThresholds(scene.getEnemyField(), battle.battleType === BattleType.TRAINER ? ModifierPoolType.TRAINER : ModifierPoolType.WILD);
    scene.generateEnemyModifiers();
  }
}

/**
 * For trainer battles during mystery encounters
 * Will animate the trainer onto the field and show intro dialogue selected at random from the trainer's pool of dialogue
 * Async logic can be used to await or promise chain from the player's continuation of the dialogue
 * @param scene - Battle Scene
 * @returns - Promise
 */
export function showTrainerDialogue(scene: BattleScene): Promise<boolean> {
  scene.pbTray.showPbTray(scene.getParty());
  scene.pbTrayEnemy.showPbTray(scene.getEnemyParty());

  // Show enemy trainer
  const trainer = scene.currentBattle.trainer;
  trainer.alpha = 0;
  trainer.x += 16;
  trainer.y -= 16;
  scene.tweens.add({
    targets: scene.currentBattle.trainer,
    x: "-=16",
    y: "+=16",
    alpha: 1,
    ease: "Sine.easeInOut",
    duration: 750,
    onComplete: () => {
      trainer.playAnim();
    }
  });

  return new Promise(resolve => {
    if (trainer) {
      const encounterMessages = scene.currentBattle.trainer.getEncounterMessages();
      let message: string;
      scene.executeWithSeedOffset(() => message = Utils.randSeedItem(encounterMessages), scene.currentBattle.waveIndex);
      scene.ui.showDialogue(message, trainer.getName(TrainerSlot.NONE, true), null, () => resolve(true));
    } else {
      resolve(true);
    }
  });
}

/**
 * Will initialize reward phases to follow the mystery encounter
 * Can have shop displayed or skipped
 * @param scene - Battle Scene
 * @param customShopRewards - adds a shop phase with the specified rewards / reward tiers
 * @param nonShopRewards - will add a non-shop reward phase for each specified item/modifier (can happen in addition to a shop)
 */
export function setEncounterRewards(scene: BattleScene, customShopRewards?: CustomModifierSettings, nonShopRewards?: ModifierTypeFunc[]) {
  scene.currentBattle.mysteryEncounter.doEncounterRewards = (scene: BattleScene) => {
    if (customShopRewards) {
      scene.unshiftPhase(new SelectModifierPhase(scene, 0, null, customShopRewards));
    } else {
      scene.tryRemovePhase(p => p instanceof SelectModifierPhase);
    }

    if (nonShopRewards?.length > 0) {
      nonShopRewards.forEach((reward) => {
        scene.unshiftPhase(new ModifierRewardPhase(scene, reward));
      });
    } else {
      while (!Utils.isNullOrUndefined(scene.findPhase(p => p instanceof ModifierRewardPhase))) {
        scene.tryRemovePhase(p => p instanceof ModifierRewardPhase);
      }
    }

    return true;
  };
}

/**
 * Will initialize exp phases to follow the mystery encounter (in addition to any combat or other exp earned)
 * Exp earned will be a simple function that linearly scales with wave index, that can be increased or decreased by the expMultiplier
 * Exp Share will have no effect (so no accounting for what mon is "on the field")
 * Exp Balance will still function as normal
 * @param scene - Battle Scene
 * @param expMultiplier - default is 100, can be increased or decreased as desired
 */
export function setEncounterExp(scene: BattleScene, expMultiplier: number = 100) {
  //const expBalanceModifier = scene.findModifier(m => m instanceof ExpBalanceModifier) as ExpBalanceModifier;
  const expVal = scene.currentBattle.waveIndex * expMultiplier;
  const pokemonExp = new Utils.NumberHolder(expVal);
  const partyMemberExp = [];

  const party = scene.getParty();
  party.forEach(pokemon => {
    scene.applyModifiers(PokemonExpBoosterModifier, true, pokemon, pokemonExp);
    partyMemberExp.push(Math.floor(pokemonExp.value));
  });

  // TODO
  //if (expBalanceModifier) {
  //  let totalLevel = 0;
  //  let totalExp = 0;
  //  expPartyMembers.forEach((expPartyMember, epm) => {
  //    totalExp += partyMemberExp[epm];
  //    totalLevel += expPartyMember.level;
  //  });

  //  const medianLevel = Math.floor(totalLevel / expPartyMembers.length);

  //  const recipientExpPartyMemberIndexes = [];
  //  expPartyMembers.forEach((expPartyMember, epm) => {
  //    if (expPartyMember.level <= medianLevel) {
  //      recipientExpPartyMemberIndexes.push(epm);
  //    }
  //  });

  //  const splitExp = Math.floor(totalExp / recipientExpPartyMemberIndexes.length);

  //  expPartyMembers.forEach((_partyMember, pm) => {
  //    partyMemberExp[pm] = Phaser.Math.Linear(partyMemberExp[pm], recipientExpPartyMemberIndexes.indexOf(pm) > -1 ? splitExp : 0, 0.2 * expBalanceModifier.getStackCount());
  //  });
  //}
}

/**
 * Can be used to exit an encounter without any battles or followup
 * Will skip any shops and rewards, and queue the next encounter phase as normal
 * @param scene
 */
export function leaveEncounterWithoutBattle(scene: BattleScene) {
  scene.currentBattle.mysteryEncounter.encounterVariant = MysteryEncounterVariant.NO_BATTLE;
  scene.clearPhaseQueue();
  scene.clearPhaseQueueSplice();
  handleMysteryEncounterVictory(scene);
}

export function handleMysteryEncounterVictory(scene: BattleScene) {
  if (scene.currentBattle.mysteryEncounter.encounterVariant === MysteryEncounterVariant.NO_BATTLE) {
    scene.pushPhase(new EggLapsePhase(scene));
    if (scene.currentBattle.mysteryEncounter.doEncounterRewards) {
      scene.currentBattle.mysteryEncounter.doEncounterRewards(scene);
    }
    scene.pushPhase(new PostMysteryEncounterPhase(scene));
  } else if (!scene.getEnemyParty().find(p => scene.currentBattle.mysteryEncounter.encounterVariant !== MysteryEncounterVariant.TRAINER_BATTLE ? p.isOnField() : !p?.isFainted(true))) {
    scene.pushPhase(new BattleEndPhase(scene));
    if (scene.currentBattle.mysteryEncounter.encounterVariant === MysteryEncounterVariant.TRAINER_BATTLE) {
      scene.pushPhase(new TrainerVictoryPhase(scene));
    }
    if (scene.gameMode.isEndless || !scene.gameMode.isWaveFinal(scene.currentBattle.waveIndex)) {
      scene.pushPhase(new EggLapsePhase(scene));
      if (scene.currentBattle.mysteryEncounter.doEncounterRewards) {
        scene.currentBattle.mysteryEncounter.doEncounterRewards(scene);
      }

      scene.pushPhase(new PostMysteryEncounterPhase(scene));
    }
  }
}
