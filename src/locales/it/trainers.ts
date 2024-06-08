import {SimpleTranslationEntries} from "#app/plugins/i18n";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
  "elite_four": "Superquattro",
  "elite_four_female": "Superquattro",
  "gym_leader": "Capopalestra",
  "gym_leader_female": "Capopalestra",
  "gym_leader_double": "Gym Leader Duo",
  "champion": "Campione",
  "champion_female": "Champion",
  "champion_double": "Champion Duo",
  "rival": "Rivale",
  "professor": "Professore",
  "frontier_brain": "Asso Lotta",
  // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
  "ace_trainer": "Fantallenatore",
  "ace_trainer_female": "Fantallenatrice",
  "ace_duo": "Fantaduo",
  "artist": "Artista",
  "artist_female": "Artista",
  "backers": "Fan",
  "backpacker": "Giramondo",
  "backpacker_female": "Giramondo",
  "backpackers": "Giramondi",
  "baker": "Panettiere",
  "battle_girl": "Combat Girl",
  "beauty": "Bellezza",
  "beginners": "Novellini",
  "biker": "Centauro",
  "black_belt": "Cinturanera",
  "breeder": "Allevatore Pokémon",
  "breeder_female": "Segretaria",
  "breeders": "Allevatori Pokémon",
  "clerk": "Affarista",
  "clerk_female": "Clerk",
  "colleagues": "Soci in affari",
  "crush_kin": "Duo Lotta",
  "cyclist": "Ciclista",
  "cyclist_female": "Ciclista",
  "cyclists": "Ciclisti",
  "dancer": "Ballerino",
  "dancer_female": "Ballerina",
  "depot_agent": "Ferroviere",
  "doctor": "Dottore",
  "doctor_female": "Dottoressa",
  "fisherman": "Pescatore",
  "fisherman_female": "Pescatrice",
  "gentleman": "Gentiluomo",
  "guitarist": "Chitarrista",
  "guitarist_female": "Chitarrista",
  "harlequin": "Buffone",
  "hiker": "Avventuriero",
  "hooligans": "Teppisti",
  "hoopster": "Teppista",
  "infielder": "Battitore",
  "janitor": "Netturbino",
  "lady": "Lady",
  "lass": "Pupa",
  "linebacker": "Quarterback",
  "maid": "Domestica",
  "madame": "Madame",
  "medical_team": "Équipe medica",
  "musician": "Musicista",
  "hex_maniac": "Streghetta",
  "nurse": "Infermiera",
  "nursery_aide": "Maestrina",
  "officer": "Guardia",
  "parasol_lady": "Ombrellina",
  "pilot": "Pilota",
  "pokéfan": "PokéFan",
  "pokéfan_female": "PokéFan",
  "pokéfan_family": "Coppia Pokéfan",
  "preschooler": "Bimbo",
  "preschooler_female": "Bimba",
  "preschoolers": "Bimbi",
  "psychic": "Sensitivo",
  "psychic_female": "Psiche",
  "psychics": "Sensitivi",
  "pokémon_ranger": "Pokémon Ranfer",
  "pokémon_ranger_female": "Pokémon Ranger",
  "pokémon_rangers": "Pokémon Ranger",
  "ranger": "Duo Ranger",
  "restaurant_staff": "Garçon",
  "rich": "Elegantone",
  "rich_female": "Lady",
  "rich_boy": "Elegantone",
  "rich_couple": "Elegantone",
  "rich_kid": "Elegantone",
  "rich_kid_female": "Lady",
  "rich_kids": "Elegantoni",
  "roughneck": "Zuccapelata",
  "scientist": "Scienziato",
  "scientist_female": "Scienziata",
  "scientists": "Ricercatori",
  "smasher": "Tennista",
  "snow_worker": "Lavoratore",
  "snow_worker_female": "Lavoratrice",
  "striker": "Calciatore",
  "school_kid": "Scolaro",
  "school_kid_female": "Scolara",
  "school_kids": "Scolari",
  "swimmer": "Nuotatore",
  "swimmer_female": "Nuotatrice",
  "swimmers": "Nuotatori",
  "twins": "Gemelle",
  "veteran": "Veterano",
  "veteran_female": "Veterana",
  "veteran_duo": "Veterani",
  "waiter": "Cameriere",
  "waitress": "Cameriera",
  "worker": "Operaio",
  "worker_female": "Operaia",
  "workers": "Operai",
  "youngster": "Bullo"
} as const;

// Names of special trainers like gym leaders, elite four, and the champion
export const trainerNames: SimpleTranslationEntries = {
  "brock": "Brock",
  "misty": "Misty",
  "lt_surge": "Lt Surge",
  "erika": "Erika",
  "janine": "Janine",
  "sabrina": "Sabrina",
  "blaine": "Blaine",
  "giovanni": "Giovanni",
  "falkner": "Falkner",
  "bugsy": "Bugsy",
  "whitney": "Whitney",
  "morty": "Morty",
  "chuck": "Chuck",
  "jasmine": "Jasmine",
  "pryce": "Pryce",
  "clair": "Clair",
  "roxanne": "Roxanne",
  "brawly": "Brawly",
  "wattson": "Wattson",
  "flannery": "Flannery",
  "norman": "Norman",
  "winona": "Winona",
  "tate": "Tate",
  "liza": "Liza",
  "juan": "Juan",
  "roark": "Roark",
  "gardenia": "Gardenia",
  "maylene": "Maylene",
  "crasher_wake": "Crasher Wake",
  "fantina": "Fantina",
  "byron": "Byron",
  "candice": "Candice",
  "volkner": "Volkner",
  "cilan": "Cilan",
  "chili": "Chili",
  "cress": "Cress",
  "cheren": "Cheren",
  "lenora": "Lenora",
  "roxie": "Roxie",
  "burgh": "Burgh",
  "elesa": "Elesa",
  "clay": "Clay",
  "skyla": "Skyla",
  "brycen": "Brycen",
  "drayden": "Drayden",
  "marlon": "Marlon",
  "viola": "Viola",
  "grant": "Grant",
  "korrina": "Korrina",
  "ramos": "Ramos",
  "clemont": "Clemont",
  "valerie": "Valerie",
  "olympia": "Olympia",
  "wulfric": "Wulfric",
  "milo": "Milo",
  "nessa": "Nessa",
  "kabu": "Kabu",
  "bea": "Bea",
  "allister": "Allister",
  "opal": "Opal",
  "bede": "Bede",
  "gordie": "Gordie",
  "melony": "Melony",
  "piers": "Piers",
  "marnie": "Marnie",
  "raihan": "Raihan",
  "katy": "Katy",
  "brassius": "Brassius",
  "iono": "Iono",
  "kofu": "Kofu",
  "larry": "Larry",
  "ryme": "Ryme",
  "tulip": "Tulip",
  "grusha": "Grusha",
  "lorelei": "Lorelei",
  "bruno": "Bruno",
  "agatha": "Agatha",
  "lance": "Lance",
  "will": "Will",
  "koga": "Koga",
  "karen": "Karen",
  "sidney": "Sidney",
  "phoebe": "Phoebe",
  "glacia": "Glacia",
  "drake": "Drake",
  "aaron": "Aaron",
  "bertha": "Bertha",
  "flint": "Flint",
  "lucian": "Lucian",
  "shauntal": "Shauntal",
  "marshal": "Marshal",
  "grimsley": "Grimsley",
  "caitlin": "Caitlin",
  "malva": "Malva",
  "siebold": "Siebold",
  "wikstrom": "Wikstrom",
  "drasna": "Drasna",
  "hala": "Hala",
  "molayne": "Molayne",
  "olivia": "Olivia",
  "acerola": "Acerola",
  "kahili": "Kahili",
  "rika": "Rika",
  "poppy": "Poppy",
  "hassel": "Hassel",
  "crispin": "Crispin",
  "amarys": "Amarys",
  "lacey": "Lacey",
  "drayton": "Drayton",
  "blue": "Blue",
  "red": "Red",
  "steven": "Steven",
  "wallace": "Wallace",
  "cynthia": "Cynthia",
  "alder": "Alder",
  "iris": "Iris",
  "diantha": "Diantha",
  "hau": "Hau",
  "geeta": "Geeta",
  "nemona": "Nemona",
  "kieran": "Kieran",
  "leon": "Leon",
  "rival": "Finn",
  "rival_female": "Ivy",


  // Double Names
  "blue_red_double": "Blue & Red",
  "red_blue_double": "Red & Blue",
  "tate_liza_double": "Tate & Liza",
  "liza_tate_double": "Liza & Tate",
  "steven_wallace_double": "Steven & Wallace",
  "wallace_steven_double": "Wallace & Steven",
  "alder_iris_double": "Alder & Iris",
  "iris_alder_double": "Iris & Alder",
  "marnie_piers_double": "Marnie & Piers",
  "piers_marnie_double": "Piers & Marnie",
} as const;
