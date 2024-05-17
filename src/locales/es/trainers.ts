import {SimpleTranslationEntries} from "#app/plugins/i18n";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
    "elite_four": "Elite Four",
    "gym_leader": "Gym Leader",
    "gym_leader_female": "Gym Leader",
    "champion": "Champion",
    "rival": "Rival",
    "professor": "Professor",
    "frontier_brain": "Frontier Brain",
    // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
    "ace_trainer": "Ace Trainer",
    "ace_trainer_female": "Ace Trainer",
    "ace_duo": "Ace Duo",
    "artist": "Artist",
    "artist_female": "Artist",
    "backers": "Backers",
    "backpacker": "Backpacker",
    "backpacker_female": "Backpacker",
    "backpackers": "Backpackers",
    "baker": "Baker",
    "battle_girl": "Battle Girl",
    "beauty": "Beauty",
    "beginners": "Beginners",
    "biker": "Biker",
    "black_belt": "Black Belt",
    "breeder": "Breeder",
    "breeder_female": "Breeder",
    "breeders": "Breeders",
    "clerk": "Clerk",
    "clerk_female": "Clerk",
    "colleagues": "Colleagues",
    "crush_kin": "Crush Kin",
    "cyclist": "Cyclist",
    "cyclist_female": "Cyclist",
    "cyclists": "Cyclists",
    "dancer": "Dancer",
    "dancer_female": "Dancer",
    "depot_agent": "Depot Agent",
    "doctor": "Doctor",
    "doctor_female": "Doctor",
    "fisherman": "Fisherman",
    "fisherman_female": "Fisherman",
    "gentleman": "Gentleman",
    "guitarist": "Guitarist",
    "guitarist_female": "Guitarist",
    "harlequin": "Harlequin",
    "hiker": "Hiker",
    "hooligans": "Hooligans",
    "hoopster": "Hoopster",
    "infielder": "Infielder",
    "janitor": "Janitor",
    "lady": "Lady",
    "lass": "Lass",
    "linebacker": "Linebacker",
    "maid": "Maid",
    "madame": "Madame",
    "medical_team": "Medical Team",
    "musician": "Musician",
    "hex_maniac": "Hex Maniac",
    "nurse": "Nurse",
    "nursery_aide": "Nursery Aide",
    "officer": "Officer",
    "parasol_lady": "Parasol Lady",
    "pilot": "Pilot",
    "pokefan": "Poké Fan",
    "pokefan_family": "Poké Fan Family",
    "preschooler": "Preschooler",
    "preschooler_female": "Preschooler",
    "preschoolers": "Preschoolers",
    "psychic": "Psychic",
    "psychic_female": "Psychic",
    "psychics": "Psychics",
    "pokémon_ranger": "Pokémon Ranger",
    "pokémon_rangers": "Pokémon Ranger",
    "ranger": "Ranger",
    "restaurant_staff": "Restaurant Staff",
    "rich": "Rich",
    "rich_female": "Rich",
    "rich_boy": "Rich Boy",
    "rich_couple": "Rich Couple",
    "rich_kid": "Rich Kid",
    "rich_kid_female": "Rich Kid",
    "rich_kids": "Rich Kids",
    "roughneck": "Roughneck",
    "scientist": "Scientist",
    "scientist_female": "Scientist",
    "scientists": "Scientists",
    "smasher": "Smasher",
    "snow_worker": "Snow Worker",
    "snow_worker_female": "Snow Worker",
    "striker": "Striker",
    "school_kid": "School Kid",
    "school_kid_female": "School Kid",
    "school_kids": "School Kids",
    "swimmer": "Swimmer",
    "swimmer_female": "Swimmer",
    "swimmers": "Swimmers",
    "twins": "Twins",
    "veteran": "Veteran",
    "veteran_female": "Veteran",
    "veteran_duo": "Veteran Duo",
    "waiter": "Waiter",
    "waitress": "Waitress",
    "worker": "Worker",
    "worker_female": "Worker",
    "workers": "Workers",
    "youngster": "Youngster"
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
    "larry_elite": "Larry", // Does this really need to be an extra entry? (it is in trainer-type.ts so I added it here)
    "hassel": "Hassel",
    "crispin": "Crispin",
    "amarys": "Amarys",
    "lacey": "Lacey",
    "drayton": "Drayton",
    "blue": "Blue",
    "red": "Red",
    "lance_champion": "Lance", // Does this really need to be an extra entry? (it is in trainer-type.ts so I added it here)
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
} as const;
