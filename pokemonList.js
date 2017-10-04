var pokemonList = [
  {
    "id": 1,
    "name": "BULBASAUR",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 2,
    "name": "IVYSAUR",
    "candyToEvolve": 100,
    "preEvolution": "BULBASAUR",
    "itemRequired": false
  },
  {
    "id": 3,
    "name": "VENUSAUR",
    "preEvolution": "IVYSAUR",
    "itemRequired": false
  },
  {
    "id": 4,
    "name": "CHARMANDER",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 5,
    "name": "CHARMELEON",
    "candyToEvolve": 100,
    "preEvolution": "CHARMANDER",
    "itemRequired": false
  },
  {
    "id": 6,
    "name": "CHARIZARD",
    "preEvolution": "CHARMELEON",
    "itemRequired": false
  },
  {
    "id": 7,
    "name": "SQUIRTLE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 8,
    "name": "WARTORTLE",
    "candyToEvolve": 100,
    "preEvolution": "SQUIRTLE",
    "itemRequired": false
  },
  {
    "id": 9,
    "name": "BLASTOISE",
    "preEvolution": "WARTORTLE",
    "itemRequired": false
  },
  {
    "id": 10,
    "name": "CATERPIE",
    "candyToEvolve": 12,
    "itemRequired": false
  },
  {
    "id": 11,
    "name": "METAPOD",
    "candyToEvolve": 50,
    "preEvolution": "CATERPIE",
    "itemRequired": false
  },
  {
    "id": 12,
    "name": "BUTTERFREE",
    "preEvolution": "METAPOD",
    "itemRequired": false
  },
  {
    "id": 13,
    "name": "WEEDLE",
    "candyToEvolve": 12,
    "itemRequired": false
  },
  {
    "id": 14,
    "name": "KAKUNA",
    "candyToEvolve": 50,
    "preEvolution": "WEEDLE",
    "itemRequired": false
  },
  {
    "id": 15,
    "name": "BEEDRILL",
    "preEvolution": "KAKUNA",
    "itemRequired": false
  },
  {
    "id": 16,
    "name": "PIDGEY",
    "candyToEvolve": 12,
    "itemRequired": false
  },
  {
    "id": 17,
    "name": "PIDGEOTTO",
    "candyToEvolve": 50,
    "preEvolution": "PIDGEY",
    "itemRequired": false
  },
  {
    "id": 18,
    "name": "PIDGEOT",
    "preEvolution": "PIDGEOTTO",
    "itemRequired": false
  },
  {
    "id": 19,
    "name": "RATTATA",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 20,
    "name": "RATICATE",
    "preEvolution": "RATTATA",
    "itemRequired": false
  },
  {
    "id": 21,
    "name": "SPEAROW",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 22,
    "name": "FEAROW",
    "preEvolution": "SPEAROW",
    "itemRequired": false
  },
  {
    "id": 23,
    "name": "EKANS",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 24,
    "name": "ARBOK",
    "preEvolution": "EKANS",
    "itemRequired": false
  },
  {
    "id": 25,
    "name": "PIKACHU",
    "candyToEvolve": 50,
    "itemRequired": false,
    "preEvolution": "PICHU"
  },
  {
    "id": 26,
    "name": "RAICHU",
    "preEvolution": "PIKACHU",
    "itemRequired": false
  },
  {
    "id": 27,
    "name": "SANDSHREW",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 28,
    "name": "SANDSLASH",
    "preEvolution": "SANDSHREW",
    "itemRequired": false
  },
  {
    "id": 29,
    "name": "NIDORAN_FEMALE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 30,
    "name": "NIDORINA",
    "candyToEvolve": 100,
    "preEvolution": "NIDORAN_FEMALE",
    "itemRequired": false
  },
  {
    "id": 31,
    "name": "NIDOQUEEN",
    "preEvolution": "NIDORINA",
    "itemRequired": false
  },
  {
    "id": 32,
    "name": "NIDORAN_MALE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 33,
    "name": "NIDORINO",
    "candyToEvolve": 100,
    "preEvolution": "NIDORAN_MALE",
    "itemRequired": false
  },
  {
    "id": 34,
    "name": "NIDOKING",
    "preEvolution": "NIDORINO",
    "itemRequired": false
  },
  {
    "id": 35,
    "name": "CLEFAIRY",
    "candyToEvolve": 50,
    "itemRequired": false,
    "preEvolution": "CLEFFA"
  },
  {
    "id": 36,
    "name": "CLEFABLE",
    "preEvolution": "CLEFAIRY",
    "itemRequired": false
  },
  {
    "id": 37,
    "name": "VULPIX",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 38,
    "name": "NINETALES",
    "preEvolution": "VULPIX",
    "itemRequired": false
  },
  {
    "id": 39,
    "name": "JIGGLYPUFF",
    "candyToEvolve": 50,
    "itemRequired": false,
    "preEvolution": "IGGLYBUFF"
  },
  {
    "id": 40,
    "name": "WIGGLYTUFF",
    "preEvolution": "JIGGLYPUFF",
    "itemRequired": false
  },
  {
    "id": 41,
    "name": "ZUBAT",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 42,
    "name": "GOLBAT",
    "preEvolution": "ZUBAT",
    "itemRequired": false
  },
  {
    "id": 43,
    "name": "ODDISH",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 44,
    "name": "GLOOM",
    "candyToEvolve": 100,
    "preEvolution": "ODDISH",
    "itemRequired": false
  },
  {
    "id": 45,
    "name": "VILEPLUME",
    "preEvolution": "GLOOM",
    "itemRequired": false
  },
  {
    "id": 46,
    "name": "PARAS",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 47,
    "name": "PARASECT",
    "preEvolution": "PARAS",
    "itemRequired": false
  },
  {
    "id": 48,
    "name": "VENONAT",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 49,
    "name": "VENOMOTH",
    "preEvolution": "VENONAT",
    "itemRequired": false
  },
  {
    "id": 50,
    "name": "DIGLETT",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 51,
    "name": "DUGTRIO",
    "preEvolution": "DIGLETT",
    "itemRequired": false
  },
  {
    "id": 52,
    "name": "MEOWTH",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 53,
    "name": "PERSIAN",
    "preEvolution": "MEOWTH",
    "itemRequired": false
  },
  {
    "id": 54,
    "name": "PSYDUCK",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 55,
    "name": "GOLDUCK",
    "preEvolution": "PSYDUCK",
    "itemRequired": false
  },
  {
    "id": 56,
    "name": "MANKEY",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 57,
    "name": "PRIMEAPE",
    "preEvolution": "MANKEY",
    "itemRequired": false
  },
  {
    "id": 58,
    "name": "GROWLITHE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 59,
    "name": "ARCANINE",
    "preEvolution": "GROWLITHE",
    "itemRequired": false
  },
  {
    "id": 60,
    "name": "POLIWAG",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 61,
    "name": "POLIWHIRL",
    "candyToEvolve": 100,
    "preEvolution": "POLIWAG",
    "itemRequired": false
  },
  {
    "id": 62,
    "name": "POLIWRATH",
    "preEvolution": "POLIWHIRL",
    "itemRequired": false
  },
  {
    "id": 63,
    "name": "ABRA",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 64,
    "name": "KADABRA",
    "candyToEvolve": 100,
    "preEvolution": "ABRA",
    "itemRequired": false
  },
  {
    "id": 65,
    "name": "ALAKAZAM",
    "preEvolution": "KADABRA",
    "itemRequired": false
  },
  {
    "id": 66,
    "name": "MACHOP",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 67,
    "name": "MACHOKE",
    "candyToEvolve": 100,
    "preEvolution": "MACHOP",
    "itemRequired": false
  },
  {
    "id": 68,
    "name": "MACHAMP",
    "preEvolution": "MACHOKE",
    "itemRequired": false
  },
  {
    "id": 69,
    "name": "BELLSPROUT",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 70,
    "name": "WEEPINBELL",
    "candyToEvolve": 100,
    "preEvolution": "BELLSPROUT",
    "itemRequired": false
  },
  {
    "id": 71,
    "name": "VICTREEBEL",
    "preEvolution": "WEEPINBELL",
    "itemRequired": false
  },
  {
    "id": 72,
    "name": "TENTACOOL",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 73,
    "name": "TENTACRUEL",
    "preEvolution": "TENTACOOL",
    "itemRequired": false
  },
  {
    "id": 74,
    "name": "GEODUDE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 75,
    "name": "GRAVELER",
    "candyToEvolve": 100,
    "preEvolution": "GEODUDE",
    "itemRequired": false
  },
  {
    "id": 76,
    "name": "GOLEM",
    "preEvolution": "GRAVELER",
    "itemRequired": false
  },
  {
    "id": 77,
    "name": "PONYTA",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 78,
    "name": "RAPIDASH",
    "preEvolution": "PONYTA",
    "itemRequired": false
  },
  {
    "id": 79,
    "name": "SLOWPOKE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 80,
    "name": "SLOWBRO",
    "preEvolution": "SLOWPOKE",
    "itemRequired": false
  },
  {
    "id": 81,
    "name": "MAGNEMITE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 82,
    "name": "MAGNETON",
    "preEvolution": "MAGNEMITE",
    "itemRequired": false
  },
  {
    "id": 83,
    "name": "FARFETCHD",
    "itemRequired": false
  },
  {
    "id": 84,
    "name": "DODUO",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 85,
    "name": "DODRIO",
    "preEvolution": "DODUO",
    "itemRequired": false
  },
  {
    "id": 86,
    "name": "SEEL",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 87,
    "name": "DEWGONG",
    "preEvolution": "SEEL",
    "itemRequired": false
  },
  {
    "id": 88,
    "name": "GRIMER",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 89,
    "name": "MUK",
    "preEvolution": "GRIMER",
    "itemRequired": false
  },
  {
    "id": 90,
    "name": "SHELLDER",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 91,
    "name": "CLOYSTER",
    "preEvolution": "SHELLDER",
    "itemRequired": false
  },
  {
    "id": 92,
    "name": "GASTLY",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 93,
    "name": "HAUNTER",
    "candyToEvolve": 100,
    "preEvolution": "GASTLY",
    "itemRequired": false
  },
  {
    "id": 94,
    "name": "GENGAR",
    "preEvolution": "HAUNTER",
    "itemRequired": false
  },
  {
    "id": 95,
    "name": "ONIX",
    "itemRequired": true
  },
  {
    "id": 96,
    "name": "DROWZEE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 97,
    "name": "HYPNO",
    "preEvolution": "DROWZEE",
    "itemRequired": false
  },
  {
    "id": 98,
    "name": "KRABBY",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 99,
    "name": "KINGLER",
    "preEvolution": "KRABBY",
    "itemRequired": false
  },
  {
    "id": 100,
    "name": "VOLTORB",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 101,
    "name": "ELECTRODE",
    "preEvolution": "VOLTORB",
    "itemRequired": false
  },
  {
    "id": 102,
    "name": "EXEGGCUTE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 103,
    "name": "EXEGGUTOR",
    "preEvolution": "EXEGGCUTE",
    "itemRequired": false
  },
  {
    "id": 104,
    "name": "CUBONE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 105,
    "name": "MAROWAK",
    "preEvolution": "CUBONE",
    "itemRequired": false
  },
  {
    "id": 106,
    "name": "HITMONLEE",
    "itemRequired": false,
    "preEvolution": "TYROGUE"
  },
  {
    "id": 107,
    "name": "HITMONCHAN",
    "itemRequired": false,
    "preEvolution": "TYROGUE"
  },
  {
    "id": 108,
    "name": "LICKITUNG",
    "itemRequired": false
  },
  {
    "id": 109,
    "name": "KOFFING",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 110,
    "name": "WEEZING",
    "preEvolution": "KOFFING",
    "itemRequired": false
  },
  {
    "id": 111,
    "name": "RHYHORN",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 112,
    "name": "RHYDON",
    "preEvolution": "RHYHORN",
    "itemRequired": false
  },
  {
    "id": 113,
    "name": "CHANSEY",
    "itemRequired": false
  },
  {
    "id": 114,
    "name": "TANGELA",
    "itemRequired": false
  },
  {
    "id": 115,
    "name": "KANGASKHAN",
    "itemRequired": false
  },
  {
    "id": 116,
    "name": "HORSEA",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 117,
    "name": "SEADRA",
    "preEvolution": "HORSEA",
    "itemRequired": true
  },
  {
    "id": 118,
    "name": "GOLDEEN",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 119,
    "name": "SEAKING",
    "preEvolution": "GOLDEEN",
    "itemRequired": false
  },
  {
    "id": 120,
    "name": "STARYU",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 121,
    "name": "STARMIE",
    "preEvolution": "STARYU",
    "itemRequired": false
  },
  {
    "id": 122,
    "name": "MR_MIME",
    "itemRequired": false
  },
  {
    "id": 123,
    "name": "SCYTHER",
    "itemRequired": true
  },
  {
    "id": 124,
    "name": "JYNX",
    "itemRequired": false,
    "preEvolution": "SMOOCHUM"
  },
  {
    "id": 125,
    "name": "ELECTABUZZ",
    "itemRequired": false,
    "preEvolution": "ELEKID"
  },
  {
    "id": 126,
    "name": "MAGMAR",
    "itemRequired": false,
    "preEvolution": "MAGBY"
  },
  {
    "id": 127,
    "name": "PINSIR",
    "itemRequired": false
  },
  {
    "id": 128,
    "name": "TAUROS",
    "itemRequired": false
  },
  {
    "id": 129,
    "name": "MAGIKARP",
    "candyToEvolve": 400,
    "itemRequired": false
  },
  {
    "id": 130,
    "name": "GYARADOS",
    "preEvolution": "MAGIKARP",
    "itemRequired": false
  },
  {
    "id": 131,
    "name": "LAPRAS",
    "itemRequired": false
  },
  {
    "id": 132,
    "name": "DITTO",
    "itemRequired": false
  },
  {
    "id": 133,
    "name": "EEVEE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 134,
    "name": "VAPOREON",
    "preEvolution": "EEVEE",
    "itemRequired": false
  },
  {
    "id": 135,
    "name": "JOLTEON",
    "preEvolution": "EEVEE",
    "itemRequired": false
  },
  {
    "id": 136,
    "name": "FLAREON",
    "preEvolution": "EEVEE",
    "itemRequired": false
  },
  {
    "id": 137,
    "name": "PORYGON",
    "itemRequired": true
  },
  {
    "id": 138,
    "name": "OMANYTE",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 139,
    "name": "OMASTAR",
    "preEvolution": "OMANYTE",
    "itemRequired": false
  },
  {
    "id": 140,
    "name": "KABUTO",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 141,
    "name": "KABUTOPS",
    "preEvolution": "KABUTO",
    "itemRequired": false
  },
  {
    "id": 142,
    "name": "AERODACTYL",
    "itemRequired": false
  },
  {
    "id": 143,
    "name": "SNORLAX",
    "itemRequired": false
  },
  {
    "id": 144,
    "name": "ARTICUNO",
    "itemRequired": false
  },
  {
    "id": 145,
    "name": "ZAPDOS",
    "itemRequired": false
  },
  {
    "id": 146,
    "name": "MOLTRES",
    "itemRequired": false
  },
  {
    "id": 147,
    "name": "DRATINI",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 148,
    "name": "DRAGONAIR",
    "candyToEvolve": 100,
    "preEvolution": "DRATINI",
    "itemRequired": false
  },
  {
    "id": 149,
    "name": "DRAGONITE",
    "preEvolution": "DRAGONAIR",
    "itemRequired": false
  },
  {
    "id": 150,
    "name": "MEWTWO",
    "itemRequired": false
  },
  {
    "id": 151,
    "name": "MEW",
    "itemRequired": false
  },
  {
    "id": 152,
    "name": "CHIKORITA",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 153,
    "name": "BAYLEEF",
    "candyToEvolve": 100,
    "preEvolution": "CHIKORITA",
    "itemRequired": false
  },
  {
    "id": 154,
    "name": "MEGANIUM",
    "preEvolution": "BAYLEEF",
    "itemRequired": false
  },
  {
    "id": 155,
    "name": "CYNDAQUIL",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 156,
    "name": "QUILAVA",
    "candyToEvolve": 100,
    "preEvolution": "CYNDAQUIL",
    "itemRequired": false
  },
  {
    "id": 157,
    "name": "TYPHLOSION",
    "preEvolution": "QUILAVA",
    "itemRequired": false
  },
  {
    "id": 158,
    "name": "TOTODILE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 159,
    "name": "CROCONAW",
    "candyToEvolve": 100,
    "preEvolution": "TOTODILE",
    "itemRequired": false
  },
  {
    "id": 160,
    "name": "FERALIGATR",
    "preEvolution": "CROCONAW",
    "itemRequired": false
  },
  {
    "id": 161,
    "name": "SENTRET",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 162,
    "name": "FURRET",
    "preEvolution": "SENTRET",
    "itemRequired": false
  },
  {
    "id": 163,
    "name": "HOOTHOOT",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 164,
    "name": "NOCTOWL",
    "preEvolution": "HOOTHOOT",
    "itemRequired": false
  },
  {
    "id": 165,
    "name": "LEDYBA",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 166,
    "name": "LEDIAN",
    "preEvolution": "LEDYBA",
    "itemRequired": false
  },
  {
    "id": 167,
    "name": "SPINARAK",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 168,
    "name": "ARIADOS",
    "preEvolution": "SPINARAK",
    "itemRequired": false
  },
  {
    "id": 169,
    "name": "CROBAT",
    "preEvolution": "GOLBAT",
    "itemRequired": false
  },
  {
    "id": 170,
    "name": "CHINCHOU",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 171,
    "name": "LANTURN",
    "preEvolution": "CHINCHOU",
    "itemRequired": false
  },
  {
    "id": 172,
    "name": "PICHU",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 173,
    "name": "CLEFFA",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 174,
    "name": "IGGLYBUFF",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 175,
    "name": "TOGEPI",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 176,
    "name": "TOGETIC",
    "preEvolution": "TOGEPI",
    "itemRequired": false
  },
  {
    "id": 177,
    "name": "NATU",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 178,
    "name": "XATU",
    "preEvolution": "NATU",
    "itemRequired": false
  },
  {
    "id": 179,
    "name": "MAREEP",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 180,
    "name": "FLAAFFY",
    "candyToEvolve": 100,
    "preEvolution": "MAREEP",
    "itemRequired": false
  },
  {
    "id": 181,
    "name": "AMPHAROS",
    "preEvolution": "FLAAFFY",
    "itemRequired": false
  },
  {
    "id": 182,
    "name": "BELLOSSOM",
    "preEvolution": "GLOOM",
    "itemRequired": false
  },
  {
    "id": 183,
    "name": "MARILL",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 184,
    "name": "AZUMARILL",
    "preEvolution": "MARILL",
    "itemRequired": false
  },
  {
    "id": 185,
    "name": "SUDOWOODO",
    "itemRequired": false
  },
  {
    "id": 186,
    "name": "POLITOED",
    "preEvolution": "POLIWHIRL",
    "itemRequired": false
  },
  {
    "id": 187,
    "name": "HOPPIP",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 188,
    "name": "SKIPLOOM",
    "candyToEvolve": 100,
    "preEvolution": "HOPPIP",
    "itemRequired": false
  },
  {
    "id": 189,
    "name": "JUMPLUFF",
    "preEvolution": "SKIPLOOM",
    "itemRequired": false
  },
  {
    "id": 190,
    "name": "AIPOM",
    "itemRequired": false
  },
  {
    "id": 191,
    "name": "SUNKERN",
    "candyToEvolve": 50,
    "itemRequired": true
  },
  {
    "id": 192,
    "name": "SUNFLORA",
    "preEvolution": "SUNKERN",
    "itemRequired": false
  },
  {
    "id": 193,
    "name": "YANMA",
    "itemRequired": false
  },
  {
    "id": 194,
    "name": "WOOPER",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 195,
    "name": "QUAGSIRE",
    "preEvolution": "WOOPER",
    "itemRequired": false
  },
  {
    "id": 196,
    "name": "ESPEON",
    "preEvolution": "EEVEE",
    "itemRequired": false
  },
  {
    "id": 197,
    "name": "UMBREON",
    "preEvolution": "EEVEE",
    "itemRequired": false
  },
  {
    "id": 198,
    "name": "MURKROW",
    "itemRequired": false
  },
  {
    "id": 199,
    "name": "SLOWKING",
    "preEvolution": "SLOWPOKE",
    "itemRequired": false
  },
  {
    "id": 200,
    "name": "MISDREAVUS",
    "itemRequired": false
  },
  {
    "id": 201,
    "name": "UNOWN",
    "itemRequired": false
  },
  {
    "id": 202,
    "name": "WOBBUFFET",
    "itemRequired": false
  },
  {
    "id": 203,
    "name": "GIRAFARIG",
    "itemRequired": false
  },
  {
    "id": 204,
    "name": "PINECO",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 205,
    "name": "FORRETRESS",
    "preEvolution": "PINECO",
    "itemRequired": false
  },
  {
    "id": 206,
    "name": "DUNSPARCE",
    "itemRequired": false
  },
  {
    "id": 207,
    "name": "GLIGAR",
    "itemRequired": false
  },
  {
    "id": 208,
    "name": "STEELIX",
    "preEvolution": "ONIX",
    "itemRequired": false
  },
  {
    "id": 209,
    "name": "SNUBBULL",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 210,
    "name": "GRANBULL",
    "preEvolution": "SNUBBULL",
    "itemRequired": false
  },
  {
    "id": 211,
    "name": "QWILFISH",
    "itemRequired": false
  },
  {
    "id": 212,
    "name": "SCIZOR",
    "preEvolution": "SCYTHER",
    "itemRequired": false
  },
  {
    "id": 213,
    "name": "SHUCKLE",
    "itemRequired": false
  },
  {
    "id": 214,
    "name": "HERACROSS",
    "itemRequired": false
  },
  {
    "id": 215,
    "name": "SNEASEL",
    "itemRequired": false
  },
  {
    "id": 216,
    "name": "TEDDIURSA",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 217,
    "name": "URSARING",
    "preEvolution": "TEDDIURSA",
    "itemRequired": false
  },
  {
    "id": 218,
    "name": "SLUGMA",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 219,
    "name": "MAGCARGO",
    "preEvolution": "SLUGMA",
    "itemRequired": false
  },
  {
    "id": 220,
    "name": "SWINUB",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 221,
    "name": "PILOSWINE",
    "preEvolution": "SWINUB",
    "itemRequired": false
  },
  {
    "id": 222,
    "name": "CORSOLA",
    "itemRequired": false
  },
  {
    "id": 223,
    "name": "REMORAID",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 224,
    "name": "OCTILLERY",
    "preEvolution": "REMORAID",
    "itemRequired": false
  },
  {
    "id": 225,
    "name": "DELIBIRD",
    "itemRequired": false
  },
  {
    "id": 226,
    "name": "MANTINE",
    "itemRequired": false
  },
  {
    "id": 227,
    "name": "SKARMORY",
    "itemRequired": false
  },
  {
    "id": 228,
    "name": "HOUNDOUR",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 229,
    "name": "HOUNDOOM",
    "preEvolution": "HOUNDOUR",
    "itemRequired": false
  },
  {
    "id": 230,
    "name": "KINGDRA",
    "preEvolution": "SEADRA",
    "itemRequired": false
  },
  {
    "id": 231,
    "name": "PHANPY",
    "candyToEvolve": 50,
    "itemRequired": false
  },
  {
    "id": 232,
    "name": "DONPHAN",
    "preEvolution": "PHANPY",
    "itemRequired": false
  },
  {
    "id": 233,
    "name": "PORYGON2",
    "preEvolution": "PORYGON",
    "itemRequired": false
  },
  {
    "id": 234,
    "name": "STANTLER",
    "itemRequired": false
  },
  {
    "id": 235,
    "name": "SMEARGLE",
    "itemRequired": false
  },
  {
    "id": 236,
    "name": "TYROGUE",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 237,
    "name": "HITMONTOP",
    "preEvolution": "TYROGUE",
    "itemRequired": false
  },
  {
    "id": 238,
    "name": "SMOOCHUM",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 239,
    "name": "ELEKID",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 240,
    "name": "MAGBY",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 241,
    "name": "MILTANK",
    "itemRequired": false
  },
  {
    "id": 242,
    "name": "BLISSEY",
    "preEvolution": "CHANSEY",
    "itemRequired": false
  },
  {
    "id": 243,
    "name": "RAIKOU",
    "itemRequired": false
  },
  {
    "id": 244,
    "name": "ENTEI",
    "itemRequired": false
  },
  {
    "id": 245,
    "name": "SUICUNE",
    "itemRequired": false
  },
  {
    "id": 246,
    "name": "LARVITAR",
    "candyToEvolve": 25,
    "itemRequired": false
  },
  {
    "id": 247,
    "name": "PUPITAR",
    "candyToEvolve": 100,
    "preEvolution": "LARVITAR",
    "itemRequired": false
  },
  {
    "id": 248,
    "name": "TYRANITAR",
    "preEvolution": "PUPITAR",
    "itemRequired": false
  },
  {
    "id": 249,
    "name": "LUGIA",
    "itemRequired": false
  },
  {
    "id": 250,
    "name": "HO_OH",
    "itemRequired": false
  },
  {
    "id": 251,
    "name": "CELEBI",
    "itemRequired": false
  }
]
