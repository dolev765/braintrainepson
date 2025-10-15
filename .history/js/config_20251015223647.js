// Configuration file - Contains all game constants and settings

// Extended number data for stimulus generation (1-100)
export const numberData = {
  arabic: [
    "1","2","3","4","5","6","7","8","9","10",
    "11","12","13","14","15","16","17","18","19","20",
    "21","22","23","24","25","26","27","28","29","30",
    "31","32","33","34","35","36","37","38","39","40",
    "41","42","43","44","45","46","47","48","49","50",
    "51","52","53","54","55","56","57","58","59","60",
    "61","62","63","64","65","66","67","68","69","70",
    "71","72","73","74","75","76","77","78","79","80",
    "81","82","83","84","85","86","87","88","89","90",
    "91","92","93","94","95","96","97","98","99","100"
  ],
  word: [
    "one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty",
    "twenty-one","twenty-two","twenty-three","twenty-four","twenty-five","twenty-six","twenty-seven","twenty-eight","twenty-nine","thirty",
    "thirty-one","thirty-two","thirty-three","thirty-four","thirty-five","thirty-six","thirty-seven","thirty-eight","thirty-nine","forty",
    "forty-one","forty-two","forty-three","forty-four","forty-five","forty-six","forty-seven","forty-eight","forty-nine","fifty",
    "fifty-one","fifty-two","fifty-three","fifty-four","fifty-five","fifty-six","fifty-seven","fifty-eight","fifty-nine","sixty",
    "sixty-one","sixty-two","sixty-three","sixty-four","sixty-five","sixty-six","sixty-seven","sixty-eight","sixty-nine","seventy",
    "seventy-one","seventy-two","seventy-three","seventy-four","seventy-five","seventy-six","seventy-seven","seventy-eight","seventy-nine","eighty",
    "eighty-one","eighty-two","eighty-three","eighty-four","eighty-five","eighty-six","eighty-seven","eighty-eight","eighty-nine","ninety",
    "ninety-one","ninety-two","ninety-three","ninety-four","ninety-five","ninety-six","ninety-seven","ninety-eight","ninety-nine","one hundred"
  ],
  roman: [
    "I","II","III","IV","V","VI","VII","VIII","IX","X",
    "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
    "XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX",
    "XXXI","XXXII","XXXIII","XXXIV","XXXV","XXXVI","XXXVII","XXXVIII","XXXIX","XL",
    "XLI","XLII","XLIII","XLIV","XLV","XLVI","XLVII","XLVIII","XLIX","L",
    "LI","LII","LIII","LIV","LV","LVI","LVII","LVIII","LIX","LX",
    "LXI","LXII","LXIII","LXIV","LXV","LXVI","LXVII","LXVIII","LXIX","LXX",
    "LXXI","LXXII","LXXIII","LXXIV","LXXV","LXXVI","LXXVII","LXXVIII","LXXIX","LXXX",
    "LXXXI","LXXXII","LXXXIII","LXXXIV","LXXXV","LXXXVI","LXXXVII","LXXXVIII","LXXXIX","XC",
    "XCI","XCII","XCIII","XCIV","XCV","XCVI","XCVII","XCVIII","XCIX","C"
  ],
  // Additional number formats
  binary: [
    "1","10","11","100","101","110","111","1000","1001","1010",
    "1011","1100","1101","1110","1111","10000","10001","10010","10011","10100",
    "10101","10110","10111","11000","11001","11010","11011","11100","11101","11110",
    "11111","100000","100001","100010","100011","100100","100101","100110","100111","101000",
    "101001","101010","101011","101100","101101","101110","101111","110000","110001","110010",
    "110011","110100","110101","110110","110111","111000","111001","111010","111011","111100",
    "111101","111110","111111","1000000","1000001","1000010","1000011","1000100","1000101","1000110",
    "1000111","1001000","1001001","1001010","1001011","1001100","1001101","1001110","1001111","1010000",
    "1010001","1010010","1010011","1010100","1010101","1010110","1010111","1011000","1011001","1011010",
    "1011011","1011100","1011101","1011110","1011111","1100000","1100001","1100010","1100011","1100100"
  ],
  hexadecimal: [
    "1","2","3","4","5","6","7","8","9","A",
    "B","C","D","E","F","10","11","12","13","14",
    "15","16","17","18","19","1A","1B","1C","1D","1E",
    "1F","20","21","22","23","24","25","26","27","28",
    "29","2A","2B","2C","2D","2E","2F","30","31","32",
    "33","34","35","36","37","38","39","3A","3B","3C",
    "3D","3E","3F","40","41","42","43","44","45","46",
    "47","48","49","4A","4B","4C","4D","4E","4F","50",
    "51","52","53","54","55","56","57","58","59","5A",
    "5B","5C","5D","5E","5F","60","61","62","63","64"
  ],
  scientific: [
    "1×10⁰","2×10⁰","3×10⁰","4×10⁰","5×10⁰","6×10⁰","7×10⁰","8×10⁰","9×10⁰","1×10¹",
    "1.1×10¹","1.2×10¹","1.3×10¹","1.4×10¹","1.5×10¹","1.6×10¹","1.7×10¹","1.8×10¹","1.9×10¹","2×10¹",
    "2.1×10¹","2.2×10¹","2.3×10¹","2.4×10¹","2.5×10¹","2.6×10¹","2.7×10¹","2.8×10¹","2.9×10¹","3×10¹",
    "3.1×10¹","3.2×10¹","3.3×10¹","3.4×10¹","3.5×10¹","3.6×10¹","3.7×10¹","3.8×10¹","3.9×10¹","4×10¹",
    "4.1×10¹","4.2×10¹","4.3×10¹","4.4×10¹","4.5×10¹","4.6×10¹","4.7×10¹","4.8×10¹","4.9×10¹","5×10¹",
    "5.1×10¹","5.2×10¹","5.3×10¹","5.4×10¹","5.5×10¹","5.6×10¹","5.7×10¹","5.8×10¹","5.9×10¹","6×10¹",
    "6.1×10¹","6.2×10¹","6.3×10¹","6.4×10¹","6.5×10¹","6.6×10¹","6.7×10¹","6.8×10¹","6.9×10¹","7×10¹",
    "7.1×10¹","7.2×10¹","7.3×10¹","7.4×10¹","7.5×10¹","7.6×10¹","7.7×10¹","7.8×10¹","7.9×10¹","8×10¹",
    "8.1×10¹","8.2×10¹","8.3×10¹","8.4×10¹","8.5×10¹","8.6×10¹","8.7×10¹","8.8×10¹","8.9×10¹","9×10¹",
    "9.1×10¹","9.2×10¹","9.3×10¹","9.4×10¹","9.5×10¹","9.6×10¹","9.7×10¹","9.8×10¹","9.9×10¹","1×10²"
  ]
};

// Comprehensive semantic data (40+ pairs per category; first 20 are related, last 20+ unrelated)
export const semanticData = {
  categorical: [
    // Related pairs (20)
    ["sparrow","bird"],["oak","tree"],["salmon","fish"],["violin","instrument"],["rose","flower"],
    ["eagle","bird"],["maple","tree"],["tuna","fish"],["piano","instrument"],["tulip","flower"],
    ["robin","bird"],["pine","tree"],["cod","fish"],["guitar","instrument"],["daisy","flower"],
    ["hawk","bird"],["birch","tree"],["bass","fish"],["flute","instrument"],["lily","flower"],
    // Unrelated pairs (20)
    ["stone","bird"],["car","tree"],["book","fish"],["glass","instrument"],["shoe","flower"],
    ["cloud","bird"],["lamp","tree"],["coin","fish"],["wire","instrument"],["brick","flower"],
    ["chair","bird"],["phone","tree"],["table","fish"],["rope","instrument"],["hat","flower"],
    ["door","bird"],["window","tree"],["cup","fish"],["paper","instrument"],["bag","flower"]
  ],
  partWhole: [
    // Related pairs (20)
    ["petal","flower"],["wheel","car"],["page","book"],["leaf","tree"],["blade","knife"],
    ["key","keyboard"],["wing","plane"],["seed","fruit"],["handle","door"],["toe","foot"],
    ["stem","flower"],["door","car"],["cover","book"],["branch","tree"],["handle","knife"],
    ["button","keyboard"],["propeller","plane"],["skin","fruit"],["lock","door"],["heel","foot"],
    // Unrelated pairs (20)
    ["river","desert"],["engine","wheel"],["sky","page"],["root","petal"],["mouse","wing"],
    ["toe","hand"],["cloud","car"],["glass","book"],["stone","tree"],["water","fire"],
    ["mountain","ocean"],["computer","wheel"],["moon","page"],["sand","petal"],["cat","wing"],
    ["finger","hand"],["rain","car"],["metal","book"],["rock","tree"],["ice","fire"]
  ],
  functional: [
    // Related pairs (20)
    ["key","lock"],["pen","paper"],["needle","thread"],["brush","paint"],["plug","socket"],
    ["charger","phone"],["hammer","nail"],["spoon","soup"],["glove","hand"],["umbrella","rain"],
    ["scissors","paper"],["eraser","pencil"],["soap","water"],["toothbrush","teeth"],["shovel","dirt"],
    ["fork","food"],["cup","liquid"],["towel","water"],["comb","hair"],["bandage","wound"],
    // Unrelated pairs (20)
    ["key","cloud"],["pen","stone"],["needle","glass"],["brush","sand"],["plug","book"],
    ["charger","shoe"],["hammer","leaf"],["spoon","wall"],["glove","tree"],["umbrella","piano"],
    ["scissors","music"],["eraser","car"],["soap","mountain"],["toothbrush","sky"],["shovel","computer"],
    ["fork","book"],["cup","tree"],["towel","rock"],["comb","water"],["bandage","paper"]
  ],
  colorProperty: [
    // Related pairs (20)
    ["grass","emerald"],["sky","ocean"],["lemon","sun"],["cherry","rose"],["coal","night"],
    ["snow","paper"],["pumpkin","tiger"],["lavender","amethyst"],["sand","desert"],["chocolate","coffee"],
    ["banana","yellow"],["blood","red"],["leaf","green"],["cloud","white"],["dirt","brown"],
    ["fire","orange"],["grape","purple"],["carrot","orange"],["eggplant","purple"],["lime","green"],
    // Unrelated pairs (20)
    ["grass","coal"],["sky","chocolate"],["lemon","lavender"],["cherry","snow"],["coal","pumpkin"],
    ["paper","ocean"],["tiger","emerald"],["amethyst","sand"],["desert","coffee"],["night","lemon"],
    ["banana","red"],["blood","blue"],["leaf","purple"],["cloud","black"],["dirt","white"],
    ["fire","blue"],["grape","yellow"],["carrot","green"],["eggplant","red"],["lime","purple"]
  ],
  antonyms: [
    // Related pairs (20)
    ["hot","cold"],["fast","slow"],["light","dark"],["up","down"],["empty","full"],
    ["early","late"],["strong","weak"],["happy","sad"],["open","closed"],["near","far"],
    ["big","small"],["high","low"],["old","new"],["young","old"],["rich","poor"],
    ["good","bad"],["true","false"],["yes","no"],["left","right"],["front","back"],
    // Unrelated pairs (20)
    ["hot","warm"],["fast","quick"],["light","bright"],["up","over"],["empty","hollow"],
    ["early","soon"],["strong","solid"],["happy","glad"],["open","ajar"],["near","close"],
    ["big","large"],["high","tall"],["old","ancient"],["young","new"],["rich","wealthy"],
    ["good","nice"],["true","real"],["yes","sure"],["left","west"],["front","forward"]
  ],
  actionObject: [
    // Related pairs (20)
    ["eat","food"],["read","book"],["write","letter"],["drink","water"],["throw","ball"],
    ["cut","paper"],["drive","car"],["bake","bread"],["play","game"],["wash","dishes"],
    ["sleep","bed"],["cook","meal"],["sing","song"],["dance","music"],["swim","water"],
    ["fly","plane"],["climb","mountain"],["paint","picture"],["build","house"],["plant","garden"],
    // Unrelated pairs (20)
    ["eat","shoe"],["read","rain"],["write","sky"],["drink","stone"],["throw","cloud"],
    ["cut","music"],["drive","tree"],["bake","glass"],["play","wall"],["wash","smoke"],
    ["sleep","car"],["cook","book"],["sing","table"],["dance","chair"],["swim","mountain"],
    ["fly","book"],["climb","water"],["paint","food"],["build","song"],["plant","music"]
  ],
  // Additional semantic categories
  spatial: [
    // Related pairs (20)
    ["top","bottom"],["inside","outside"],["north","south"],["east","west"],["above","below"],
    ["center","edge"],["middle","end"],["beginning","finish"],["start","stop"],["first","last"],
    ["front","rear"],["left","right"],["forward","backward"],["upward","downward"],["inward","outward"],
    ["nearby","distant"],["adjacent","separate"],["parallel","perpendicular"],["vertical","horizontal"],["diagonal","straight"],
    // Unrelated pairs (20)
    ["top","side"],["inside","middle"],["north","center"],["east","top"],["above","nearby"],
    ["center","left"],["middle","front"],["beginning","upward"],["start","parallel"],["first","diagonal"],
    ["front","north"],["left","center"],["forward","top"],["upward","east"],["inward","left"],
    ["nearby","top"],["adjacent","center"],["parallel","north"],["vertical","left"],["diagonal","top"]
  ],
  temporal: [
    // Related pairs (20)
    ["morning","evening"],["dawn","dusk"],["sunrise","sunset"],["spring","autumn"],["summer","winter"],
    ["yesterday","tomorrow"],["past","future"],["before","after"],["earlier","later"],["soon","eventually"],
    ["now","then"],["present","absent"],["current","previous"],["recent","ancient"],["modern","old"],
    ["new","used"],["fresh","stale"],["recent","old"],["contemporary","historical"],["immediate","delayed"],
    // Unrelated pairs (20)
    ["morning","spring"],["dawn","summer"],["sunrise","yesterday"],["spring","now"],["summer","present"],
    ["yesterday","fresh"],["past","modern"],["before","immediate"],["earlier","current"],["soon","historical"],
    ["now","spring"],["present","dawn"],["current","summer"],["recent","spring"],["modern","dawn"],
    ["new","yesterday"],["fresh","past"],["recent","before"],["contemporary","earlier"],["immediate","soon"]
  ],
  size: [
    // Related pairs (20)
    ["giant","tiny"],["huge","miniature"],["massive","microscopic"],["enormous","minute"],["colossal","petite"],
    ["gigantic","small"],["vast","little"],["immense","diminutive"],["tremendous","minuscule"],["monumental","mini"],
    ["large","small"],["big","little"],["huge","tiny"],["massive","small"],["enormous","little"],
    ["colossal","tiny"],["gigantic","small"],["vast","little"],["immense","tiny"],["tremendous","small"],
    // Unrelated pairs (20)
    ["giant","large"],["huge","big"],["massive","huge"],["enormous","massive"],["colossal","enormous"],
    ["gigantic","colossal"],["vast","gigantic"],["immense","vast"],["tremendous","immense"],["monumental","tremendous"],
    ["large","big"],["big","huge"],["huge","massive"],["massive","enormous"],["enormous","colossal"],
    ["colossal","gigantic"],["gigantic","vast"],["vast","immense"],["immense","tremendous"],["tremendous","monumental"]
  ],
  quantity: [
    // Related pairs (20)
    ["many","few"],["numerous","scarce"],["abundant","rare"],["plentiful","limited"],["countless","single"],
    ["multiple","one"],["several","none"],["various","same"],["diverse","uniform"],["different","identical"],
    ["all","none"],["every","no"],["each","neither"],["both","neither"],["either","neither"],
    ["some","none"],["most","least"],["majority","minority"],["maximum","minimum"],["total","partial"],
    // Unrelated pairs (20)
    ["many","numerous"],["numerous","abundant"],["abundant","plentiful"],["plentiful","countless"],["countless","multiple"],
    ["multiple","several"],["several","various"],["various","diverse"],["diverse","different"],["different","all"],
    ["all","every"],["every","each"],["each","both"],["both","either"],["either","some"],
    ["some","most"],["most","majority"],["majority","maximum"],["maximum","total"],["total","many"]
  ],
  emotional: [
    // Related pairs (20)
    ["joy","sorrow"],["love","hate"],["hope","despair"],["peace","anger"],["calm","anxiety"],
    ["excitement","boredom"],["pride","shame"],["confidence","fear"],["gratitude","resentment"],["patience","impatience"],
    ["happiness","sadness"],["pleasure","pain"],["comfort","discomfort"],["satisfaction","disappointment"],["relief","worry"],
    ["optimism","pessimism"],["enthusiasm","apathy"],["contentment","frustration"],["serenity","turmoil"],["cheerfulness","gloom"],
    // Unrelated pairs (20)
    ["joy","love"],["love","hope"],["hope","peace"],["peace","calm"],["calm","excitement"],
    ["excitement","pride"],["pride","confidence"],["confidence","gratitude"],["gratitude","patience"],["patience","happiness"],
    ["happiness","pleasure"],["pleasure","comfort"],["comfort","satisfaction"],["satisfaction","relief"],["relief","optimism"],
    ["optimism","enthusiasm"],["enthusiasm","contentment"],["contentment","serenity"],["serenity","cheerfulness"],["cheerfulness","joy"]
  ],
  material: [
    // Related pairs (20)
    ["wood","tree"],["metal","iron"],["glass","sand"],["paper","wood"],["fabric","cotton"],
    ["leather","animal"],["plastic","oil"],["ceramic","clay"],["rubber","tree"],["concrete","cement"],
    ["steel","iron"],["aluminum","bauxite"],["copper","ore"],["gold","mine"],["silver","ore"],
    ["diamond","carbon"],["marble","stone"],["granite","stone"],["limestone","stone"],["sandstone","sand"],
    // Unrelated pairs (20)
    ["wood","metal"],["metal","glass"],["glass","paper"],["paper","fabric"],["fabric","leather"],
    ["leather","plastic"],["plastic","ceramic"],["ceramic","rubber"],["rubber","concrete"],["concrete","steel"],
    ["steel","aluminum"],["aluminum","copper"],["copper","gold"],["gold","silver"],["silver","diamond"],
    ["diamond","marble"],["marble","granite"],["granite","limestone"],["limestone","sandstone"],["sandstone","wood"]
  ],
  weather: [
    // Related pairs (20)
    ["sun","sunny"],["rain","rainy"],["snow","snowy"],["wind","windy"],["cloud","cloudy"],
    ["storm","stormy"],["fog","foggy"],["ice","icy"],["heat","hot"],["cold","freezing"],
    ["thunder","lightning"],["hurricane","tornado"],["drizzle","shower"],["blizzard","avalanche"],["drought","flood"],
    ["humidity","moisture"],["temperature","thermometer"],["barometer","pressure"],["forecast","prediction"],["climate","weather"],
    // Unrelated pairs (20)
    ["sun","rain"],["rain","snow"],["snow","wind"],["wind","cloud"],["cloud","storm"],
    ["storm","fog"],["fog","ice"],["ice","heat"],["heat","cold"],["cold","thunder"],
    ["thunder","hurricane"],["hurricane","drizzle"],["drizzle","blizzard"],["blizzard","drought"],["drought","humidity"],
    ["humidity","temperature"],["temperature","barometer"],["barometer","forecast"],["forecast","climate"],["climate","sun"]
  ],
  body: [
    // Related pairs (20)
    ["heart","blood"],["lung","breath"],["brain","thought"],["eye","sight"],["ear","sound"],
    ["nose","smell"],["tongue","taste"],["hand","touch"],["foot","walk"],["leg","run"],
    ["arm","reach"],["finger","point"],["toe","balance"],["head","think"],["neck","turn"],
    ["back","support"],["chest","breathe"],["stomach","digest"],["liver","filter"],["kidney","clean"],
    // Unrelated pairs (20)
    ["heart","lung"],["lung","brain"],["brain","eye"],["eye","ear"],["ear","nose"],
    ["nose","tongue"],["tongue","hand"],["hand","foot"],["foot","leg"],["leg","arm"],
    ["arm","finger"],["finger","toe"],["toe","head"],["head","neck"],["neck","back"],
    ["back","chest"],["chest","stomach"],["stomach","liver"],["liver","kidney"],["kidney","heart"]
  ],
  profession: [
    // Related pairs (20)
    ["doctor","patient"],["teacher","student"],["lawyer","client"],["chef","food"],["artist","art"],
    ["musician","music"],["writer","book"],["actor","play"],["dancer","dance"],["singer","song"],
    ["engineer","design"],["scientist","research"],["pilot","plane"],["driver","car"],["sailor","ship"],
    ["farmer","crop"],["gardener","plant"],["builder","house"],["mechanic","repair"],["barber","hair"],
    // Unrelated pairs (20)
    ["doctor","teacher"],["teacher","lawyer"],["lawyer","chef"],["chef","artist"],["artist","musician"],
    ["musician","writer"],["writer","actor"],["actor","dancer"],["dancer","singer"],["singer","engineer"],
    ["engineer","scientist"],["scientist","pilot"],["pilot","driver"],["driver","sailor"],["sailor","farmer"],
    ["farmer","gardener"],["gardener","builder"],["builder","mechanic"],["mechanic","barber"],["barber","doctor"]
  ]
};

// Extended format combinations for task
export const formatCombinations = [
  { name: "Arabic-Word", formats: ["arabic", "word"] },
  { name: "Arabic-Roman", formats: ["arabic", "roman"] },
  { name: "Word-Roman", formats: ["word", "roman"] },
  { name: "Arabic-Binary", formats: ["arabic", "binary"] },
  { name: "Arabic-Hexadecimal", formats: ["arabic", "hexadecimal"] },
  { name: "Arabic-Scientific", formats: ["arabic", "scientific"] },
  { name: "Word-Binary", formats: ["word", "binary"] },
  { name: "Word-Hexadecimal", formats: ["word", "hexadecimal"] },
  { name: "Word-Scientific", formats: ["word", "scientific"] },
  { name: "Roman-Binary", formats: ["roman", "binary"] },
  { name: "Roman-Hexadecimal", formats: ["roman", "hexadecimal"] },
  { name: "Roman-Scientific", formats: ["roman", "scientific"] },
  { name: "Binary-Hexadecimal", formats: ["binary", "hexadecimal"] },
  { name: "Binary-Scientific", formats: ["binary", "scientific"] },
  { name: "Hexadecimal-Scientific", formats: ["hexadecimal", "scientific"] }
];

// Extended level time limits in milliseconds (1-20 levels)
export const levelTimes = {
  1: 2000, 2: 1800, 3: 1600, 4: 1400, 5: 1200,
  6: 1100, 7: 1000, 8: 900, 9: 800, 10: 700,
  11: 600, 12: 500, 13: 400, 14: 350, 15: 300,
  16: 250, 17: 200, 18: 150, 19: 100, 20: 50
};

// Comprehensive game configuration constants
export const GAME_CONFIG = {
  // Session settings
  TOTAL_TRIALS: 32,
  MIN_TRIALS: 16,
  MAX_TRIALS: 64,
  
  // Difficulty settings
  MAX_ERRORS_PER_LEVEL: 3,
  MAX_CONSECUTIVE_FAILURES: 3,
  MIN_LEVEL: 1,
  MAX_LEVEL: 20,
  
  // Timing settings
  FIXATION_DURATION: 500,
  FEEDBACK_DURATION: 1000,
  LEVEL_CHANGE_MESSAGE_DURATION: 2000,
  INTER_TRIAL_INTERVAL: 1000,
  RESPONSE_TIMEOUT: 5000,
  
  // Storage keys
  STORAGE_KEYS: {
    TASK_DATA: 'posnerTaskData',
    PROGRESS: 'posnerProgress',
    SETTINGS: 'posnerSettings',
    STATISTICS: 'posnerStatistics',
    ACHIEVEMENTS: 'posnerAchievements'
  },
  
  // Number range options
  NUMBER_RANGES: {
    SMALL: { min: 1, max: 10, label: "1-10" },
    MEDIUM: { min: 1, max: 20, label: "1-20" },
    LARGE: { min: 1, max: 50, label: "1-50" },
    EXTENDED: { min: 1, max: 100, label: "1-100" }
  },
  
  // Game modes
  MODES: {
    CLASSIC: 'classic',
    MULTI: 'multi',
    MANUAL: 'manual',
    PRACTICE: 'practice',
    CHALLENGE: 'challenge'
  },
  
  // Stimulus types
  STIMULUS_TYPES: {
    NUMBERS: 'numbers',
    SEMANTIC: 'semantic',
    MIXED: 'mixed'
  },
  
  // Response keys
  RESPONSE_KEYS: {
    SAME: ['j', 'J', 'ArrowUp', 'Space'],
    DIFFERENT: ['f', 'F', 'ArrowDown'],
    CONTINUE: [' ', 'Space', 'Enter']
  },
  
  // Performance thresholds
  PERFORMANCE_THRESHOLDS: {
    EXCELLENT: 0.95,
    GOOD: 0.85,
    FAIR: 0.70,
    POOR: 0.50
  },
  
  // Achievement thresholds
  ACHIEVEMENT_THRESHOLDS: {
    PERFECT_SESSION: 1.0,
    STREAK_5: 5,
    STREAK_10: 10,
    STREAK_20: 20,
    LEVEL_10: 10,
    LEVEL_15: 15,
    LEVEL_20: 20,
    SESSIONS_10: 10,
    SESSIONS_50: 50,
    SESSIONS_100: 100
  }
};

// Comprehensive semantic category rules configuration
export const SEMANTIC_RULES = {
  categorical: {
    title: 'Categorical',
    description: "Judge specific–category relation. Press 'J' if related (e.g., sparrow–bird), 'F' otherwise.",
    difficulty: 'easy',
    examples: ['sparrow-bird', 'oak-tree', 'salmon-fish']
  },
  partWhole: {
    title: 'Part–Whole',
    description: "Judge part–whole relation. Press 'J' if there is a part-whole relationship (e.g., petal–flower or door–handle), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['petal-flower', 'wheel-car', 'page-book']
  },
  functional: {
    title: 'Functional',
    description: "Judge functional pairing. Press 'J' if items go together in use (e.g., key–lock), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['key-lock', 'pen-paper', 'needle-thread']
  },
  colorProperty: {
    title: 'Color Property',
    description: "Judge shared color. Press 'J' if the pair shares a color property (e.g., grass–emerald), 'F' otherwise.",
    difficulty: 'easy',
    examples: ['grass-emerald', 'sky-ocean', 'lemon-sun']
  },
  antonyms: {
    title: 'Antonyms',
    description: "Judge opposites. Press 'J' if the words are opposites (e.g., hot–cold), 'F' otherwise.",
    difficulty: 'easy',
    examples: ['hot-cold', 'fast-slow', 'light-dark']
  },
  actionObject: {
    title: 'Action–Object',
    description: "Judge action–object fit. Press 'J' if the action typically applies to the object (e.g., eat–food), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['eat-food', 'read-book', 'write-letter']
  },
  spatial: {
    title: 'Spatial Relations',
    description: "Judge spatial relationships. Press 'J' if the words are spatial opposites (e.g., top–bottom), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['top-bottom', 'inside-outside', 'north-south']
  },
  temporal: {
    title: 'Temporal Relations',
    description: "Judge time relationships. Press 'J' if the words are temporal opposites (e.g., morning–evening), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['morning-evening', 'dawn-dusk', 'spring-autumn']
  },
  size: {
    title: 'Size Relations',
    description: "Judge size relationships. Press 'J' if the words are size opposites (e.g., giant–tiny), 'F' otherwise.",
    difficulty: 'easy',
    examples: ['giant-tiny', 'huge-miniature', 'massive-microscopic']
  },
  quantity: {
    title: 'Quantity Relations',
    description: "Judge quantity relationships. Press 'J' if the words are quantity opposites (e.g., many–few), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['many-few', 'numerous-scarce', 'abundant-rare']
  },
  emotional: {
    title: 'Emotional Relations',
    description: "Judge emotional relationships. Press 'J' if the words are emotional opposites (e.g., joy–sorrow), 'F' otherwise.",
    difficulty: 'hard',
    examples: ['joy-sorrow', 'love-hate', 'hope-despair']
  },
  material: {
    title: 'Material Relations',
    description: "Judge material relationships. Press 'J' if the first item is made from the second (e.g., wood–tree), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['wood-tree', 'metal-iron', 'glass-sand']
  },
  weather: {
    title: 'Weather Relations',
    description: "Judge weather relationships. Press 'J' if the words are weather-related (e.g., sun–sunny), 'F' otherwise.",
    difficulty: 'easy',
    examples: ['sun-sunny', 'rain-rainy', 'snow-snowy']
  },
  body: {
    title: 'Body Relations',
    description: "Judge body relationships. Press 'J' if the words are body-related (e.g., heart–blood), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['heart-blood', 'lung-breath', 'brain-thought']
  },
  profession: {
    title: 'Profession Relations',
    description: "Judge profession relationships. Press 'J' if the words are profession-related (e.g., doctor–patient), 'F' otherwise.",
    difficulty: 'medium',
    examples: ['doctor-patient', 'teacher-student', 'lawyer-client']
  }
};

// Extended default settings
export const DEFAULT_SETTINGS = {
  // Display settings
  showErrorCounts: true,
  showProgressBar: true,
  showFeedback: true,
  showLevelChangeMessages: true,
  showAchievements: true,
  
  // Game settings
  numberRange: 10,
  modeType: 'classic',
  isProgressiveMode: true,
  selectedLevel: 1,
  
  // Audio settings
  enableSound: false,
  soundVolume: 0.5,
  enableVoiceFeedback: false,
  
  // Visual settings
  theme: 'light',
  fontSize: 'medium',
  colorScheme: 'default',
  animationSpeed: 'normal',
  
  // Accessibility settings
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  
  // Training settings
  autoAdvance: false,
  practiceMode: false,
  adaptiveDifficulty: true,
  showHints: false,
  
  // Data settings
  saveProgress: true,
  shareData: false,
  analytics: false
};

// UI Configuration
export const UI_CONFIG = {
  // Screen transitions
  TRANSITION_DURATION: 300,
  FADE_DURATION: 200,
  
  // Button styles
  BUTTON_STYLES: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    INFO: 'info'
  },
  
  // Color themes
  THEMES: {
    LIGHT: {
      background: '#d9cece',
      primary: '#cc2929',
      secondary: '#262424',
      accent: '#f2e6e6',
      text: '#262424',
      textLight: '#403d3d'
    },
    DARK: {
      background: '#2d2d2d',
      primary: '#ff4444',
      secondary: '#e0e0e0',
      accent: '#3d3d3d',
      text: '#e0e0e0',
      textLight: '#b0b0b0'
    },
    HIGH_CONTRAST: {
      background: '#000000',
      primary: '#ffffff',
      secondary: '#ffffff',
      accent: '#333333',
      text: '#ffffff',
      textLight: '#cccccc'
    }
  },
  
  // Font sizes
  FONT_SIZES: {
    SMALL: '14px',
    MEDIUM: '16px',
    LARGE: '18px',
    EXTRA_LARGE: '20px'
  },
  
  // Animation speeds
  ANIMATION_SPEEDS: {
    SLOW: 1000,
    NORMAL: 500,
    FAST: 200,
    INSTANT: 0
  }
};

// Statistics Configuration
export const STATS_CONFIG = {
  // Metrics to track
  METRICS: {
    ACCURACY: 'accuracy',
    REACTION_TIME: 'reactionTime',
    LEVEL_REACHED: 'levelReached',
    SESSIONS_COMPLETED: 'sessionsCompleted',
    TOTAL_TRIALS: 'totalTrials',
    STREAK: 'streak',
    ERRORS: 'errors'
  },
  
  // Time periods for statistics
  TIME_PERIODS: {
    TODAY: 'today',
    WEEK: 'week',
    MONTH: 'month',
    YEAR: 'year',
    ALL_TIME: 'allTime'
  },
  
  // Performance categories
  PERFORMANCE_CATEGORIES: {
    BEGINNER: { min: 0, max: 0.6, label: 'Beginner' },
    INTERMEDIATE: { min: 0.6, max: 0.8, label: 'Intermediate' },
    ADVANCED: { min: 0.8, max: 0.9, label: 'Advanced' },
    EXPERT: { min: 0.9, max: 1.0, label: 'Expert' }
  }
};

// Achievement System Configuration
export const ACHIEVEMENTS_CONFIG = {
  ACHIEVEMENTS: {
    FIRST_SESSION: {
      id: 'first_session',
      name: 'Getting Started',
      description: 'Complete your first training session',
      icon: '🎯',
      points: 10
    },
    PERFECT_SESSION: {
      id: 'perfect_session',
      name: 'Perfect Score',
      description: 'Achieve 100% accuracy in a session',
      icon: '⭐',
      points: 50
    },
    LEVEL_MASTER: {
      id: 'level_master',
      name: 'Level Master',
      description: 'Reach level 10',
      icon: '🏆',
      points: 100
    },
    STREAK_KING: {
      id: 'streak_king',
      name: 'Streak King',
      description: 'Get 20 correct answers in a row',
      icon: '🔥',
      points: 75
    },
    DEDICATED_TRAINER: {
      id: 'dedicated_trainer',
      name: 'Dedicated Trainer',
      description: 'Complete 50 training sessions',
      icon: '💪',
      points: 200
    },
    SPEED_DEMON: {
      id: 'speed_demon',
      name: 'Speed Demon',
      description: 'Average response time under 500ms',
      icon: '⚡',
      points: 150
    },
    SEMANTIC_SCHOLAR: {
      id: 'semantic_scholar',
      name: 'Semantic Scholar',
      description: 'Master all semantic categories',
      icon: '🧠',
      points: 300
    },
    NUMBER_NINJA: {
      id: 'number_ninja',
      name: 'Number Ninja',
      description: 'Master all number formats',
      icon: '🥷',
      points: 250
    }
  },
  
  // Achievement categories
  CATEGORIES: {
    PROGRESS: 'progress',
    PERFORMANCE: 'performance',
    CONSISTENCY: 'consistency',
    MASTERY: 'mastery',
    SPECIAL: 'special'
  }
};

// Error Messages Configuration
export const ERROR_MESSAGES = {
  STORAGE_ERROR: 'Unable to save progress. Please check your browser settings.',
  LOAD_ERROR: 'Unable to load saved data. Starting fresh.',
  NETWORK_ERROR: 'Network connection issue. Working offline.',
  BROWSER_ERROR: 'Your browser may not support all features. Please update.',
  DATA_CORRUPTION: 'Saved data appears corrupted. Resetting to defaults.',
  PERMISSION_ERROR: 'Permission denied. Please check browser settings.',
  QUOTA_EXCEEDED: 'Storage quota exceeded. Some data may not be saved.',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.'
};

// Success Messages Configuration
export const SUCCESS_MESSAGES = {
  LEVEL_UP: 'Great job! Level increased!',
  PERFECT_TRIAL: 'Perfect!',
  STREAK_BREAK: 'New streak record!',
  ACHIEVEMENT_UNLOCKED: 'Achievement unlocked!',
  SESSION_COMPLETE: 'Session completed successfully!',
  PROGRESS_SAVED: 'Progress saved successfully!',
  SETTINGS_UPDATED: 'Settings updated successfully!'
};

// Help Text Configuration
export const HELP_TEXT = {
  WELCOME: 'Welcome to the Adaptive Posner Task! This cognitive training tool helps improve your semantic memory and attention.',
  RULES: 'Each trial presents a rule. Follow the rule to determine if items are the same or different.',
  CONTROLS: 'Use J for "Same" and F for "Different". Press Spacebar to continue from rule screens.',
  PROGRESS: 'Your performance determines difficulty progression. Better performance leads to harder levels.',
  MODES: 'Choose between Classic (numbers only), Multi (numbers + semantic), or Manual (fixed difficulty) modes.',
  TIPS: 'Pay attention to rule changes between trials. Practice regularly for best results.'
};
