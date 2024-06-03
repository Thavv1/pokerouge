import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{pokemonName}} wurde durch {{abilityName}}\nvor Rückstoß geschützt!",
  "stockpile" : "{{pokemonName}}\nhat {{stockpileNumber}} gehortet!",
  "badDreams": "{{pokemonName}} ist in einem Alptraum gefangen!",
  "windPowerCharged": "Being hit by {{moveName}} charged {{pokemonName}} with power!",
} as const;
