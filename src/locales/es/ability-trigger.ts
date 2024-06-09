import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  "blockRecoilDamage" : "¡{{abilityName}} de {{pokemonName}}\nlo protegió del daño de retroceso!",
  "badDreams": "¡{{pokemonName}} está atormentado!",
  "windPowerCharged": "¡{{pokemonName}} se ha cargado de electricidad gracias a {{moveName}}!",
  "iceFaceAvoidedDamage": "¡{{pokemonName}} evitó\ndaño con {{abilityName}}!"
} as const;
