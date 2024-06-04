import { ability } from "./ability";
import { abilityTriggers } from "./ability-trigger";
import { achv } from "./achv";
import { battle } from "./battle";
import { battleMessageUiHandler } from "./battle-message-ui-handler";
import { berry } from "./berry";
import { biome } from "./biome";
import { commandUiHandler } from "./command-ui-handler";
import {
  PGFbattleSpecDialogue,
  PGFdialogue,
  PGFdoubleBattleDialogue,
  PGFmiscDialogue,
  PGMbattleSpecDialogue,
  PGMdialogue,
  PGMdoubleBattleDialogue,
  PGMmiscDialogue
} from "./dialogue";
import { egg } from "./egg";

import { gameStatsUiHandler } from "./game-stats-ui-handler";
import { growth } from "./growth";
import { menu } from "./menu";
import { menuUiHandler } from "./menu-ui-handler";
import { modifierType } from "./modifier-type";
import { move } from "./move";
import { nature } from "./nature";
import { pokeball } from "./pokeball";
import { pokemon } from "./pokemon";
import { pokemonInfo } from "./pokemon-info";
import { pokemonInfoContainer } from "./pokemon-info-container";
import { splashMessages } from "./splash-messages";
import { starterSelectUiHandler } from "./starter-select-ui-handler";
import { titles, trainerClasses, trainerNames } from "./trainers";
import { tutorial } from "./tutorial";
import { voucher } from "./voucher";
import { weather } from "./weather";

export const itConfig = {
  ability: ability,
  abilityTriggers: abilityTriggers,
  achv: achv,
  battle: battle,
  battleMessageUiHandler: battleMessageUiHandler,
  berry: berry,
  biome: biome,
  commandUiHandler: commandUiHandler,
  PGMdialogue: PGMdialogue,
  PGFdialogue: PGFdialogue,
  PGMbattleSpecDialogue: PGMbattleSpecDialogue,
  PGFbattleSpecDialogue: PGFbattleSpecDialogue,
  PGMmiscDialogue: PGMmiscDialogue,
  PGFmiscDialogue: PGFmiscDialogue,
  PGMdoubleBattleDialogue: PGMdoubleBattleDialogue,
  PGFdoubleBattleDialogue: PGFdoubleBattleDialogue,
  egg: egg,
  gameStatsUiHandler: gameStatsUiHandler,
  growth: growth,
  menu: menu,
  menuUiHandler: menuUiHandler,
  modifierType: modifierType,
  move: move,
  nature: nature,
  pokeball: pokeball,
  pokemon: pokemon,
  pokemonInfo: pokemonInfo,
  pokemonInfoContainer: pokemonInfoContainer,
  splashMessages: splashMessages,
  starterSelectUiHandler: starterSelectUiHandler,
  titles: titles,
  trainerClasses: trainerClasses,
  trainerNames: trainerNames,
  tutorial: tutorial,
  voucher: voucher,
  weather: weather
};
