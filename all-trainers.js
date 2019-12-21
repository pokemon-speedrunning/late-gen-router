
let requiredExperience = {
    "Erratic": [0, 15, 52, 122, 237, 406, 637, 942, 1326, 1800, 2369, 3041, 3822, 4719, 5737, 6881, 8155, 9564, 11111, 12800, 14632, 16610, 18737, 21012, 23437, 26012, 28737, 31610, 34632, 37800, 41111, 44564, 48155, 51881, 55737, 59719, 63822, 68041, 72369, 76800, 81326, 85942, 90637, 95406, 100237, 105122, 110052, 115015, 120001, 125000, 131324, 137795, 144410, 151165, 158056, 165079, 172229, 179503, 186894, 194400, 202013, 209728, 217540, 225443, 233431, 241496, 249633, 257834, 267406, 276458, 286328, 296358, 305767, 316074, 326531, 336255, 346965, 357812, 367807, 378880, 390077, 400293, 411686, 423190, 433572, 445239, 457001, 467489, 479378, 491346, 501878, 513934, 526049, 536557, 548720, 560922, 571333, 583539, 591882, 60000],
    "Fast": [0, 6, 21, 51, 100, 172, 274, 409, 583, 800, 1064, 1382, 1757, 2195, 2700, 3276, 3930, 4665, 5487, 6400, 7408, 8518, 9733, 11059, 12500, 14060, 15746, 17561, 19511, 21600, 23832, 26214, 28749, 31443, 34300, 37324, 40522, 43897, 47455, 51200, 55136, 59270, 63605, 68147, 72900, 77868, 83058, 88473, 94119, 100000, 106120, 112486, 119101, 125971, 133100, 140492, 148154, 156089, 164303, 172800, 181584, 190662, 200037, 209715, 219700, 229996, 240610, 251545, 262807, 274400, 286328, 298598, 311213, 324179, 337500, 351180, 365226, 379641, 394431, 409600, 425152, 441094, 457429, 474163, 491300, 508844, 526802, 545177, 563975, 583200, 602856, 622950, 643485, 664467, 685900, 707788, 730138, 752953, 776239, 800000],
    "Medium Fast": [0, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 551368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 1000000],
    "Medium Slow": [0, 9, 57, 96, 135, 179, 236, 314, 419, 560, 742, 973, 1261, 1612, 2035, 2535, 3120, 3798, 4575, 5460, 6458, 7577, 8825, 10208, 11735, 13411, 15244, 17242, 19411, 21760, 24294, 27021, 29949, 33084, 36435, 40007, 43808, 47846, 52127, 56660, 61450, 66505, 71833, 77440, 83335, 89523, 96012, 102810, 109923, 117360, 125126, 133229, 141677, 150476, 159635, 169159, 179056, 189334, 199999, 211060, 222522, 234393, 246681, 259392, 272535, 286115, 300140, 314618, 329555, 344960, 360838, 377197, 394045, 411388, 429235, 447591, 466464, 485862, 505791, 526260, 547274, 568841, 590969, 613664, 636935, 660787, 685228, 710266, 735907, 762160, 789030, 816525, 844653, 873420, 902835, 932903, 963632, 995030, 1027103, 1059860],
    "Slow": [0, 10, 33, 80, 156, 270, 428, 640, 911, 1250, 1663, 2160, 2746, 3430, 4218, 5120, 6141, 7290, 8573, 10000, 11576, 13310, 15208, 17280, 19531, 21970, 24603, 27440, 30486, 33750, 37238, 40960, 44921, 49130, 53593, 58320, 63316, 68590, 74148, 80000, 86151, 92610, 99383, 106480, 113906, 121670, 129778, 138240, 147061, 156250, 165813, 175760, 186096, 196830, 207968, 219520, 231491, 243890, 256723, 270000, 283726, 297910, 312558, 327680, 343281, 359370, 375953, 393040, 410636, 428750, 447388, 466560, 486271, 506530, 527343, 548720, 570666, 593190, 616298, 640000, 664301, 689210, 714733, 740880, 767656, 795070, 823128, 851840, 881211, 911250, 941963, 973360, 1005446, 1038230, 1071718, 1105920, 1140841, 1176490, 1212873, 1250000],
    "Fluctuating": [0, 4, 13, 32, 65, 112, 178, 276, 393, 540, 745, 967, 1230, 1591, 1957, 2457, 3046, 3732, 4526, 5440, 6482, 7666, 9003, 10506, 12187, 14060, 16140, 18439, 20974, 23760, 26811, 30146, 33780, 37731, 42017, 46656, 50653, 55969, 60505, 66560, 71677, 78533, 84277, 91998, 98415, 107069, 114205, 123863, 131766, 142500, 151222, 163105, 172697, 185807, 196322, 210739, 222231, 238036, 250562, 267840, 281456, 300293, 315059, 335544, 351520, 373744, 390991, 415050, 433631, 459620, 479600, 507617, 529063, 559209, 582187, 614566, 639146, 673863, 700115, 737280, 765275, 804997, 834809, 877201, 908905, 954084, 987754, 1035837, 1071552, 1122660, 1160499, 1214753, 1254796, 1312322, 1354652, 1415577, 1460276, 1524731, 1571884, 1640000],
};

let experienceYields = {
    "Rattata": 51,
    "Raticate": 145,
    "Pikachu": 112,
    "Zubat": 49,
    "Machop": 61,
    "Drowzee": 66,
    "Eevee": 65,
    "Makuhita": 47,
    "Zorua": 66,
    "Furfrou": 165,
    "Noibat": 49,
    "Litten": 64,
    "Torracat": 147,
    "Crabrawler": 68,
    "Wishiwashi": 61,
    "Wishiwashi-School": 217,
    "Dewpider": 54,
    "Araquanid": 159,
    "Type: Null": 107,
    "Poipole": 189,
    "Spearow": 52,
    "Mawile": 133,
    "Roggenrola": 56,
    "Carbink": 100,
    "Sableye": 133,
    "Spinda": 126,
    "Abra": 62,
    "Meowth": 58,
    "Mime Jr.": 62,
    "Ekans": 58,
    "Murkrow": 81,
    "Mareep": 56,
    "Lycanroc": 170,
    "Granbull": 158,
    "Ribombee": 162,
    "Gumshoos": 146,
    "Smeargle": 88,
    "Komala": 168,
    "Lanturn": 161,
    "Cloyster": 184,
    "Arcanine": 194,
    "Talonflame": 175,
    "Marowak": 149,
    "Magmar": 173,
    "Kecleon": 154,
    "Goldeen": 64,
    "Tropius": 161,
    "Exeggcute": 65,
    "Golurk": 169,
    "Gastrodon": 166,
    "Flygon": 234,
    "Mudsdale": 175,
    "Crobat": 241,
    "Silvally": 257,
    "Lucario": 184,
    "Zoroark": 179,
    "Pikipek": 53,
    "Caterpie": 39,
    "Yungoos": 51,
    "Pichu": 41,
    "Metapod": 72,
    "Bonsly": 58,
    "Grimer": 58,
    "Magnemite": 65,
    "Grubbin": 60,
    "Gastly": 62,
    "Psyduck": 64,
    "Petilil": 56,
    "Growlithe": 70,
    "Mankey": 61,
    "Diglett": 53,
    "Delibird": 116,
    "Glaceon": 184,
    "Drifloon": 70,
    "Munchlax": 78,
    "Bagon": 60,
    "Cutiefly": 61,
    "Tauros": 172,
    "Mudbray": 77,
    "Lillipup": 55,
    "Magby": 73,
    "Sudowoodo": 144,
    "Cubone": 64,
    "Oricorio": 167,
    "Salazzle": 168,
    "Kadabra": 140,
    "Bounsweet": 42,
    "Trumbeak": 124,
    "Miltank": 172,
    "Archen": 71,
    "Shieldon": 70,
    "Rockruff": 56,
    "Shiinotic": 142,
    "Fomantis": 50,
    "Lurantis": 168,
    "Charjabug": 140,
    "Goomy": 60,
    "Sylveon": 184,
    "Salandit": 64,
    "Umbreon": 184,
    "Jigglypuff": 95,
    "Ledian": 137,
    "Comfey": 170,
    "Ariados": 140,
    "Staryu": 68,
    "Gyarados": 189,
    "Hariyama": 166,
    "Golbat": 159,
    "Nosepass": 75,
    "Boldore": 137,
    "Raichu": 218,
    "Leafeon": 184,
    "Persian": 154,
    "Cleffa": 44,
    "Trubbish": 66,
    "Muk": 175,
    "Poliwhirl": 135,
    "Steenee": 102,
    "Skarmory": 163,
    "Dugtrio": 149,
    "Metang": 147,
    "Vikavolt": 225,
    "Clefairy": 113,
    "Geodude": 60,
    "Oranguru": 172,
    "Passimian": 172,
    "Absol": 163,
    "Golisopod": 186,
    "Weedle": 39,
    "Pidgey": 50,
    "NidoranF": 55,
    "Herdier": 130,
    "Fletchinder": 134,
    "Stufful": 68,
    "Pancham": 70,
    "Krokorok": 123,
    "Tirtouga": 71,
    "Cranidos": 70,
    "Porygon": 79,
    "Magneton": 163,
    "Alomomola": 165,
    "Whiscash": 164,
    "Sandygast": 64,
    "Elekid": 72,
    "Feebas": 40,
    "Haunter": 142,
    "Gengar": 225,
    "Mimikyu": 167,
    "Togedemaru": 152,
    "Gabite": 144,
    "Pyukumuku": 144,
    "Sandshrew": 60,
    "Vulpix": 60,
    "Wigglytuff": 196,
    "Tentacruel": 180,
    "Slowbro": 172,
    "Golduck": 175,
    "Luvdisc": 116,
    "Corsola": 144,
    "Torkoal": 165,
    "Seaking": 158,
    "Sneasel": 86,
    "Alakazam": 225,
    "Mareanie": 61,
    "Spinarak": 50,
    "Wimpod": 46,
};

// {type: "kill", pokemon: "Grubbin", level: 6},
// {type: "kill", pokemon: "Makuhita", level: 9},
// {type: "kill", pokemon: "Diglett", level: 9},
// {type: "kill", pokemon: "Pikachu", level: 9},
// {type: "kill", pokemon: "Psyduck", level: 13},
// {type: "kill", pokemon: "Petilil", level: 13},



let popplio = [
    {type: "init", level: 5, evolution1: 17, evolution2: 34, curve: "Medium Slow"},
    {type: "kill", pokemon: "Litten", level: 5},        // 0, 0, 0, 0, 0, 1
    {type: "catch", pokemon: "Pikipek", level: 3},      // 1, 0, 0, 0, 0, 1
    {type: "kill", pokemon: "Rattata", level: 3},       // 0, 1, 0, 0, 0, 2
    {type: "kill", pokemon: "Caterpie", level: 3},      // 1, 1, 0, 0, 0, 2
    {type: "kill", pokemon: "Yungoos", level: 4},       // 1, 2, 0, 0, 0, 2
    {type: "affection-boost", value: true},
    {type: "kill", pokemon: "Pichu", level: 6},         // 1, 2, 0, 0, 0, 3
    {type: "kill", pokemon: "Litten", level: 7},        // 1, 2, 0, 0, 0, 4
    {type: "kill", pokemon: "Metapod", level: 7},       // 1, 2, 2, 0, 0, 4
    {type: "kill", pokemon: "Bonsly", level: 7},        // 1, 2, 3, 0, 0, 4
    {type: "kill", pokemon: "Pikipek", level: 8},       // 1, 3, 3, 0, 0, 4
    {type: "kill", pokemon: "Grimer", level: 8},        // 2, 3, 3, 0, 0, 4
    {type: "kill", pokemon: "Magnemite", level: 8},     // 2, 3, 3, 1, 0, 4
    {type: "kill", pokemon: "Meowth", level: 9},        // 2, 3, 3, 1, 0, 5
    {type: "kill", pokemon: "Zubat", level: 8},         // 2, 3, 3, 1, 0, 6
    {type: "kill", pokemon: "Yungoos", level: 9},       // 2, 4, 3, 1, 0, 6
    {type: "kill", pokemon: "Smeargle", level: 10},     // 2, 4, 3, 1, 0, 7
    {type: "kill", pokemon: "Gastly", level: 9},        // 2, 4, 3, 2, 0, 7
    {type: "kill", pokemon: "Spearow", level: 8},       // 2, 4, 3, 2, 0, 8
    {type: "kill", pokemon: "Drowzee", level: 10},      // 2, 4, 3, 2, 1, 8
    {type: "kill", pokemon: "Rattata", level: 11},      // 2, 4, 3, 2, 1, 9
    {type: "kill", pokemon: "Rattata", level: 11},      // 2, 4, 3, 2, 1,10
    {type: "kill", pokemon: "Drowzee", level: 11},      // 2, 4, 3, 2, 2,10
    {type: "kill", pokemon: "Raticate", level: 11},     // 2, 4, 3, 2, 2,12
    {type: "kill", pokemon: "Rattata", level: 10},      // 2, 4, 3, 2, 2,14
    {type: "kill", pokemon: "Raticate", level: 12},     // 2, 4, 3, 2, 2,18
    {type: "kill", pokemon: "Pikachu", level: 13},      // 2, 4, 3, 2, 2,20
    {type: "kill", pokemon: "Litten", level: 14},       // 2, 4, 3, 2, 2,21
    {type: "evolve"},
    {type: "kill", pokemon: "Growlithe", level: 13},    // 2, 5, 3, 2, 2,20
    {type: "kill", pokemon: "Mankey", level: 14},       // 2, 6, 3, 2, 2,20
    {type: "kill", pokemon: "Makuhita", level: 14},     // 3, 6, 3, 2, 2,20
    {type: "kill", pokemon: "Crabrawler", level: 15},   // 3, 7, 3, 2, 2,20
    {type: "kill", pokemon: "Delibird", level: 15},     // 3, 7, 3, 2, 2,21
    {type: "kill", pokemon: "Glaceon", level: 16},      // 3, 7, 3, 4, 2,21
    {type: "kill", pokemon: "Drifloon", level: 14},     // 4, 7, 3, 4, 2,21
    {type: "kill", pokemon: "Munchlax", level: 13},     // 5, 7, 3, 4, 2,21
    {type: "kill", pokemon: "Bagon", level: 14},        // 5, 8, 3, 4, 2,21
    {type: "kill", pokemon: "Rattata", level: 14},      // 5, 8, 3, 4, 2,22
    {type: "kill", pokemon: "Cutiefly", level: 14},     // 5, 8, 3, 4, 2,23
    {type: "kill", pokemon: "Pikachu", level: 16},      // 5, 8, 3, 4, 2,25
    {type: "kill", pokemon: "Torracat", level: 17},     // 5, 8, 3, 4, 2,27
    {type: "kill", pokemon: "Carbink", level: 15},      // 5, 8, 4, 4, 3,27
    {type: "kill", pokemon: "Zubat", level: 17},        // 5, 8, 4, 4, 3,28
    {type: "kill", pokemon: "Type: Null", level: 18},   // 7, 8, 4, 4, 3,28
    {type: "kill", pokemon: "Wishiwashi", level: 18},   // 9, 8, 4, 4, 3,28
    {type: "kill", pokemon: "Wishiwashi-School", level: 20},   //11, 8, 4, 4, 3,28
    {type: "kill", pokemon: "Sableye", level: 15},      //11, 9, 5, 4, 3,28
    {type: "kill", pokemon: "Tauros", level: 15},       //11,10, 5, 4, 3,29
    {type: "kill", pokemon: "Mudbray", level: 15},      //11,11, 5, 4, 3,29
    {type: "kill", pokemon: "Lillipup", level: 14},     //11,12, 5, 4, 3,29
    {type: "kill", pokemon: "Growlithe", level: 14},    //11,13, 5, 4, 3,29
    {type: "kill", pokemon: "Magby", level: 15},        //11,13, 5, 4, 3,30
    {type: "kill", pokemon: "Yungoos", level: 16},      //11,14, 5, 4, 3,30
    {type: "kill", pokemon: "Sudowoodo", level: 17},    //11,14, 7, 4, 3,30
    {type: "kill", pokemon: "Drowzee", level: 17},      //11,14, 7, 4, 4,30
    {type: "kill", pokemon: "Cubone", level: 17},       //11,14, 8  4, 4,30
    {type: "kill", pokemon: "Oricorio", level: 17},     //11,14, 8  6, 4,30
    {type: "kill", pokemon: "Meowth", level: 19},       //11,14, 8  6, 4,31
    {type: "kill", pokemon: "Marowak", level: 19},      //11,14,10, 6, 4,31
    {type: "kill", pokemon: "Magmar", level: 19},       //11,14,10, 8, 4,31
    {type: "kill", pokemon: "Salazzle", level: 22},     //11,14,10, 8, 4,33
    {type: "kill", pokemon: "Kadabra", level: 21},      //11,14,10,10, 4,33
    {type: "kill", pokemon: "Roggenrola", level: 18},   //11,14,11,10, 4,33
    {type: "kill", pokemon: "Machop", level: 19},       //11,15,10,10, 4,33
    {type: "kill", pokemon: "Eevee", level: 20},        //11,15,10,10, 5,33
    {type: "kill", pokemon: "Bounsweet", level: 20},    //12,15,10,10, 5,33
    {type: "kill", pokemon: "Trumbeak", level: 21},     //12,17,10,10, 5,33
    {type: "kill", pokemon: "Miltank", level: 21},      //12,17,12,10, 5,33
    {type: "kill", pokemon: "Archen", level: 20},       //12,18,12,10, 5,33
    {type: "kill", pokemon: "Shieldon", level: 20},     //12,17,13,10, 5,33
    {type: "kill", pokemon: "Rockruff", level: 20},     //12,18,13,10, 5,33
    {type: "kill", pokemon: "Meowth", level: 20},       //12,18,13,10, 5,33
    {type: "kill", pokemon: "Shiinotic", level: 22},    //12,18,13,10, 7,33
    {type: "rare-candy"},
    {type: "rare-candy"},
    {type: "kill", pokemon: "Fomantis", level: 23},     //12,19,13,10, 7,33
    {type: "kill", pokemon: "Fomantis", level: 23},     //12,20,13,10, 7,33
    {type: "kill", pokemon: "Trumbeak", level: 22},     //12,24,13,10, 7,33
    {type: "kill", pokemon: "Lurantis", level: 24},     //12,28,13,10, 7,33
    {type: "kill", pokemon: "Charjabug", level: 20},    //12,28,15,10, 7,33
    {type: "kill", pokemon: "Mudbray", level: 21},      //12,29,15,10, 7,33
    {type: "kill", pokemon: "Goomy", level: 22},        //12,29,15,10, 8,33
    {type: "kill", pokemon: "Sylveon", level: 23},      //12,29,15,10, 9,33
    {type: "kill", pokemon: "Diglett", level: 22},      //12,29,15,10, 9,34
    {type: "kill", pokemon: "Roggenrola", level: 21},   //12,29,16,10, 9,34
    {type: "kill", pokemon: "Mudbray", level: 22},      //12,30,16,10, 9,34
    {type: "kill", pokemon: "Machop", level: 22},       //12,31,16,10, 9,34
    {type: "kill", pokemon: "Fomantis", level: 22},     //12,32,16,10, 9,34
    {type: "kill", pokemon: "Salandit", level: 22},     //12,32,16,10, 9,35
    {type: "kill", pokemon: "Hariyama", level: 23},     //14,37,16,10,15,36
    {type: "kill", pokemon: "Growlithe", level: 24},    //14,33,16,10, 9,35
    {type: "kill", pokemon: "Umbreon", level: 23},      //14,33,16,10,11,35
    {type: "kill", pokemon: "Jigglypuff", level: 21},   //14,33,16,10,11,35
    {type: "kill", pokemon: "Ledian", level: 22},       //14,33,16,10,13,35
    {type: "kill", pokemon: "Comfey", level: 23},       //14,33,16,10,15,35
    {type: "kill", pokemon: "Ariados", level: 23},      //14,35,16,10,15,35
    {type: "kill", pokemon: "Staryu", level: 23},       //14,35,16,10,15,36
    {type: "kill", pokemon: "Gyarados", level: 23},     //14,37,16,10,15,36
    {type: "kill", pokemon: "Hariyama", level: 24},     //16,37,16,10,15,36
    {type: "kill", pokemon: "Golbat", level: 25},       //16,37,16,10,15,38
    {type: "kill", pokemon: "Salandit", level: 26},     //16,37,16,10,15,39
    {type: "kill", pokemon: "Nosepass", level: 26},     //16,37,17,10,15,39
    {type: "kill", pokemon: "Boldore", level: 26},      //16,38,18,10,15,39
    {type: "kill", pokemon: "Lycanroc", level: 27},     //16,40,18,10,15,39
    {type: "evolve"},
    {type: "kill", pokemon: "Raichu", level: 28},       //16,40,18,10,15,42
    {type: "kill", pokemon: "Leafeon", level: 28},      //16,40,20,10,15,42
    {type: "kill", pokemon: "Torracat", level: 29},     //16,40,20,10,15,44
    {type: "kill", pokemon: "Persian", level: 27},      //16,40,20,10,15,46
    {type: "kill", pokemon: "Marowak", level: 26},      //16,40,22,10,15,44
    {type: "kill", pokemon: "Cleffa", level: 26},       //16,40,22,10,16,44
    {type: "kill", pokemon: "Raticate", level: 26},     //16,40,22,10,16,46
    {type: "kill", pokemon: "Raichu", level: 27},       //16,40,22,10,16,48
    {type: "kill", pokemon: "Trubbish", level: 26},     //16,40,22,10,16,49
    {type: "kill", pokemon: "Trubbish", level: 27},     //16,40,22,10,16,50
    {type: "kill", pokemon: "Muk", level: 27},          //17,41,22,10,16,50
    {type: "kill", pokemon: "Grimer", level: 29},       //18,41,22,10,16,50
    {type: "kill", pokemon: "Poliwhirl", level: 28},    //18,41,22,10,16,52
    {type: "kill", pokemon: "Steenee", level: 27},      //18,41,22,10,16,54
    {type: "kill", pokemon: "Growlithe", level: 28},    //18,42,22,10,16,54
    {type: "kill", pokemon: "Golbat", level: 27},       //18,42,22,10,16,56
    {type: "kill", pokemon: "Raticate", level: 27},     //18,42,22,10,16,58
    {type: "kill", pokemon: "Skarmory", level: 29},     //18,42,24,10,16,58
    {type: "kill", pokemon: "Metang", level: 29},       //18,42,26,10,16,58
    {type: "kill", pokemon: "Dugtrio", level: 30},      //18,44,24,10,16,58
    {type: "kill", pokemon: "Grubbin", level: 27},      //18,45,24,10,16,58
    {type: "kill", pokemon: "Charjabug", level: 27},    //18,44,26,10,16,58
    {type: "kill", pokemon: "Charjabug", level: 27},    //18,44,28,10,16,58
    {type: "kill", pokemon: "Vikavolt", level: 29},     //18,44,28,13,16,58
    {type: "kill", pokemon: "Clefairy", level: 28},     //20,44,28,13,16,58
    {type: "kill", pokemon: "Boldore", level: 27},      //20,45,29,13,16,58
    {type: "kill", pokemon: "Geodude", level: 28},      //20,45,30,13,16,58
    {type: "kill", pokemon: "Passimian", level: 28},    //20,47,30,13,16,58
    {type: "kill", pokemon: "Oranguru", level: 28},     //20,45,30,13,18,58
    {type: "kill", pokemon: "Absol", level: 30},        //20,47,30,13,18,58
    {type: "kill", pokemon: "Golisopod", level: 31},    //20,47,32,13,18,58
    {type: "kill", pokemon: "Ariados", level: 30},      //20,49,32,13,18,58
    {type: "kill", pokemon: "Caterpie", level: 29},     //21,49,32,13,18,58
    {type: "kill", pokemon: "Weedle", level: 29},       //21,49,32,13,18,59
    {type: "kill", pokemon: "Pidgey", level: 27},       //21,49,32,13,18,60
    {type: "kill", pokemon: "NidoranF", level: 28},     //22,49,32,13,18,60
    {type: "kill", pokemon: "Rattata", level: 27},      //22,49,32,13,18,61
    {type: "kill", pokemon: "Ekans", level: 27},        //22,50,32,13,18,61
    {type: "kill", pokemon: "Zubat", level: 28},        //22,50,32,13,18,62
    {type: "kill", pokemon: "Pidgey", level: 28},       //22,50,32,13,18,63
    {type: "kill", pokemon: "NidoranF", level: 28},     //23,50,32,13,18,63
    {type: "kill", pokemon: "Mankey", level: 30},       //23,51,32,13,18,63
    {type: "kill", pokemon: "Ekans", level: 30},        //23,52,32,13,18,63
    {type: "kill", pokemon: "Zubat", level: 31},        //23,52,32,13,18,64
    {type: "kill", pokemon: "Herdier", level: 27, skipLevel: true},      //23,54,32,13,18,64
    {type: "kill", pokemon: "Fletchinder", level: 27},  //23,54,32,13,18,66
    {type: "kill", pokemon: "Stufful", level: 26},      //23,55,32,13,18,66
    {type: "kill", pokemon: "Hariyama", level: 28},     //25,55,32,13,18,66
    {type: "kill", pokemon: "Pancham", level: 29, skipLevel: true},      //25,56,32,13,18,66
    {type: "kill", pokemon: "Krokorok", level: 29},     //25,58,32,13,18,66
    {type: "kill", pokemon: "Tirtouga", level: 30},     //25,58,33,13,18,66
    {type: "kill", pokemon: "Cranidos", level: 30},     //25,59,33,13,18,66
    {type: "kill", pokemon: "Porygon", level: 28},      //25,59,33,14,18,66
    {type: "kill", pokemon: "Magneton", level: 29},     //25,59,33,16,18,66
    {type: "kill", pokemon: "Alomomola", level: 30},    //27,59,33,16,18,66
    {type: "kill", pokemon: "Whiscash", level: 29},     //29,59,33,16,18,66
    {type: "kill", pokemon: "Sandygast", level: 30},    //29,59,34,16,18,66
    {type: "kill", pokemon: "Elekid", level: 30},       //29,59,34,16,18,67
    {type: "kill", pokemon: "Drowzee", level: 33},      //29,59,34,16,19,67
    {type: "kill", pokemon: "Feebas", level: 30},       //29,59,34,16,19,68
    {type: "kill", pokemon: "Gyarados", level: 31},     //29,61,34,16,19,68

    {type: "kill", pokemon: "Togedemaru", level: 30},   //29,63,34,16,19,68
    {type: "kill", pokemon: "Gabite", level: 31},       //29,65,34,16,19,68

    {type: "kill", pokemon: "Gastly", level: 30},       //29,65,34,17,19,68
    {type: "kill", pokemon: "Haunter", level: 30},      //29,65,34,19,19,68
    {type: "kill", pokemon: "Gengar", level: 30},       //29,65,34,22,19,68
    {type: "kill", pokemon: "Haunter", level: 27},      //29,65,34,26,19,68
    {type: "kill", pokemon: "Mimikyu", level: 33},      //29,65,34,26,23,68
    {type: "kill", pokemon: "Pyukumuku", level: 31},    //29,65,34,26,25,68
    {type: "kill", pokemon: "Golbat", level: 34},       //29,65,34,26,25,70
    {type: "kill", pokemon: "Salazzle", level: 35},     //29,65,34,26,25,72
    {type: "kill", pokemon: "Sandshrew", level: 32},    //29,65,35,26,25,72
    {type: "kill", pokemon: "Marowak", level: 33},      //29,65,37,26,25,72
    {type: "kill", pokemon: "Vulpix", level: 34},       //29,65,37,26,25,73
    {type: "kill", pokemon: "Haunter", level: 34},      //29,65,37,28,25,73
    {type: "kill", pokemon: "Wigglytuff", level: 35},   //32,65,37,28,25,73
    {type: "kill", pokemon: "Tentacruel", level: 35},   //32,65,37,28,27,73

    {type: "kill", pokemon: "Luvdisc", level: 33},      //32,65,37,28,27,74
    {type: "kill", pokemon: "Corsola", level: 33},      //32,65,38,28,28,74
    {type: "kill", pokemon: "Alomomola", level: 33},    //34,65,38,28,28,74

    {type: "kill", pokemon: "Slowbro", level: 33, skipLevel: true},      //32,65,40,28,28,74
    {type: "kill", pokemon: "Golduck", level: 33},      //34,65,38,30,28,74

    {type: "kill", pokemon: "Charjabug", level: 32},    //34,65,40,30,28,74
    {type: "kill", pokemon: "Muk", level: 33},          //35,66,40,30,28,74
    {type: "kill", pokemon: "Oricorio", level: 33},     //35,66,40,32,28,74
    {type: "kill", pokemon: "Torkoal", level: 33},      //35,66,42,32,28,74
    {type: "kill", pokemon: "Leafeon", level: 34},      //35,66,44,32,28,74
    {type: "kill", pokemon: "Seaking", level: 33},      //35,68,44,32,28,74
    {type: "kill", pokemon: "Sneasel", level: 33},      //35,68,44,32,28,75
    {type: "kill", pokemon: "Komala", level: 34},       //35,70,44,32,28,75
    {type: "kill", pokemon: "Hariyama", level: 34},     //37,70,44,32,28,75
    {type: "kill", pokemon: "Alakazam", level: 34},     //37,70,44,35,28,75
    {type: "kill", pokemon: "Golbat", level: 34},       //37,70,44,35,28,77
    {type: "kill", pokemon: "Mareanie", level: 33},     //37,70,45,35,28,77
    {type: "kill", pokemon: "Fomantis", level: 34},     //37,72,45,35,28,77
    {type: "kill", pokemon: "Salandit", level: 33},     //37,72,44,35,28,78
    {type: "kill", pokemon: "Rattata", level: 33},      //37,72,44,35,28,79
    {type: "kill", pokemon: "Raticate", level: 34},     //37,72,44,35,28,81
    {type: "kill", pokemon: "Haunter", level: 34, skipLevel: true},     //37,72,44,37,28,81
    {type: "kill", pokemon: "Drowzee", level: 34},     //37,72,44,37,29,81
    {type: "kill", pokemon: "Spinarak", level: 34},    //37,73,44,37,29,81
    {type: "kill", pokemon: "Grimer", level: 34},      //38,73,44,37,29,81
    {type: "kill", pokemon: "Raticate", level: 35, skipLevel: true},      //38,73,44,37,29,83
    {type: "kill", pokemon: "Golbat", level: 35},      //38,73,44,37,29,85
    {type: "kill", pokemon: "Fomantis", level: 34},    //38,74,44,37,29,85
    {type: "kill", pokemon: "Salandit", level: 34},    //38,73,44,37,29,86
    {type: "kill", pokemon: "Wimpod", level: 35},      //38,73,44,37,29,87
    {type: "kill", pokemon: "Zubat", level: 34},       //38,73,44,37,29,88
    {type: "kill", pokemon: "Gastly", level: 34},      //38,73,44,38,29,88
    {type: "kill", pokemon: "Salandit", level: 35},    //38,73,44,38,29,89
    {type: "kill", pokemon: "Mareanie", level: 35},    //38,73,45,38,29,89
    {type: "kill", pokemon: "Haunter", level: 35},     //38,73,45,40,29,89
    {type: "kill", pokemon: "Wimpod", level: 34},      //38,73,45,40,29,90
    {type: "kill", pokemon: "Drowzee", level: 35},     //38,73,45,40,30,90
    {type: "kill", pokemon: "Rattata", level: 35},     //38,73,45,40,30,91
    {type: "kill", pokemon: "Raticate", level: 35},    //38,73,45,40,30,92
    {type: "kill", pokemon: "Fomantis", level: 35},    //38,74,45,40,30,92
    {type: "kill", pokemon: "Golbat", level: 35},      //38,74,45,40,30,94
    {type: "kill", pokemon: "Golisopod", level: 37},   //38,74,47,40,30,94
    {type: "kill", pokemon: "Ariados", level: 36},     //38,76,47,40,30,94




];

function computeExperienceForLevel(level, curve) {
    return requiredExperience[curve][level - 1];
}

function gamefreakSqrt(n) {
    let actualSqrt = Math.sqrt(n);
    let lowerBound = Math.floor(actualSqrt);
    if (lowerBound === actualSqrt) {
        return lowerBound;
    }
    let lastDistance = actualSqrt - lowerBound;

    for (let i = 1; i <= 4096; ++i) {
        let check = lowerBound + i / 4096;

        let distance = actualSqrt > check ? actualSqrt - check : check - actualSqrt;

        if (distance === lastDistance) {
            return lastDistance;
        }

        if (distance < lastDistance) {
            lastDistance = distance;
        } else {
            return check;
        }
    }

    return lowerBound + 1;
}

// function gamefreakSqrt(n) {
//     return Math.round(Math.sqrt(16777216 * n)) / 4096;
// }

function getExperienceForKill(foeName, foeLevel, level, luckyEgg, affection, rotoExp, expShare, tradeExp, evolutionDue) {
    let expYield = experienceYields[foeName];

    if (typeof expYield === "undefined") {
        throw new Error("Unknown Pokémon: " + foeName);
    }

    let x = foeLevel + foeLevel + 10;
    let y = foeLevel + level + 10;

    let x2 = x * x;
    let y2 = y * y;

    let z = Math.floor(expYield * foeLevel / 5);
    if (expShare) {
        z = Math.floor(z / 2);
    }

    let exp = Math.floor(((gamefreakSqrt(x) * x2) * z) / ((gamefreakSqrt(y) * y2))) + 1;

    // console.log(exp);

    if (tradeExp) {
        exp = Math.floor(exp * 1.5);
    }

    // if (luckyEgg) {
    //     exp = Math.floor(exp * 1.5);
    // }

    if (affection) {
        exp = exp * 4915;
        exp = Math.round(exp / 4096)
    }

    if (evolutionDue) {
        exp = exp * 4915;
        exp = Math.round(exp / 4096)
    }

    if (rotoExp) {
        exp = exp * 150;
        exp = Math.floor(exp / 100);
    }

    return Math.floor(exp);
}

function processActions(actions) {

    if (!actions || !actions[0] || actions[0].type !== "init") {
        throw new Error("First action must be init");
    }

    let affectionBoost = false;
    let luckyEgg = false;
    let rotoExp = false;
    let tradeExp = !!actions[0].tradeExp;

    let currentLevel = actions[0].level;
    let curve = actions[0].curve;
    let stage = 1;
    let evolution1 = actions[0].evolution1;
    let evolution2 = actions[0].evolution2;
    let currentExp = computeExperienceForLevel(currentLevel, curve);

    for (let i = 1; i < actions.length; ++i) {
        let action = actions[i];
        switch (action.type) {
            case "kill":
            case "catch":
                let evolutionDue = false;
                if ((stage === 1 && evolution1 && evolution1 <= currentLevel) || (stage <= 2 && evolution2 && evolution2 <= currentLevel)) {
                    evolutionDue = true;
                    console.log("[LEVEL BONUS]");
                }
                let receivedExp = getExperienceForKill(action.pokemon, action.level, currentLevel, luckyEgg, affectionBoost, rotoExp, !!action.expShare, tradeExp, evolutionDue);
                if (action.type === "kill") {
                    console.log(`[KILL]: Got ${receivedExp} Exp for killing Lv. ${action.level} ${action.pokemon}`);
                } else {
                    console.log(`[CATCH]: Got ${receivedExp} Exp for catching Lv. ${action.level} ${action.pokemon}`);
                }

                currentExp+= receivedExp;

                if (!action.skipLevel) {
                    while (currentLevel < 100 && computeExperienceForLevel(currentLevel + 1, curve) <= currentExp) {
                        ++currentLevel;
                        console.log(`[LEVELUP] Now level ${currentLevel}`);
                    }
                }
                break;
            case "evolve":
                ++stage;
                console.log(`[EVOLUTION]`);
                break;

            case "affection-boost":
                affectionBoost = !!action.value;
                console.log(`[AFFECTION BOOST] ${affectionBoost}`);
                break;

            case "roto-exp":
                rotoExp = !!action.value;
                console.log(`[ROTO EXP] ${rotoExp}`);
                break;

            case "lucky-egg":
                luckyEgg = !!action.value;
                console.log(`[LUCKY EGG] ${rotoExp}`);
                break;

            case "rare-candy":
                currentExp = computeExperienceForLevel(currentLevel + 1, curve);
                ++currentLevel;
                console.log(`[RARE CANDY] Now level ${currentLevel}`);
                break;

        }
        console.log();
    }
}

processActions(popplio);
// processActions(pikipek);
