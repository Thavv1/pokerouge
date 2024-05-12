import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}}が　あらわれた！",
  "trainerAppeared": "{{trainerName}}が\nしょうぶを　しかけてきた！",
  "singleWildAppeared": "あっ！　やせいの\n{{pokemonName}}が　とびだしてきた！",
  "multiWildAppeared": "あっ！　やせいの　{{pokemonName1}}と\n{{pokemonName2}}が　とびだしてきた！",
  "playerComeBack": "Come back, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}}は\n{{pokemonName}}を　ひっこめた！",
  "playerGo": "ゆけっ！　{{pokemonName}}！",
  "trainerGo": "{{trainerName}}は\n{{pokemonName}}を　くりだした！",
  "switchQuestion": "{{pokemonName}}を\nいれかえますか？",
  "trainerDefeated": "{{trainerName}}\nとの　しょうぶに　かった！",
  "pokemonCaught": "{{pokemonName}}を\nつかまえたぞ！",
  "pokemon": "ポケモン",
  "sendOutPokemon": "がんばれ！　{{pokemonName}}！",
  "hitResultCriticalHit": "きゅうしょに　あたった！",
  "hitResultSuperEffective": "こうかは　ばつぐんだ！",
  "hitResultNotVeryEffective": "こうかは　いまひとつの　ようだ……",
  "hitResultNoEffect": "It doesn't affect {{pokemonName}}!",
  "hitResultOneHitKO": "いちげき　ひっさつ！",
  "attackFailed": "しかし　うまく　きまらなかった！！",
  "attackHitsCount": "{{count}}かい　あたった！",
  "expGain": "{{pokemonName}}は\n{{exp}}けいけんちを　もらった！",
  "levelUp": "{{pokemonName}}は\nレベル{{level}}　に　あがった！",
  "learnMove": "{{pokemonName}}は　あたらしく\n{{moveName}}を　おぼえた！",
  "learnMovePrompt": "{{pokemonName}}は　あたらしく\n{{moveName}}を　おぼえたい……",
  "learnMoveLimitReached": "しかし　{{pokemonName}}は　わざを　4つ\nおぼえるので　せいいっぱいだ！",
  "learnMoveReplaceQuestion": "{{moveName}}の　かわりに\nほかの　わざを　わすれさせますか？", 
  "learnMoveStopTeaching": "それでは……　{{moveName}}を\nおぼえるのを　あきらめますか？",
  "learnMoveNotLearned": "{{pokemonName}}は　{{moveName}}を\nおぼえずに　おわった！",
  "learnMoveForgetQuestion": "どの　わざを\nわすれさせたい？",
  "learnMoveForgetSuccess": "{{pokemonName}}は　{{moveName}}の\nつかいかたを　きれいに　わすれた！",
  "levelCapUp": "The level cap\nhas increased to {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} is not yet implemented and cannot be selected.",
  "moveNoPP": "しかし　わざの\nのこりポイントが　なかった！",
  "moveDisabled": "{{moveName}} is disabled!",
  "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
  "noPokeballTrainer": "You can't catch\nanother trainer's Pokémon!",
  "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
  "noPokeballStrong": "The target Pokémon is too strong to be caught!\nYou need to weaken it first!",
  "noEscapeForce": "An unseen force\nprevents escape.",
  "noEscapeTrainer": "ダメだ！　しょうぶのさいちゅうに\nあいてに　せなかを　みせられない！",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
  "runAwaySuccess": " うまく　にげきれた！",
  "runAwayCannotEscape": "にげることが　できない！",
  "escapeVerbSwitch": "switching",
  "escapeVerbFlee": "fleeing",
  "notDisabled": "{{pokemonName}}'s {{moveName}} is disabled\nno more!",
  "skipItemQuestion": "Are you sure you want to skip taking an item?",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?"
} as const;
