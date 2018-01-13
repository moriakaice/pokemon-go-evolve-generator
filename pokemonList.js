var pokemonList = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Bulbasaur"
  },
  {
    "id": 3,
    "name": "Venusaur",
    "itemRequired": false,
    "preEvolution": "Ivysaur"
  },
  {
    "id": 4,
    "name": "Charmander",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Charmander"
  },
  {
    "id": 6,
    "name": "Charizard",
    "itemRequired": false,
    "preEvolution": "Charmeleon"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 8,
    "name": "Wartortle",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Squirtle"
  },
  {
    "id": 9,
    "name": "Blastoise",
    "itemRequired": false,
    "preEvolution": "Wartortle"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "itemRequired": false,
    "candyToEvolve": 12
  },
  {
    "id": 11,
    "name": "Metapod",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Caterpie"
  },
  {
    "id": 12,
    "name": "Butterfree",
    "itemRequired": false,
    "preEvolution": "Metapod"
  },
  {
    "id": 13,
    "name": "Weedle",
    "itemRequired": false,
    "candyToEvolve": 12
  },
  {
    "id": 14,
    "name": "Kakuna",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Weedle"
  },
  {
    "id": 15,
    "name": "Beedrill",
    "itemRequired": false,
    "preEvolution": "Kakuna"
  },
  {
    "id": 16,
    "name": "Pidgey",
    "itemRequired": false,
    "candyToEvolve": 12
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Pidgey"
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "itemRequired": false,
    "preEvolution": "Pidgeotto"
  },
  {
    "id": 19,
    "name": "Rattata",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 20,
    "name": "Raticate",
    "itemRequired": false,
    "preEvolution": "Rattata"
  },
  {
    "id": 21,
    "name": "Spearow",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 22,
    "name": "Fearow",
    "itemRequired": false,
    "preEvolution": "Spearow"
  },
  {
    "id": 23,
    "name": "Ekans",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 24,
    "name": "Arbok",
    "itemRequired": false,
    "preEvolution": "Ekans"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Pichu"
  },
  {
    "id": 26,
    "name": "Raichu",
    "itemRequired": false,
    "preEvolution": "Pikachu"
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 28,
    "name": "Sandslash",
    "itemRequired": false,
    "preEvolution": "Sandshrew"
  },
  {
    "id": 29,
    "name": "Nidoran Female",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 30,
    "name": "Nidorina",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Nidoran Female"
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "itemRequired": false,
    "preEvolution": "Nidorina"
  },
  {
    "id": 32,
    "name": "Nidoran Male",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 33,
    "name": "Nidorino",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Nidoran Male"
  },
  {
    "id": 34,
    "name": "Nidoking",
    "itemRequired": false,
    "preEvolution": "Nidorino"
  },
  {
    "id": 35,
    "name": "Clefairy",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Cleffa"
  },
  {
    "id": 36,
    "name": "Clefable",
    "itemRequired": false,
    "preEvolution": "Clefairy"
  },
  {
    "id": 37,
    "name": "Vulpix",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 38,
    "name": "Ninetales",
    "itemRequired": false,
    "preEvolution": "Vulpix"
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Igglybuff"
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "itemRequired": false,
    "preEvolution": "Jigglypuff"
  },
  {
    "id": 41,
    "name": "Zubat",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 42,
    "name": "Golbat",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Zubat"
  },
  {
    "id": 43,
    "name": "Oddish",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 44,
    "name": "Gloom",
    "itemRequired": true,
    "candyToEvolve": 100,
    "preEvolution": "Oddish"
  },
  {
    "id": 45,
    "name": "Vileplume",
    "itemRequired": false,
    "preEvolution": "Gloom"
  },
  {
    "id": 46,
    "name": "Paras",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 47,
    "name": "Parasect",
    "itemRequired": false,
    "preEvolution": "Paras"
  },
  {
    "id": 48,
    "name": "Venonat",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 49,
    "name": "Venomoth",
    "itemRequired": false,
    "preEvolution": "Venonat"
  },
  {
    "id": 50,
    "name": "Diglett",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "itemRequired": false,
    "preEvolution": "Diglett"
  },
  {
    "id": 52,
    "name": "Meowth",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 53,
    "name": "Persian",
    "itemRequired": false,
    "preEvolution": "Meowth"
  },
  {
    "id": 54,
    "name": "Psyduck",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 55,
    "name": "Golduck",
    "itemRequired": false,
    "preEvolution": "Psyduck"
  },
  {
    "id": 56,
    "name": "Mankey",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 57,
    "name": "Primeape",
    "itemRequired": false,
    "preEvolution": "Mankey"
  },
  {
    "id": 58,
    "name": "Growlithe",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 59,
    "name": "Arcanine",
    "itemRequired": false,
    "preEvolution": "Growlithe"
  },
  {
    "id": 60,
    "name": "Poliwag",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "itemRequired": true,
    "candyToEvolve": 100,
    "preEvolution": "Poliwag"
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "itemRequired": false,
    "preEvolution": "Poliwhirl"
  },
  {
    "id": 63,
    "name": "Abra",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 64,
    "name": "Kadabra",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Abra"
  },
  {
    "id": 65,
    "name": "Alakazam",
    "itemRequired": false,
    "preEvolution": "Kadabra"
  },
  {
    "id": 66,
    "name": "Machop",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 67,
    "name": "Machoke",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Machop"
  },
  {
    "id": 68,
    "name": "Machamp",
    "itemRequired": false,
    "preEvolution": "Machoke"
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Bellsprout"
  },
  {
    "id": 71,
    "name": "Victreebel",
    "itemRequired": false,
    "preEvolution": "Weepinbell"
  },
  {
    "id": 72,
    "name": "Tentacool",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "itemRequired": false,
    "preEvolution": "Tentacool"
  },
  {
    "id": 74,
    "name": "Geodude",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 75,
    "name": "Graveler",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Geodude"
  },
  {
    "id": 76,
    "name": "Golem",
    "itemRequired": false,
    "preEvolution": "Graveler"
  },
  {
    "id": 77,
    "name": "Ponyta",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 78,
    "name": "Rapidash",
    "itemRequired": false,
    "preEvolution": "Ponyta"
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "itemRequired": true,
    "candyToEvolve": 50
  },
  {
    "id": 80,
    "name": "Slowbro",
    "itemRequired": false,
    "preEvolution": "Slowpoke"
  },
  {
    "id": 81,
    "name": "Magnemite",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 82,
    "name": "Magneton",
    "itemRequired": false,
    "preEvolution": "Magnemite"
  },
  {
    "id": 83,
    "name": "Farfetchd",
    "itemRequired": false
  },
  {
    "id": 84,
    "name": "Doduo",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 85,
    "name": "Dodrio",
    "itemRequired": false,
    "preEvolution": "Doduo"
  },
  {
    "id": 86,
    "name": "Seel",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 87,
    "name": "Dewgong",
    "itemRequired": false,
    "preEvolution": "Seel"
  },
  {
    "id": 88,
    "name": "Grimer",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 89,
    "name": "Muk",
    "itemRequired": false,
    "preEvolution": "Grimer"
  },
  {
    "id": 90,
    "name": "Shellder",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 91,
    "name": "Cloyster",
    "itemRequired": false,
    "preEvolution": "Shellder"
  },
  {
    "id": 92,
    "name": "Gastly",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 93,
    "name": "Haunter",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Gastly"
  },
  {
    "id": 94,
    "name": "Gengar",
    "itemRequired": false,
    "preEvolution": "Haunter"
  },
  {
    "id": 95,
    "name": "Onix",
    "itemRequired": true,
    "candyToEvolve": 50
  },
  {
    "id": 96,
    "name": "Drowzee",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 97,
    "name": "Hypno",
    "itemRequired": false,
    "preEvolution": "Drowzee"
  },
  {
    "id": 98,
    "name": "Krabby",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 99,
    "name": "Kingler",
    "itemRequired": false,
    "preEvolution": "Krabby"
  },
  {
    "id": 100,
    "name": "Voltorb",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 101,
    "name": "Electrode",
    "itemRequired": false,
    "preEvolution": "Voltorb"
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "itemRequired": false,
    "preEvolution": "Exeggcute"
  },
  {
    "id": 104,
    "name": "Cubone",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 105,
    "name": "Marowak",
    "itemRequired": false,
    "preEvolution": "Cubone"
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "itemRequired": false,
    "preEvolution": "Tyrogue"
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "itemRequired": false,
    "preEvolution": "Tyrogue"
  },
  {
    "id": 108,
    "name": "Lickitung",
    "itemRequired": false
  },
  {
    "id": 109,
    "name": "Koffing",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 110,
    "name": "Weezing",
    "itemRequired": false,
    "preEvolution": "Koffing"
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 112,
    "name": "Rhydon",
    "itemRequired": false,
    "preEvolution": "Rhyhorn"
  },
  {
    "id": 113,
    "name": "Chansey",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 114,
    "name": "Tangela",
    "itemRequired": false
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "itemRequired": false
  },
  {
    "id": 116,
    "name": "Horsea",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 117,
    "name": "Seadra",
    "itemRequired": true,
    "candyToEvolve": 100,
    "preEvolution": "Horsea"
  },
  {
    "id": 118,
    "name": "Goldeen",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 119,
    "name": "Seaking",
    "itemRequired": false,
    "preEvolution": "Goldeen"
  },
  {
    "id": 120,
    "name": "Staryu",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 121,
    "name": "Starmie",
    "itemRequired": false,
    "preEvolution": "Staryu"
  },
  {
    "id": 122,
    "name": "Mr Mime",
    "itemRequired": false
  },
  {
    "id": 123,
    "name": "Scyther",
    "itemRequired": true,
    "candyToEvolve": 50
  },
  {
    "id": 124,
    "name": "Jynx",
    "itemRequired": false,
    "preEvolution": "Smoochum"
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "itemRequired": false,
    "preEvolution": "Elekid"
  },
  {
    "id": 126,
    "name": "Magmar",
    "itemRequired": false,
    "preEvolution": "Magby"
  },
  {
    "id": 127,
    "name": "Pinsir",
    "itemRequired": false
  },
  {
    "id": 128,
    "name": "Tauros",
    "itemRequired": false
  },
  {
    "id": 129,
    "name": "Magikarp",
    "itemRequired": false,
    "candyToEvolve": 400
  },
  {
    "id": 130,
    "name": "Gyarados",
    "itemRequired": false,
    "preEvolution": "Magikarp"
  },
  {
    "id": 131,
    "name": "Lapras",
    "itemRequired": false
  },
  {
    "id": 132,
    "name": "Ditto",
    "itemRequired": false
  },
  {
    "id": 133,
    "name": "Eevee",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "itemRequired": false,
    "preEvolution": "Eevee"
  },
  {
    "id": 135,
    "name": "Jolteon",
    "itemRequired": false,
    "preEvolution": "Eevee"
  },
  {
    "id": 136,
    "name": "Flareon",
    "itemRequired": false,
    "preEvolution": "Eevee"
  },
  {
    "id": 137,
    "name": "Porygon",
    "itemRequired": true,
    "candyToEvolve": 50
  },
  {
    "id": 138,
    "name": "Omanyte",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 139,
    "name": "Omastar",
    "itemRequired": false,
    "preEvolution": "Omanyte"
  },
  {
    "id": 140,
    "name": "Kabuto",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 141,
    "name": "Kabutops",
    "itemRequired": false,
    "preEvolution": "Kabuto"
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "itemRequired": false
  },
  {
    "id": 143,
    "name": "Snorlax",
    "itemRequired": false
  },
  {
    "id": 144,
    "name": "Articuno",
    "itemRequired": false
  },
  {
    "id": 145,
    "name": "Zapdos",
    "itemRequired": false
  },
  {
    "id": 146,
    "name": "Moltres",
    "itemRequired": false
  },
  {
    "id": 147,
    "name": "Dratini",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 148,
    "name": "Dragonair",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Dratini"
  },
  {
    "id": 149,
    "name": "Dragonite",
    "itemRequired": false,
    "preEvolution": "Dragonair"
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "itemRequired": false
  },
  {
    "id": 151,
    "name": "Mew",
    "itemRequired": false
  },
  {
    "id": 152,
    "name": "Chikorita",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 153,
    "name": "Bayleef",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Chikorita"
  },
  {
    "id": 154,
    "name": "Meganium",
    "itemRequired": false,
    "preEvolution": "Bayleef"
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 156,
    "name": "Quilava",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Cyndaquil"
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "itemRequired": false,
    "preEvolution": "Quilava"
  },
  {
    "id": 158,
    "name": "Totodile",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 159,
    "name": "Croconaw",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Totodile"
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "itemRequired": false,
    "preEvolution": "Croconaw"
  },
  {
    "id": 161,
    "name": "Sentret",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 162,
    "name": "Furret",
    "itemRequired": false,
    "preEvolution": "Sentret"
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 164,
    "name": "Noctowl",
    "itemRequired": false,
    "preEvolution": "Hoothoot"
  },
  {
    "id": 165,
    "name": "Ledyba",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 166,
    "name": "Ledian",
    "itemRequired": false,
    "preEvolution": "Ledyba"
  },
  {
    "id": 167,
    "name": "Spinarak",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 168,
    "name": "Ariados",
    "itemRequired": false,
    "preEvolution": "Spinarak"
  },
  {
    "id": 169,
    "name": "Crobat",
    "itemRequired": false,
    "preEvolution": "Golbat"
  },
  {
    "id": 170,
    "name": "Chinchou",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 171,
    "name": "Lanturn",
    "itemRequired": false,
    "preEvolution": "Chinchou"
  },
  {
    "id": 172,
    "name": "Pichu",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 173,
    "name": "Cleffa",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 175,
    "name": "Togepi",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 176,
    "name": "Togetic",
    "itemRequired": false,
    "preEvolution": "Togepi"
  },
  {
    "id": 177,
    "name": "Natu",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 178,
    "name": "Xatu",
    "itemRequired": false,
    "preEvolution": "Natu"
  },
  {
    "id": 179,
    "name": "Mareep",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Mareep"
  },
  {
    "id": 181,
    "name": "Ampharos",
    "itemRequired": false,
    "preEvolution": "Flaaffy"
  },
  {
    "id": 182,
    "name": "Bellossom",
    "itemRequired": false,
    "preEvolution": "Gloom"
  },
  {
    "id": 183,
    "name": "Marill",
    "itemRequired": false,
    "candyToEvolve": 25,
    "preEvolution": "Azurill"
  },
  {
    "id": 184,
    "name": "Azumarill",
    "itemRequired": false,
    "preEvolution": "Marill"
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "itemRequired": false
  },
  {
    "id": 186,
    "name": "Politoed",
    "itemRequired": false,
    "preEvolution": "Poliwhirl"
  },
  {
    "id": 187,
    "name": "Hoppip",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 188,
    "name": "Skiploom",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Hoppip"
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "itemRequired": false,
    "preEvolution": "Skiploom"
  },
  {
    "id": 190,
    "name": "Aipom",
    "itemRequired": false
  },
  {
    "id": 191,
    "name": "Sunkern",
    "itemRequired": true,
    "candyToEvolve": 50
  },
  {
    "id": 192,
    "name": "Sunflora",
    "itemRequired": false,
    "preEvolution": "Sunkern"
  },
  {
    "id": 193,
    "name": "Yanma",
    "itemRequired": false
  },
  {
    "id": 194,
    "name": "Wooper",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 195,
    "name": "Quagsire",
    "itemRequired": false,
    "preEvolution": "Wooper"
  },
  {
    "id": 196,
    "name": "Espeon",
    "itemRequired": false,
    "preEvolution": "Eevee"
  },
  {
    "id": 197,
    "name": "Umbreon",
    "itemRequired": false,
    "preEvolution": "Eevee"
  },
  {
    "id": 198,
    "name": "Murkrow",
    "itemRequired": false
  },
  {
    "id": 199,
    "name": "Slowking",
    "itemRequired": false,
    "preEvolution": "Slowpoke"
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "itemRequired": false
  },
  {
    "id": 201,
    "name": "Unown",
    "itemRequired": false
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "itemRequired": false,
    "preEvolution": "Wynaut"
  },
  {
    "id": 203,
    "name": "Girafarig",
    "itemRequired": false
  },
  {
    "id": 204,
    "name": "Pineco",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 205,
    "name": "Forretress",
    "itemRequired": false,
    "preEvolution": "Pineco"
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "itemRequired": false
  },
  {
    "id": 207,
    "name": "Gligar",
    "itemRequired": false
  },
  {
    "id": 208,
    "name": "Steelix",
    "itemRequired": false,
    "preEvolution": "Onix"
  },
  {
    "id": 209,
    "name": "Snubbull",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 210,
    "name": "Granbull",
    "itemRequired": false,
    "preEvolution": "Snubbull"
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "itemRequired": false
  },
  {
    "id": 212,
    "name": "Scizor",
    "itemRequired": false,
    "preEvolution": "Scyther"
  },
  {
    "id": 213,
    "name": "Shuckle",
    "itemRequired": false
  },
  {
    "id": 214,
    "name": "Heracross",
    "itemRequired": false
  },
  {
    "id": 215,
    "name": "Sneasel",
    "itemRequired": false
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 217,
    "name": "Ursaring",
    "itemRequired": false,
    "preEvolution": "Teddiursa"
  },
  {
    "id": 218,
    "name": "Slugma",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 219,
    "name": "Magcargo",
    "itemRequired": false,
    "preEvolution": "Slugma"
  },
  {
    "id": 220,
    "name": "Swinub",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 221,
    "name": "Piloswine",
    "itemRequired": false,
    "preEvolution": "Swinub"
  },
  {
    "id": 222,
    "name": "Corsola",
    "itemRequired": false
  },
  {
    "id": 223,
    "name": "Remoraid",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 224,
    "name": "Octillery",
    "itemRequired": false,
    "preEvolution": "Remoraid"
  },
  {
    "id": 225,
    "name": "Delibird",
    "itemRequired": false
  },
  {
    "id": 226,
    "name": "Mantine",
    "itemRequired": false
  },
  {
    "id": 227,
    "name": "Skarmory",
    "itemRequired": false
  },
  {
    "id": 228,
    "name": "Houndour",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 229,
    "name": "Houndoom",
    "itemRequired": false,
    "preEvolution": "Houndour"
  },
  {
    "id": 230,
    "name": "Kingdra",
    "itemRequired": false,
    "preEvolution": "Seadra"
  },
  {
    "id": 231,
    "name": "Phanpy",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 232,
    "name": "Donphan",
    "itemRequired": false,
    "preEvolution": "Phanpy"
  },
  {
    "id": 233,
    "name": "Porygon2",
    "itemRequired": false,
    "preEvolution": "Porygon"
  },
  {
    "id": 234,
    "name": "Stantler",
    "itemRequired": false
  },
  {
    "id": 235,
    "name": "Smeargle",
    "itemRequired": false
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "itemRequired": false,
    "preEvolution": "Tyrogue"
  },
  {
    "id": 238,
    "name": "Smoochum",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 239,
    "name": "Elekid",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 240,
    "name": "Magby",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 241,
    "name": "Miltank",
    "itemRequired": false
  },
  {
    "id": 242,
    "name": "Blissey",
    "itemRequired": false,
    "preEvolution": "Chansey"
  },
  {
    "id": 243,
    "name": "Raikou",
    "itemRequired": false
  },
  {
    "id": 244,
    "name": "Entei",
    "itemRequired": false
  },
  {
    "id": 245,
    "name": "Suicune",
    "itemRequired": false
  },
  {
    "id": 246,
    "name": "Larvitar",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 247,
    "name": "Pupitar",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Larvitar"
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "itemRequired": false,
    "preEvolution": "Pupitar"
  },
  {
    "id": 249,
    "name": "Lugia",
    "itemRequired": false
  },
  {
    "id": 250,
    "name": "Ho Oh",
    "itemRequired": false
  },
  {
    "id": 251,
    "name": "Celebi",
    "itemRequired": false
  },
  {
    "id": 252,
    "name": "Treecko",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 253,
    "name": "Grovyle",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Treecko"
  },
  {
    "id": 254,
    "name": "Sceptile",
    "itemRequired": false,
    "preEvolution": "Grovyle"
  },
  {
    "id": 255,
    "name": "Torchic",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 256,
    "name": "Combusken",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Torchic"
  },
  {
    "id": 257,
    "name": "Blaziken",
    "itemRequired": false,
    "preEvolution": "Combusken"
  },
  {
    "id": 258,
    "name": "Mudkip",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Mudkip"
  },
  {
    "id": 260,
    "name": "Swampert",
    "itemRequired": false,
    "preEvolution": "Marshtomp"
  },
  {
    "id": 261,
    "name": "Poochyena",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 262,
    "name": "Mightyena",
    "itemRequired": false,
    "preEvolution": "Poochyena"
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 264,
    "name": "Linoone",
    "itemRequired": false,
    "preEvolution": "Zigzagoon"
  },
  {
    "id": 265,
    "name": "Wurmple",
    "itemRequired": false,
    "candyToEvolve": 12
  },
  {
    "id": 266,
    "name": "Silcoon",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Wurmple"
  },
  {
    "id": 267,
    "name": "Beautifly",
    "itemRequired": false,
    "preEvolution": "Silcoon"
  },
  {
    "id": 268,
    "name": "Cascoon",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Wurmple"
  },
  {
    "id": 269,
    "name": "Dustox",
    "itemRequired": false,
    "preEvolution": "Cascoon"
  },
  {
    "id": 270,
    "name": "Lotad",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 271,
    "name": "Lombre",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Lotad"
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "itemRequired": false,
    "preEvolution": "Lombre"
  },
  {
    "id": 273,
    "name": "Seedot",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Seedot"
  },
  {
    "id": 275,
    "name": "Shiftry",
    "itemRequired": false,
    "preEvolution": "Nuzleaf"
  },
  {
    "id": 276,
    "name": "Taillow",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 277,
    "name": "Swellow",
    "itemRequired": false,
    "preEvolution": "Taillow"
  },
  {
    "id": 278,
    "name": "Wingull",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 279,
    "name": "Pelipper",
    "itemRequired": false,
    "preEvolution": "Wingull"
  },
  {
    "id": 280,
    "name": "Ralts",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 281,
    "name": "Kirlia",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Ralts"
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "itemRequired": false,
    "preEvolution": "Kirlia"
  },
  {
    "id": 283,
    "name": "Surskit",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 284,
    "name": "Masquerain",
    "itemRequired": false,
    "preEvolution": "Surskit"
  },
  {
    "id": 285,
    "name": "Shroomish",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 286,
    "name": "Breloom",
    "itemRequired": false,
    "preEvolution": "Shroomish"
  },
  {
    "id": 287,
    "name": "Slakoth",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Slakoth"
  },
  {
    "id": 289,
    "name": "Slaking",
    "itemRequired": false,
    "preEvolution": "Vigoroth"
  },
  {
    "id": 290,
    "name": "Nincada",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 291,
    "name": "Ninjask",
    "itemRequired": false,
    "preEvolution": "Nincada"
  },
  {
    "id": 292,
    "name": "Shedinja",
    "itemRequired": false,
    "preEvolution": "Nincada"
  },
  {
    "id": 293,
    "name": "Whismur",
    "itemRequired": false,
    "candyToEvolve": 12
  },
  {
    "id": 294,
    "name": "Loudred",
    "itemRequired": false,
    "candyToEvolve": 50,
    "preEvolution": "Whismur"
  },
  {
    "id": 295,
    "name": "Exploud",
    "itemRequired": false,
    "preEvolution": "Loudred"
  },
  {
    "id": 296,
    "name": "Makuhita",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 297,
    "name": "Hariyama",
    "itemRequired": false,
    "preEvolution": "Makuhita"
  },
  {
    "id": 298,
    "name": "Azurill",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 299,
    "name": "Nosepass",
    "itemRequired": false
  },
  {
    "id": 300,
    "name": "Skitty",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 301,
    "name": "Delcatty",
    "itemRequired": false,
    "preEvolution": "Skitty"
  },
  {
    "id": 302,
    "name": "Sableye",
    "itemRequired": false
  },
  {
    "id": 303,
    "name": "Mawile",
    "itemRequired": false
  },
  {
    "id": 304,
    "name": "Aron",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 305,
    "name": "Lairon",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Aron"
  },
  {
    "id": 306,
    "name": "Aggron",
    "itemRequired": false,
    "preEvolution": "Lairon"
  },
  {
    "id": 307,
    "name": "Meditite",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 308,
    "name": "Medicham",
    "itemRequired": false,
    "preEvolution": "Meditite"
  },
  {
    "id": 309,
    "name": "Electrike",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 310,
    "name": "Manectric",
    "itemRequired": false,
    "preEvolution": "Electrike"
  },
  {
    "id": 311,
    "name": "Plusle",
    "itemRequired": false
  },
  {
    "id": 312,
    "name": "Minun",
    "itemRequired": false
  },
  {
    "id": 313,
    "name": "Volbeat",
    "itemRequired": false
  },
  {
    "id": 314,
    "name": "Illumise",
    "itemRequired": false
  },
  {
    "id": 315,
    "name": "Roselia",
    "itemRequired": false
  },
  {
    "id": 316,
    "name": "Gulpin",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 317,
    "name": "Swalot",
    "itemRequired": false,
    "preEvolution": "Gulpin"
  },
  {
    "id": 318,
    "name": "Carvanha",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "itemRequired": false,
    "preEvolution": "Carvanha"
  },
  {
    "id": 320,
    "name": "Wailmer",
    "itemRequired": false,
    "candyToEvolve": 400
  },
  {
    "id": 321,
    "name": "Wailord",
    "itemRequired": false,
    "preEvolution": "Wailmer"
  },
  {
    "id": 322,
    "name": "Numel",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 323,
    "name": "Camerupt",
    "itemRequired": false,
    "preEvolution": "Numel"
  },
  {
    "id": 324,
    "name": "Torkoal",
    "itemRequired": false
  },
  {
    "id": 325,
    "name": "Spoink",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 326,
    "name": "Grumpig",
    "itemRequired": false,
    "preEvolution": "Spoink"
  },
  {
    "id": 327,
    "name": "Spinda",
    "itemRequired": false
  },
  {
    "id": 328,
    "name": "Trapinch",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 329,
    "name": "Vibrava",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Trapinch"
  },
  {
    "id": 330,
    "name": "Flygon",
    "itemRequired": false,
    "preEvolution": "Vibrava"
  },
  {
    "id": 331,
    "name": "Cacnea",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 332,
    "name": "Cacturne",
    "itemRequired": false,
    "preEvolution": "Cacnea"
  },
  {
    "id": 333,
    "name": "Swablu",
    "itemRequired": false,
    "candyToEvolve": 400
  },
  {
    "id": 334,
    "name": "Altaria",
    "itemRequired": false,
    "preEvolution": "Swablu"
  },
  {
    "id": 335,
    "name": "Zangoose",
    "itemRequired": false
  },
  {
    "id": 336,
    "name": "Seviper",
    "itemRequired": false
  },
  {
    "id": 337,
    "name": "Lunatone",
    "itemRequired": false
  },
  {
    "id": 338,
    "name": "Solrock",
    "itemRequired": false
  },
  {
    "id": 339,
    "name": "Barboach",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 340,
    "name": "Whiscash",
    "itemRequired": false,
    "preEvolution": "Barboach"
  },
  {
    "id": 341,
    "name": "Corphish",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "itemRequired": false,
    "preEvolution": "Corphish"
  },
  {
    "id": 343,
    "name": "Baltoy",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 344,
    "name": "Claydol",
    "itemRequired": false,
    "preEvolution": "Baltoy"
  },
  {
    "id": 345,
    "name": "Lileep",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 346,
    "name": "Cradily",
    "itemRequired": false,
    "preEvolution": "Lileep"
  },
  {
    "id": 347,
    "name": "Anorith",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 348,
    "name": "Armaldo",
    "itemRequired": false,
    "preEvolution": "Anorith"
  },
  {
    "id": 349,
    "name": "Feebas",
    "itemRequired": false,
    "candyToEvolve": 100
  },
  {
    "id": 350,
    "name": "Milotic",
    "itemRequired": false,
    "preEvolution": "Feebas"
  },
  {
    "id": 351,
    "name": "Castform",
    "itemRequired": false
  },
  {
    "id": 352,
    "name": "Kecleon",
    "itemRequired": false
  },
  {
    "id": 353,
    "name": "Shuppet",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 354,
    "name": "Banette",
    "itemRequired": false,
    "preEvolution": "Shuppet"
  },
  {
    "id": 355,
    "name": "Duskull",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 356,
    "name": "Dusclops",
    "itemRequired": false,
    "preEvolution": "Duskull"
  },
  {
    "id": 357,
    "name": "Tropius",
    "itemRequired": false
  },
  {
    "id": 358,
    "name": "Chimecho",
    "itemRequired": false
  },
  {
    "id": 359,
    "name": "Absol",
    "itemRequired": false
  },
  {
    "id": 360,
    "name": "Wynaut",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 361,
    "name": "Snorunt",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 362,
    "name": "Glalie",
    "itemRequired": false,
    "preEvolution": "Snorunt"
  },
  {
    "id": 363,
    "name": "Spheal",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 364,
    "name": "Sealeo",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Spheal"
  },
  {
    "id": 365,
    "name": "Walrein",
    "itemRequired": false,
    "preEvolution": "Sealeo"
  },
  {
    "id": 366,
    "name": "Clamperl",
    "itemRequired": false,
    "candyToEvolve": 50
  },
  {
    "id": 367,
    "name": "Huntail",
    "itemRequired": false,
    "preEvolution": "Clamperl"
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "itemRequired": false,
    "preEvolution": "Clamperl"
  },
  {
    "id": 369,
    "name": "Relicanth",
    "itemRequired": false
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "itemRequired": false
  },
  {
    "id": 371,
    "name": "Bagon",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 372,
    "name": "Shelgon",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Bagon"
  },
  {
    "id": 373,
    "name": "Salamence",
    "itemRequired": false,
    "preEvolution": "Shelgon"
  },
  {
    "id": 374,
    "name": "Beldum",
    "itemRequired": false,
    "candyToEvolve": 25
  },
  {
    "id": 375,
    "name": "Metang",
    "itemRequired": false,
    "candyToEvolve": 100,
    "preEvolution": "Beldum"
  },
  {
    "id": 376,
    "name": "Metagross",
    "itemRequired": false,
    "preEvolution": "Metang"
  },
  {
    "id": 377,
    "name": "Regirock",
    "itemRequired": false
  },
  {
    "id": 378,
    "name": "Regice",
    "itemRequired": false
  },
  {
    "id": 379,
    "name": "Registeel",
    "itemRequired": false
  },
  {
    "id": 380,
    "name": "Latias",
    "itemRequired": false
  },
  {
    "id": 381,
    "name": "Latios",
    "itemRequired": false
  },
  {
    "id": 382,
    "name": "Kyogre",
    "itemRequired": false
  },
  {
    "id": 383,
    "name": "Groudon",
    "itemRequired": false
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "itemRequired": false
  },
  {
    "id": 385,
    "name": "Jirachi",
    "itemRequired": false
  },
  {
    "id": 386,
    "name": "Deoxys",
    "itemRequired": false
  }
]
