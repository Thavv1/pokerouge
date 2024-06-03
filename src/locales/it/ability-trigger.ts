import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "{{abilityName}} di {{pokemonName}}\nl'ha protetto dal contraccolpo!",
  "stockpile" : "{{pokemonName}}\nne ha accumulati {{stockpileNumber}}!",
  "badDreams": "{{pokemonName}} è tormentato!",
  "windPowerCharged": "Being hit by {{moveName}} charged {{pokemonName}} with power!",
} as const;
