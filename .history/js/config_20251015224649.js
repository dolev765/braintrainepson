// Configuration file - Contains all game constants and settings

// Massive number data for stimulus generation (1-1000)
export const numberData = {
  arabic: Array.from({length: 1000}, (_, i) => (i + 1).toString()),
  word: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    if (num <= 20) return ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"][num];
    if (num < 100) {
      const tens = Math.floor(num / 10);
      const ones = num % 10;
      const tensWords = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
      return ones === 0 ? tensWords[tens] : `${tensWords[tens]}-${["","one","two","three","four","five","six","seven","eight","nine"][ones]}`;
    }
    if (num < 1000) {
      const hundreds = Math.floor(num / 100);
      const remainder = num % 100;
      const hundredWord = hundreds === 1 ? "one hundred" : `${["","one","two","three","four","five","six","seven","eight","nine"][hundreds]} hundred`;
      if (remainder === 0) return hundredWord;
      if (remainder <= 20) return `${hundredWord} ${["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"][remainder]}`;
      const tens = Math.floor(remainder / 10);
      const ones = remainder % 10;
      const tensWords = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
      const onesWord = ones === 0 ? "" : `-${["","one","two","three","four","five","six","seven","eight","nine"][ones]}`;
      return `${hundredWord} ${tensWords[tens]}${onesWord}`;
    }
    return "one thousand";
  }),
  roman: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result = "";
    for (let j = 0; j < values.length; j++) {
      while (num >= values[j]) {
        result += symbols[j];
        num -= values[j];
      }
    }
    return result;
  }),
  binary: Array.from({length: 1000}, (_, i) => (i + 1).toString(2)),
  hexadecimal: Array.from({length: 1000}, (_, i) => (i + 1).toString(16).toUpperCase()),
  scientific: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    if (num < 10) return `${num}×10⁰`;
    if (num < 100) return `${(num/10).toFixed(1)}×10¹`;
    if (num < 1000) return `${(num/100).toFixed(1)}×10²`;
    return `${(num/1000).toFixed(1)}×10³`;
  }),
  // Additional number formats
  fraction: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const denominators = [2,3,4,5,6,7,8,9,10,12,15,16,20,25,50,100];
    const denom = denominators[Math.floor(Math.random() * denominators.length)];
    const numerator = Math.floor(Math.random() * denom) + 1;
    return `${numerator}/${denom}`;
  }),
  ordinal: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const j = num % 10, k = num % 100;
    if (j === 1 && k !== 11) return num + "st";
    if (j === 2 && k !== 12) return num + "nd";
    if (j === 3 && k !== 13) return num + "rd";
    return num + "th";
  }),
  percentage: Array.from({length: 1000}, (_, i) => `${i + 1}%`),
  tally: Array.from({length: 1000}, (_, i) => {
    const num = i + 1;
    const groups = Math.floor(num / 5);
    const remainder = num % 5;
    let result = "";
    for (let j = 0; j < groups; j++) result += "卌";
    for (let j = 0; j < remainder; j++) result += "|";
    return result || "|";
  })
};

// Comprehensive semantic data organized by difficulty tiers
export const semanticData = {
  // TIER 1 - BASIC (Auto-enabled): Universal knowledge
  categorical: [
    // Related pairs (100)
    ["sparrow","bird"],["oak","tree"],["salmon","fish"],["violin","instrument"],["rose","flower"],
    ["eagle","bird"],["maple","tree"],["tuna","fish"],["piano","instrument"],["tulip","flower"],
    ["robin","bird"],["pine","tree"],["cod","fish"],["guitar","instrument"],["daisy","flower"],
    ["hawk","bird"],["birch","tree"],["bass","fish"],["flute","instrument"],["lily","flower"],
    ["crow","bird"],["elm","tree"],["trout","fish"],["drum","instrument"],["orchid","flower"],
    ["owl","bird"],["cedar","tree"],["perch","fish"],["trumpet","instrument"],["sunflower","flower"],
    ["duck","bird"],["willow","tree"],["carp","fish"],["viola","instrument"],["daffodil","flower"],
    ["swan","bird"],["poplar","tree"],["pike","fish"],["cello","instrument"],["carnation","flower"],
    ["parrot","bird"],["ash","tree"],["mackerel","fish"],["saxophone","instrument"],["iris","flower"],
    ["penguin","bird"],["chestnut","tree"],["herring","fish"],["clarinet","instrument"],["peony","flower"],
    ["pelican","bird"],["walnut","tree"],["anchovy","fish"],["oboe","instrument"],["magnolia","flower"],
    ["flamingo","bird"],["hickory","tree"],["sardine","fish"],["trombone","instrument"],["lavender","flower"],
    ["peacock","bird"],["beech","tree"],["marlin","fish"],["french horn","instrument"],["jasmine","flower"],
    ["ostrich","bird"],["cypress","tree"],["swordfish","fish"],["tuba","instrument"],["gardenia","flower"],
    ["kiwi","bird"],["sequoia","tree"],["barracuda","fish"],["harp","instrument"],["azalea","flower"],
    ["toucan","bird"],["redwood","tree"],["catfish","fish"],["xylophone","instrument"],["hibiscus","flower"],
    ["hummingbird","bird"],["fir","tree"],["eel","fish"],["marimba","instrument"],["chrysanthemum","flower"],
    ["woodpecker","bird"],["spruce","tree"],["shark","fish"],["accordion","instrument"],["geranium","flower"],
    ["kingfisher","bird"],["hemlock","tree"],["ray","fish"],["banjo","instrument"],["petunia","flower"],
    // Unrelated pairs (100)
    ["stone","bird"],["car","tree"],["book","fish"],["glass","instrument"],["shoe","flower"],
    ["cloud","bird"],["lamp","tree"],["coin","fish"],["wire","instrument"],["brick","flower"],
    ["chair","bird"],["phone","tree"],["table","fish"],["rope","instrument"],["hat","flower"],
    ["door","bird"],["window","tree"],["cup","fish"],["paper","instrument"],["bag","flower"],
    ["computer","bird"],["key","tree"],["clock","fish"],["button","instrument"],["box","flower"],
    ["mirror","bird"],["plate","tree"],["spoon","fish"],["chain","instrument"],["bottle","flower"],
    ["camera","bird"],["knife","tree"],["fork","fish"],["nail","instrument"],["can","flower"],
    ["watch","bird"],["pen","tree"],["brush","fish"],["screw","instrument"],["jar","flower"],
    ["wallet","bird"],["scissors","tree"],["comb","fish"],["pin","instrument"],["tube","flower"],
    ["umbrella","bird"],["hammer","tree"],["ruler","fish"],["clip","instrument"],["disk","flower"],
    ["backpack","bird"],["stapler","tree"],["eraser","fish"],["hook","instrument"],["card","flower"],
    ["notebook","bird"],["calculator","tree"],["pencil","fish"],["ring","instrument"],["ticket","flower"],
    ["passport","bird"],["diary","tree"],["marker","fish"],["bracelet","instrument"],["stamp","flower"],
    ["receipt","bird"],["envelope","tree"],["crayon","fish"],["necklace","instrument"],["coupon","flower"],
    ["ticket","bird"],["folder","tree"],["chalk","fish"],["earring","instrument"],["badge","flower"],
    ["calendar","bird"],["binder","tree"],["paint","fish"],["brooch","instrument"],["label","flower"],
    ["magazine","bird"],["newspaper","tree"],["ink","fish"],["pendant","instrument"],["tag","flower"],
    ["bookmark","bird"],["postcard","tree"],["glue","fish"],["charm","instrument"],["sticker","flower"],
    ["booklet","bird"],["pamphlet","tree"],["tape","fish"],["medal","instrument"],["tattoo","flower"],
    ["manual","bird"],["guide","tree"],["string","fish"],["award","instrument"],["patch","flower"]
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
    // Related pairs (100)
    ["doctor","patient"],["teacher","student"],["lawyer","client"],["chef","food"],["artist","art"],
    ["musician","music"],["writer","book"],["actor","play"],["dancer","dance"],["singer","song"],
    ["engineer","design"],["scientist","research"],["pilot","plane"],["driver","car"],["sailor","ship"],
    ["farmer","crop"],["gardener","plant"],["builder","house"],["mechanic","repair"],["barber","hair"],
    ["nurse","hospital"],["dentist","teeth"],["veterinarian","animal"],["firefighter","fire"],["police","crime"],
    ["judge","court"],["accountant","tax"],["architect","building"],["photographer","camera"],["journalist","news"],
    ["librarian","book"],["cashier","money"],["waiter","restaurant"],["cook","kitchen"],["cleaner","dirt"],
    ["electrician","wire"],["plumber","pipe"],["carpenter","wood"],["painter","brush"],["designer","style"],
    ["programmer","code"],["analyst","data"],["manager","team"],["consultant","advice"],["therapist","therapy"],
    ["coach","training"],["instructor","lesson"],["guide","tour"],["translator","language"],["editor","text"],
    ["producer","film"],["director","movie"],["composer","music"],["choreographer","dance"],["stylist","fashion"],
    ["makeup artist","beauty"],["hairdresser","hair"],["massage therapist","relaxation"],["personal trainer","fitness"],["nutritionist","diet"],
    ["real estate agent","property"],["insurance agent","policy"],["salesperson","product"],["marketer","campaign"],["advertiser","promotion"],
    ["recruiter","job"],["hr specialist","employee"],["administrator","office"],["secretary","schedule"],["receptionist","visitor"],
    ["security guard","safety"],["detective","investigation"],["paramedic","emergency"],["radiologist","scan"],["surgeon","operation"],
    ["pharmacist","medicine"],["therapist","rehabilitation"],["counselor","guidance"],["social worker","support"],["psychologist","mind"],
    ["researcher","study"],["professor","university"],["principal","school"],["supervisor","workplace"],["foreman","construction"],
    ["captain","ship"],["commander","military"],["sergeant","army"],["lieutenant","navy"],["colonel","air force"],
    ["ambassador","diplomacy"],["mayor","city"],["governor","state"],["senator","politics"],["president","country"],
    ["ceo","company"],["founder","startup"],["investor","capital"],["entrepreneur","business"],["consultant","expertise"],
    ["freelancer","project"],["contractor","service"],["specialist","field"],["expert","knowledge"],["professional","career"],
    // Unrelated pairs (100)
    ["doctor","teacher"],["teacher","lawyer"],["lawyer","chef"],["chef","artist"],["artist","musician"],
    ["musician","writer"],["writer","actor"],["actor","dancer"],["dancer","singer"],["singer","engineer"],
    ["engineer","scientist"],["scientist","pilot"],["pilot","driver"],["driver","sailor"],["sailor","farmer"],
    ["farmer","gardener"],["gardener","builder"],["builder","mechanic"],["mechanic","barber"],["barber","doctor"],
    ["nurse","lawyer"],["dentist","musician"],["veterinarian","actor"],["firefighter","writer"],["police","artist"],
    ["judge","singer"],["accountant","dancer"],["architect","engineer"],["photographer","scientist"],["journalist","pilot"],
    ["librarian","driver"],["cashier","sailor"],["waiter","farmer"],["cook","gardener"],["cleaner","builder"],
    ["electrician","mechanic"],["plumber","barber"],["carpenter","doctor"],["painter","teacher"],["designer","lawyer"],
    ["programmer","chef"],["analyst","artist"],["manager","musician"],["consultant","writer"],["therapist","actor"],
    ["coach","dancer"],["instructor","singer"],["guide","engineer"],["translator","scientist"],["editor","pilot"],
    ["producer","driver"],["director","sailor"],["composer","farmer"],["choreographer","gardener"],["stylist","builder"],
    ["makeup artist","mechanic"],["hairdresser","barber"],["massage therapist","doctor"],["personal trainer","teacher"],["nutritionist","lawyer"],
    ["real estate agent","chef"],["insurance agent","artist"],["salesperson","musician"],["marketer","writer"],["advertiser","actor"],
    ["recruiter","dancer"],["hr specialist","singer"],["administrator","engineer"],["secretary","scientist"],["receptionist","pilot"],
    ["security guard","driver"],["detective","sailor"],["paramedic","farmer"],["radiologist","gardener"],["surgeon","builder"],
    ["pharmacist","mechanic"],["therapist","barber"],["counselor","doctor"],["social worker","teacher"],["psychologist","lawyer"],
    ["researcher","chef"],["professor","artist"],["principal","musician"],["supervisor","writer"],["foreman","actor"],
    ["captain","dancer"],["commander","singer"],["sergeant","engineer"],["lieutenant","scientist"],["colonel","pilot"],
    ["ambassador","driver"],["mayor","sailor"],["governor","farmer"],["senator","gardener"],["president","builder"],
    ["ceo","mechanic"],["founder","barber"],["investor","doctor"],["entrepreneur","teacher"],["consultant","lawyer"],
    ["freelancer","chef"],["contractor","artist"],["specialist","musician"],["expert","writer"],["professional","actor"]
  ],

  // TIER 2 - COMMON KNOWLEDGE (Default off): Everyday knowledge
  animals: [
    // Related pairs (100)
    ["dog","puppy"],["cat","kitten"],["cow","calf"],["horse","foal"],["pig","piglet"],
    ["sheep","lamb"],["goat","kid"],["chicken","chick"],["duck","duckling"],["goose","gosling"],
    ["lion","cub"],["tiger","cub"],["bear","cub"],["wolf","pup"],["fox","kit"],
    ["elephant","calf"],["giraffe","calf"],["zebra","foal"],["deer","fawn"],["rabbit","kit"],
    ["squirrel","pup"],["mouse","pup"],["rat","pup"],["hamster","pup"],["guinea pig","pup"],
    ["bird","chick"],["eagle","eaglet"],["owl","owlet"],["parrot","chick"],["penguin","chick"],
    ["fish","fry"],["shark","pup"],["whale","calf"],["dolphin","calf"],["seal","pup"],
    ["frog","tadpole"],["toad","tadpole"],["snake","snakelet"],["lizard","hatchling"],["turtle","hatchling"],
    ["butterfly","caterpillar"],["bee","larva"],["ant","larva"],["spider","spiderling"],["fly","maggot"],
    ["dog","bark"],["cat","meow"],["cow","moo"],["horse","neigh"],["pig","oink"],
    ["sheep","baa"],["goat","bleat"],["chicken","cluck"],["duck","quack"],["goose","honk"],
    ["lion","roar"],["tiger","growl"],["bear","growl"],["wolf","howl"],["fox","bark"],
    ["elephant","trumpet"],["giraffe","hum"],["zebra","bray"],["deer","bellow"],["rabbit","squeak"],
    ["squirrel","chatter"],["mouse","squeak"],["rat","squeak"],["hamster","squeak"],["guinea pig","squeak"],
    ["bird","chirp"],["eagle","screech"],["owl","hoot"],["parrot","squawk"],["penguin","honk"],
    ["fish","bubble"],["shark","silence"],["whale","song"],["dolphin","click"],["seal","bark"],
    ["frog","ribbit"],["toad","croak"],["snake","hiss"],["lizard","chirp"],["turtle","grunt"],
    ["butterfly","silence"],["bee","buzz"],["ant","silence"],["spider","silence"],["fly","buzz"],
    ["dog","bone"],["cat","fish"],["cow","grass"],["horse","hay"],["pig","corn"],
    ["sheep","grass"],["goat","grass"],["chicken","seed"],["duck","bread"],["goose","grass"],
    ["lion","meat"],["tiger","meat"],["bear","fish"],["wolf","meat"],["fox","chicken"],
    ["elephant","leaves"],["giraffe","leaves"],["zebra","grass"],["deer","grass"],["rabbit","carrot"],
    ["squirrel","nuts"],["mouse","cheese"],["rat","garbage"],["hamster","seeds"],["guinea pig","vegetables"],
    ["bird","worms"],["eagle","rabbit"],["owl","mouse"],["parrot","fruit"],["penguin","fish"],
    ["fish","plankton"],["shark","fish"],["whale","krill"],["dolphin","fish"],["seal","fish"],
    ["frog","flies"],["toad","insects"],["snake","mouse"],["lizard","insects"],["turtle","plants"],
    ["butterfly","nectar"],["bee","pollen"],["ant","sugar"],["spider","flies"],["fly","decay"],
    // Unrelated pairs (100)
    ["dog","meow"],["cat","bark"],["cow","roar"],["horse","oink"],["pig","neigh"],
    ["sheep","growl"],["goat","moo"],["chicken","howl"],["duck","trumpet"],["goose","bray"],
    ["lion","cluck"],["tiger","baa"],["bear","quack"],["wolf","honk"],["fox","moo"],
    ["elephant","bark"],["giraffe","meow"],["zebra","roar"],["deer","oink"],["rabbit","neigh"],
    ["squirrel","growl"],["mouse","howl"],["rat","trumpet"],["hamster","bray"],["guinea pig","cluck"],
    ["bird","baa"],["eagle","quack"],["owl","honk"],["parrot","moo"],["penguin","bark"],
    ["fish","meow"],["shark","roar"],["whale","oink"],["dolphin","neigh"],["seal","growl"],
    ["frog","howl"],["toad","trumpet"],["snake","bray"],["lizard","cluck"],["turtle","baa"],
    ["butterfly","quack"],["bee","honk"],["ant","moo"],["spider","bark"],["fly","meow"],
    ["dog","fish"],["cat","grass"],["cow","bone"],["horse","fish"],["pig","hay"],
    ["sheep","corn"],["goat","seed"],["chicken","bread"],["duck","grass"],["goose","seed"],
    ["lion","grass"],["tiger","hay"],["bear","corn"],["wolf","seed"],["fox","bread"],
    ["elephant","meat"],["giraffe","fish"],["zebra","leaves"],["deer","fish"],["rabbit","grass"],
    ["squirrel","carrot"],["mouse","nuts"],["rat","cheese"],["hamster","garbage"],["guinea pig","seeds"],
    ["bird","vegetables"],["eagle","worms"],["owl","rabbit"],["parrot","mouse"],["penguin","fruit"],
    ["fish","fish"],["shark","plankton"],["whale","fish"],["dolphin","krill"],["seal","fish"],
    ["frog","flies"],["toad","insects"],["snake","mouse"],["lizard","insects"],["turtle","plants"],
    ["butterfly","nectar"],["bee","pollen"],["ant","sugar"],["spider","flies"],["fly","decay"],
    ["dog","puppy"],["cat","kitten"],["cow","calf"],["horse","foal"],["pig","piglet"],
    ["sheep","lamb"],["goat","kid"],["chicken","chick"],["duck","duckling"],["goose","gosling"],
    ["lion","cub"],["tiger","cub"],["bear","cub"],["wolf","pup"],["fox","kit"],
    ["elephant","calf"],["giraffe","calf"],["zebra","foal"],["deer","fawn"],["rabbit","kit"],
    ["squirrel","pup"],["mouse","pup"],["rat","pup"],["hamster","pup"],["guinea pig","pup"],
    ["bird","chick"],["eagle","eaglet"],["owl","owlet"],["parrot","chick"],["penguin","chick"],
    ["fish","fry"],["shark","pup"],["whale","calf"],["dolphin","calf"],["seal","pup"],
    ["frog","tadpole"],["toad","tadpole"],["snake","snakelet"],["lizard","hatchling"],["turtle","hatchling"],
    ["butterfly","caterpillar"],["bee","larva"],["ant","larva"],["spider","spiderling"],["fly","maggot"]
  ],

  // TIER 3 - EXPERT KNOWLEDGE (Default off): Specialized knowledge
  geography: [
    // Related pairs (50)
    ["France","Paris"],["Germany","Berlin"],["Italy","Rome"],["Spain","Madrid"],["Portugal","Lisbon"],
    ["United Kingdom","London"],["Ireland","Dublin"],["Netherlands","Amsterdam"],["Belgium","Brussels"],["Switzerland","Bern"],
    ["Austria","Vienna"],["Poland","Warsaw"],["Czech Republic","Prague"],["Hungary","Budapest"],["Romania","Bucharest"],
    ["Bulgaria","Sofia"],["Greece","Athens"],["Turkey","Ankara"],["Russia","Moscow"],["Ukraine","Kyiv"],
    ["Japan","Tokyo"],["China","Beijing"],["South Korea","Seoul"],["North Korea","Pyongyang"],["Mongolia","Ulaanbaatar"],
    ["India","New Delhi"],["Pakistan","Islamabad"],["Bangladesh","Dhaka"],["Sri Lanka","Colombo"],["Nepal","Kathmandu"],
    ["Thailand","Bangkok"],["Vietnam","Hanoi"],["Cambodia","Phnom Penh"],["Laos","Vientiane"],["Myanmar","Naypyidaw"],
    ["Malaysia","Kuala Lumpur"],["Singapore","Singapore"],["Indonesia","Jakarta"],["Philippines","Manila"],["Brunei","Bandar Seri Begawan"],
    ["Australia","Canberra"],["New Zealand","Wellington"],["Papua New Guinea","Port Moresby"],["Fiji","Suva"],["Samoa","Apia"],
    ["Canada","Ottawa"],["Mexico","Mexico City"],["Brazil","Brasília"],["Argentina","Buenos Aires"],["Chile","Santiago"],
    // Unrelated pairs (50)
    ["France","Berlin"],["Germany","Rome"],["Italy","Madrid"],["Spain","Lisbon"],["Portugal","London"],
    ["United Kingdom","Dublin"],["Ireland","Amsterdam"],["Netherlands","Brussels"],["Belgium","Bern"],["Switzerland","Vienna"],
    ["Austria","Warsaw"],["Poland","Prague"],["Czech Republic","Budapest"],["Hungary","Bucharest"],["Romania","Sofia"],
    ["Bulgaria","Athens"],["Greece","Ankara"],["Turkey","Moscow"],["Russia","Kyiv"],["Ukraine","Tokyo"],
    ["Japan","Beijing"],["China","Seoul"],["South Korea","Pyongyang"],["North Korea","Ulaanbaatar"],["Mongolia","New Delhi"],
    ["India","Islamabad"],["Pakistan","Dhaka"],["Bangladesh","Colombo"],["Sri Lanka","Kathmandu"],["Nepal","Bangkok"],
    ["Thailand","Hanoi"],["Vietnam","Phnom Penh"],["Cambodia","Vientiane"],["Laos","Naypyidaw"],["Myanmar","Kuala Lumpur"],
    ["Malaysia","Singapore"],["Singapore","Jakarta"],["Indonesia","Manila"],["Philippines","Bandar Seri Begawan"],["Brunei","Canberra"],
    ["Australia","Wellington"],["New Zealand","Port Moresby"],["Papua New Guinea","Suva"],["Fiji","Apia"],["Samoa","Ottawa"],
    ["Canada","Mexico City"],["Mexico","Brasília"],["Brazil","Buenos Aires"],["Argentina","Santiago"],["Chile","Paris"]
  ],

  science: [
    // Related pairs (50)
    ["hydrogen","H"],["helium","He"],["lithium","Li"],["beryllium","Be"],["boron","B"],
    ["carbon","C"],["nitrogen","N"],["oxygen","O"],["fluorine","F"],["neon","Ne"],
    ["sodium","Na"],["magnesium","Mg"],["aluminum","Al"],["silicon","Si"],["phosphorus","P"],
    ["sulfur","S"],["chlorine","Cl"],["argon","Ar"],["potassium","K"],["calcium","Ca"],
    ["Einstein","relativity"],["Newton","gravity"],["Darwin","evolution"],["Pasteur","pasteurization"],["Curie","radioactivity"],
    ["Tesla","electricity"],["Edison","light bulb"],["Bell","telephone"],["Wright","airplane"],["Marconi","radio"],
    ["Mendel","genetics"],["Watson","DNA"],["Crick","DNA"],["Fleming","penicillin"],["Salk","polio vaccine"],
    ["Hubble","telescope"],["Galileo","telescope"],["Copernicus","heliocentrism"],["Kepler","planetary motion"],["Brahe","astronomy"],
    ["Lavoisier","chemistry"],["Mendeleev","periodic table"],["Boyle","gas law"],["Avogadro","mole"],["Dalton","atomic theory"],
    ["Maxwell","electromagnetism"],["Faraday","electromagnetic induction"],["Volta","battery"],["Ampere","electric current"],["Ohm","resistance"],
    ["Joule","energy"],["Watt","power"],["Kelvin","temperature"],["Celsius","temperature"],["Fahrenheit","temperature"],
    // Unrelated pairs (50)
    ["hydrogen","He"],["helium","Li"],["lithium","Be"],["beryllium","B"],["boron","C"],
    ["carbon","N"],["nitrogen","O"],["oxygen","F"],["fluorine","Ne"],["neon","Na"],
    ["sodium","Mg"],["magnesium","Al"],["aluminum","Si"],["silicon","P"],["phosphorus","S"],
    ["sulfur","Cl"],["chlorine","Ar"],["argon","K"],["potassium","Ca"],["calcium","H"],
    ["Einstein","gravity"],["Newton","relativity"],["Darwin","pasteurization"],["Pasteur","evolution"],["Curie","light bulb"],
    ["Tesla","telephone"],["Edison","electricity"],["Bell","airplane"],["Wright","radio"],["Marconi","genetics"],
    ["Mendel","DNA"],["Watson","penicillin"],["Crick","polio vaccine"],["Fleming","telescope"],["Salk","heliocentrism"],
    ["Hubble","planetary motion"],["Galileo","astronomy"],["Copernicus","chemistry"],["Kepler","periodic table"],["Brahe","gas law"],
    ["Lavoisier","mole"],["Mendeleev","atomic theory"],["Boyle","electromagnetism"],["Avogadro","electromagnetic induction"],["Dalton","battery"],
    ["Maxwell","electric current"],["Faraday","resistance"],["Volta","energy"],["Ampere","power"],["Ohm","temperature"],
    ["Joule","temperature"],["Watt","temperature"],["Kelvin","temperature"],["Celsius","temperature"],["Fahrenheit","temperature"]
  ]
};

// Extended format combinations for all 10 number formats
export const formatCombinations = [
  { name: "Arabic-Word", formats: ["arabic", "word"] },
  { name: "Arabic-Roman", formats: ["arabic", "roman"] },
  { name: "Arabic-Binary", formats: ["arabic", "binary"] },
  { name: "Arabic-Hexadecimal", formats: ["arabic", "hexadecimal"] },
  { name: "Arabic-Scientific", formats: ["arabic", "scientific"] },
  { name: "Arabic-Fraction", formats: ["arabic", "fraction"] },
  { name: "Arabic-Ordinal", formats: ["arabic", "ordinal"] },
  { name: "Arabic-Percentage", formats: ["arabic", "percentage"] },
  { name: "Arabic-Tally", formats: ["arabic", "tally"] },
  { name: "Word-Roman", formats: ["word", "roman"] },
  { name: "Word-Binary", formats: ["word", "binary"] },
  { name: "Word-Hexadecimal", formats: ["word", "hexadecimal"] },
  { name: "Word-Scientific", formats: ["word", "scientific"] },
  { name: "Word-Fraction", formats: ["word", "fraction"] },
  { name: "Word-Ordinal", formats: ["word", "ordinal"] },
  { name: "Word-Percentage", formats: ["word", "percentage"] },
  { name: "Word-Tally", formats: ["word", "tally"] },
  { name: "Roman-Binary", formats: ["roman", "binary"] },
  { name: "Roman-Hexadecimal", formats: ["roman", "hexadecimal"] },
  { name: "Roman-Scientific", formats: ["roman", "scientific"] },
  { name: "Roman-Fraction", formats: ["roman", "fraction"] },
  { name: "Roman-Ordinal", formats: ["roman", "ordinal"] },
  { name: "Roman-Percentage", formats: ["roman", "percentage"] },
  { name: "Roman-Tally", formats: ["roman", "tally"] },
  { name: "Binary-Hexadecimal", formats: ["binary", "hexadecimal"] },
  { name: "Binary-Scientific", formats: ["binary", "scientific"] },
  { name: "Binary-Fraction", formats: ["binary", "fraction"] },
  { name: "Binary-Ordinal", formats: ["binary", "ordinal"] },
  { name: "Binary-Percentage", formats: ["binary", "percentage"] },
  { name: "Binary-Tally", formats: ["binary", "tally"] },
  { name: "Hexadecimal-Scientific", formats: ["hexadecimal", "scientific"] },
  { name: "Hexadecimal-Fraction", formats: ["hexadecimal", "fraction"] },
  { name: "Hexadecimal-Ordinal", formats: ["hexadecimal", "ordinal"] },
  { name: "Hexadecimal-Percentage", formats: ["hexadecimal", "percentage"] },
  { name: "Hexadecimal-Tally", formats: ["hexadecimal", "tally"] },
  { name: "Scientific-Fraction", formats: ["scientific", "fraction"] },
  { name: "Scientific-Ordinal", formats: ["scientific", "ordinal"] },
  { name: "Scientific-Percentage", formats: ["scientific", "percentage"] },
  { name: "Scientific-Tally", formats: ["scientific", "tally"] },
  { name: "Fraction-Ordinal", formats: ["fraction", "ordinal"] },
  { name: "Fraction-Percentage", formats: ["fraction", "percentage"] },
  { name: "Fraction-Tally", formats: ["fraction", "tally"] },
  { name: "Ordinal-Percentage", formats: ["ordinal", "percentage"] },
  { name: "Ordinal-Tally", formats: ["ordinal", "tally"] },
  { name: "Percentage-Tally", formats: ["percentage", "tally"] }
];

// Extended level time limits in milliseconds (1-50 levels)
export const levelTimes = {
  1: 2000, 2: 1800, 3: 1600, 4: 1400, 5: 1200,
  6: 1100, 7: 1000, 8: 900, 9: 800, 10: 700,
  11: 600, 12: 500, 13: 400, 14: 350, 15: 300,
  16: 250, 17: 200, 18: 150, 19: 100, 20: 50,
  21: 45, 22: 40, 23: 35, 24: 30, 25: 25,
  26: 20, 27: 18, 28: 16, 29: 14, 30: 12,
  31: 10, 32: 9, 33: 8, 34: 7, 35: 6,
  36: 5, 37: 4, 38: 3, 39: 2, 40: 1,
  41: 1, 42: 1, 43: 1, 44: 1, 45: 1,
  46: 1, 47: 1, 48: 1, 49: 1, 50: 1
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
