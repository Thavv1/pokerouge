import { PokemonInfoTranslationEntries } from "#app/plugins/i18n";

export const pokemonInfo: PokemonInfoTranslationEntries = {
  Stat: {
    "HP": "HP",
    "HPshortened": "HP",
    "ATK": "こうげき",
    "ATKshortened": "こうげき",
    "DEF": "ぼうぎょ",
    "DEFshortened": "ぼうぎょ",
    "SPATK": "とくこう",
    "SPATKshortened": "とくこう",
    "SPDEF": "とくぼう",
    "SPDEFshortened": "とくぼう",
    "SPD": "すばやさ",
    "SPDshortened": "すばやさ"
  },

  Type: {
    "UNKNOWN": "Unknown",
    "NORMAL": "ノーマル",
    "FIGHTING": "かくとう",
    "FLYING": "ひこう",
    "POISON": "どく",
    "GROUND": "じめん",
    "ROCK": "いわ",
    "BUG": "むし",
    "GHOST": "ゴースト",
    "STEEL": "はがね",
    "FIRE": "ほのお",
    "WATER": "みず",
    "GRASS": "くさ",
    "ELECTRIC": "でんき",
    "PSYCHIC": "エスパー",
    "ICE": "こおり",
    "DRAGON": "ドラゴン",
    "DARK": "あく",
    "FAIRY": "フェアリー",
    "STELLAR": "ステラ",
  },
} as const;
