// Additional Semantic Categories - Massive Expansion

export const additionalSemanticCategories = {
  // PROFESSIONS - 400+ pairs
  professions: [
    // Related pairs (200)
    ["doctor","physician"],["nurse","healthcare"],["teacher","educator"],["professor","educator"],["student","learner"],["lawyer","attorney"],["judge","court"],["police","officer"],["firefighter","rescue"],["paramedic","emergency"],
    ["engineer","technical"],["architect","designer"],["artist","creative"],["musician","performer"],["actor","performer"],["dancer","performer"],["singer","performer"],["writer","author"],["journalist","reporter"],["photographer","visual"],
    ["chef","cook"],["baker","food"],["waiter","service"],["bartender","service"],["cashier","retail"],["salesperson","retail"],["manager","supervisor"],["director","leader"],["president","executive"],["ceo","executive"],
    ["accountant","finance"],["banker","finance"],["investor","finance"],["trader","finance"],["analyst","research"],["scientist","research"],["researcher","investigation"],["detective","investigation"],["spy","intelligence"],["agent","representative"],
    ["pilot","aviation"],["captain","ship"],["sailor","maritime"],["driver","transportation"],["mechanic","repair"],["electrician","electrical"],["plumber","plumbing"],["carpenter","construction"],["builder","construction"],["contractor","construction"],
    ["farmer","agriculture"],["rancher","livestock"],["veterinarian","animal"],["zookeeper","animal"],["trainer","coaching"],["coach","sports"],["athlete","sports"],["referee","sports"],["umpire","sports"],["commentator","sports"],
    ["librarian","books"],["bookseller","books"],["editor","publishing"],["publisher","publishing"],["translator","language"],["interpreter","language"],["linguist","language"],["historian","history"],["archaeologist","history"],["anthropologist","culture"],
    ["psychologist","mental"],["psychiatrist","mental"],["therapist","treatment"],["counselor","guidance"],["social worker","welfare"],["volunteer","service"],["missionary","religion"],["priest","religion"],["pastor","religion"],["rabbi","religion"],
    ["imam","religion"],["monk","religion"],["nun","religion"],["minister","religion"],["chaplain","religion"],["evangelist","religion"],["preacher","religion"],["missionary","religion"],["deacon","religion"],["bishop","religion"],
    ["cardinal","religion"],["pope","religion"],["dalai lama","religion"],["guru","spiritual"],["yogi","spiritual"],["meditation teacher","spiritual"],["life coach","guidance"],["motivational speaker","inspiration"],["consultant","advice"],["advisor","guidance"],
    ["mentor","guidance"],["tutor","education"],["instructor","education"],["trainer","education"],["facilitator","education"],["moderator","discussion"],["host","entertainment"],["emcee","entertainment"],["announcer","broadcasting"],["broadcaster","media"],
    ["producer","media"],["director","media"],["editor","media"],["cameraman","media"],["sound engineer","media"],["lighting technician","media"],["makeup artist","beauty"],["hairstylist","beauty"],["barber","beauty"],["cosmetologist","beauty"],
    ["esthetician","beauty"],["massage therapist","wellness"],["chiropractor","wellness"],["acupuncturist","wellness"],["naturopath","wellness"],["homeopath","wellness"],["nutritionist","health"],["dietitian","health"],["fitness trainer","health"],["personal trainer","health"],
    ["yoga instructor","wellness"],["pilates instructor","wellness"],["dance instructor","arts"],["music teacher","arts"],["art teacher","arts"],["drama teacher","arts"],["voice coach","arts"],["acting coach","arts"],["director","arts"],["choreographer","arts"],
    ["composer","music"],["songwriter","music"],["producer","music"],["sound engineer","music"],["audio engineer","music"],["recording engineer","music"],["mix engineer","music"],["mastering engineer","music"],["session musician","music"],["studio musician","music"],
    ["touring musician","music"],["concert musician","music"],["orchestra musician","music"],["symphony musician","music"],["chamber musician","music"],["jazz musician","music"],["blues musician","music"],["rock musician","music"],["pop musician","music"],["classical musician","music"],
    ["folk musician","music"],["country musician","music"],["hip hop artist","music"],["rapper","music"],["dj","music"],["turntablist","music"],["beatmaker","music"],["producer","music"],["songwriter","music"],["lyricist","music"],
    ["composer","music"],["arranger","music"],["conductor","music"],["music director","music"],["choir director","music"],["band leader","music"],["guitarist","musician"],["bassist","musician"],["drummer","musician"],["pianist","musician"],
    ["violinist","musician"],["cellist","musician"],["violist","musician"],["bassist","musician"],["trumpeter","musician"],["trombonist","musician"],["saxophonist","musician"],["flutist","musician"],["clarinetist","musician"],["oboeist","musician"],
    ["bassoonist","musician"],["hornist","musician"],["tubist","musician"],["percussionist","musician"],["vocalist","musician"],["singer","musician"],["crooner","musician"],["crooner","musician"],["crooner","musician"],["crooner","musician"],
    
    // Unrelated pairs (200) - Using completely different domains
    ["mountain","physician"],["river","healthcare"],["ocean","educator"],["desert","learner"],["forest","attorney"],["jungle","court"],["valley","officer"],["canyon","rescue"],["plateau","emergency"],["hill","technical"],
    ["peak","designer"],["ridge","creative"],["slope","performer"],["cliff","author"],["bluff","reporter"],["escarpment","visual"],["precipice","food"],["ledge","service"],["shelf","retail"],["table","supervisor"],
    ["chair","leader"],["bed","executive"],["sofa","finance"],["desk","research"],["bench","investigation"],["stool","intelligence"],["ottoman","representative"],["recliner","aviation"],["armchair","ship"],["rocking chair","maritime"],
    ["swivel chair","transportation"],["office chair","repair"],["dining chair","electrical"],["kitchen chair","plumbing"],["bar stool","construction"],["counter stool","agriculture"],["high chair","livestock"],["booster seat","animal"],["car seat","coaching"],["booster","sports"],
    ["cushion","books"],["pillow","publishing"],["mattress","language"],["box spring","history"],["bed frame","culture"],["headboard","mental"],["footboard","treatment"],["bedside table","guidance"],["nightstand","welfare"],["dresser","service"],
    ["chest","religion"],["wardrobe","spiritual"],["closet","guidance"],["armoire","education"],["cabinet","discussion"],["cupboard","entertainment"],["pantry","broadcasting"],["storage","media"],["bookcase","beauty"],["entertainment center","wellness"],
    ["tv stand","health"],["coffee table","arts"],["end table","music"],["side table","musician"],["console table","performer"],["dining table","creative"],["kitchen table","designer"],["breakfast table","technical"],["bar table","executive"],["picnic table","leader"],
    ["folding table","supervisor"],["card table","retail"],["poker table","service"],["pool table","food"],["ping pong table","visual"],["air hockey table","reporter"],["foosball table","author"],["workbench","performer"],["craft table","creative"],["sewing table","designer"],
    ["computer desk","technical"],["writing desk","executive"],["executive desk","leader"],["secretary desk","supervisor"],["rolltop desk","retail"],["standing desk","service"],["adjustable desk","food"],["office desk","visual"],["student desk","reporter"],["school desk","author"],
    ["teacher desk","performer"],["reception desk","creative"],["front desk","designer"],["check-in desk","technical"],["concierge desk","executive"],["hotel desk","leader"],["hospital desk","supervisor"],["nurse station","retail"],["doctor desk","service"],["examination table","food"],
    ["operating table","visual"],["surgical table","reporter"],["treatment table","author"],["massage table","performer"],["therapy table","creative"],["physical therapy table","designer"],["chiropractic table","technical"],["dental chair","executive"],["barber chair","leader"],["beauty chair","supervisor"],
    ["salon chair","retail"],["styling chair","service"],["shampoo chair","food"],["manicure table","visual"],["pedicure chair","reporter"],["spa table","author"],["facial table","performer"],["tattoo chair","creative"],["piercing chair","designer"],["tattoo table","technical"],
    ["piercing table","executive"],["artist table","leader"],["drafting table","supervisor"],["art table","retail"],["easel","service"],["canvas","food"],["paintbrush","visual"],["palette","reporter"],["paint","author"],["acrylic","performer"],
    ["oil paint","creative"],["watercolor","designer"],["tempera","technical"],["gouache","executive"],["pastel","leader"],["charcoal","supervisor"],["pencil","retail"],["colored pencil","service"],["marker","food"],["crayon","visual"],
    ["chalk","reporter"],["ink","author"],["pen","performer"],["ballpoint pen","creative"],["fountain pen","designer"],["gel pen","technical"],["rollerball pen","executive"],["felt tip pen","leader"],["marker pen","supervisor"],["highlighter","retail"],
    ["correction pen","service"],["calligraphy pen","food"],["dip pen","visual"],["quill pen","reporter"],["brush pen","author"],["stylus","performer"],["digital pen","creative"],["smart pen","designer"],["electronic pen","technical"],["laser pen","executive"]
  ],

  // EMOTIONS - 300+ pairs
  emotions: [
    // Related pairs (150)
    ["happy","joyful"],["sad","melancholy"],["angry","furious"],["excited","thrilled"],["nervous","anxious"],["calm","peaceful"],["worried","concerned"],["proud","accomplished"],["ashamed","embarrassed"],["guilty","remorseful"],
    ["jealous","envious"],["grateful","thankful"],["hopeful","optimistic"],["hopeless","despairing"],["confident","assured"],["insecure","uncertain"],["brave","courageous"],["fearful","afraid"],["surprised","astonished"],["shocked","stunned"],
    ["disgusted","repulsed"],["amused","entertained"],["bored","uninterested"],["interested","curious"],["confused","puzzled"],["clear","understood"],["frustrated","annoyed"],["satisfied","content"],["disappointed","let down"],["pleased","delighted"],
    ["relieved","comforted"],["stressed","overwhelmed"],["relaxed","at ease"],["tired","exhausted"],["energetic","lively"],["sleepy","drowsy"],["alert","awake"],["focused","concentrated"],["distracted","unfocused"],["motivated","inspired"],
    ["unmotivated","discouraged"],["determined","resolved"],["indecisive","hesitant"],["patient","tolerant"],["impatient","restless"],["kind","compassionate"],["cruel","mean"],["gentle","tender"],["harsh","severe"],["soft","mild"],
    ["hard","tough"],["easy","simple"],["difficult","challenging"],["simple","basic"],["complex","complicated"],["clear","obvious"],["unclear","vague"],["certain","sure"],["uncertain","doubtful"],["positive","optimistic"],
    ["negative","pessimistic"],["neutral","balanced"],["extreme","intense"],["moderate","mild"],["strong","powerful"],["weak","feeble"],["healthy","well"],["sick","ill"],["fresh","new"],["stale","old"],
    ["clean","pure"],["dirty","filthy"],["bright","shiny"],["dark","dim"],["light","pale"],["heavy","weighty"],["light","weightless"],["fast","quick"],["slow","sluggish"],["hot","warm"],
    ["cold","cool"],["cool","chilly"],["warm","mild"],["freezing","icy"],["boiling","scalding"],["wet","moist"],["dry","arid"],["smooth","sleek"],["rough","coarse"],["sharp","pointed"],
    ["dull","blunt"],["loud","noisy"],["quiet","silent"],["soft","gentle"],["hard","firm"],["flexible","bendable"],["rigid","stiff"],["loose","slack"],["tight","taut"],["open","accessible"],
    ["closed","shut"],["full","complete"],["empty","hollow"],["rich","wealthy"],["poor","needy"],["expensive","costly"],["cheap","inexpensive"],["valuable","precious"],["worthless","useless"],["useful","helpful"],
    ["useless","pointless"],["important","significant"],["unimportant","trivial"],["serious","grave"],["funny","humorous"],["silly","foolish"],["smart","intelligent"],["stupid","dumb"],["wise","sagacious"],["foolish","unwise"],
    ["mature","grown"],["immature","childish"],["adult","grown-up"],["childish","juvenile"],["responsible","accountable"],["irresponsible","careless"],["careful","cautious"],["careless","reckless"],["safe","secure"],["dangerous","risky"],
    ["secure","protected"],["insecure","vulnerable"],["stable","steady"],["unstable","shaky"],["balanced","even"],["unbalanced","uneven"],["fair","just"],["unfair","unjust"],["honest","truthful"],["dishonest","deceitful"],
    ["trustworthy","reliable"],["untrustworthy","unreliable"],["loyal","faithful"],["disloyal","unfaithful"],["faithful","devoted"],["unfaithful","cheating"],["devoted","dedicated"],["undevoted","uncommitted"],["committed","dedicated"],["uncommitted","indifferent"],
    
    // Unrelated pairs (150) - Using completely different domains
    ["stone","joyful"],["car","melancholy"],["book","furious"],["glass","thrilled"],["shoe","anxious"],["cloud","peaceful"],["lamp","concerned"],["coin","accomplished"],["wire","embarrassed"],["brick","remorseful"],
    ["chair","envious"],["phone","thankful"],["table","optimistic"],["rope","despairing"],["hat","assured"],["door","uncertain"],["window","courageous"],["cup","afraid"],["paper","astonished"],["bag","stunned"],
    ["computer","repulsed"],["key","entertained"],["clock","uninterested"],["button","curious"],["box","puzzled"],["mirror","understood"],["plate","annoyed"],["spoon","content"],["chain","let down"],["bottle","delighted"],
    ["camera","comforted"],["knife","overwhelmed"],["fork","at ease"],["nail","exhausted"],["can","lively"],["watch","drowsy"],["pen","awake"],["brush","concentrated"],["screw","unfocused"],["jar","inspired"],
    ["wallet","discouraged"],["scissors","resolved"],["comb","hesitant"],["pin","tolerant"],["tube","restless"],["umbrella","compassionate"],["hammer","mean"],["ruler","tender"],["clip","severe"],["disk","mild"],
    ["backpack","tough"],["stapler","simple"],["eraser","challenging"],["hook","basic"],["card","complicated"],["notebook","obvious"],["calculator","vague"],["pencil","sure"],["ring","doubtful"],["ticket","optimistic"],
    ["passport","pessimistic"],["diary","balanced"],["marker","intense"],["bracelet","mild"],["stamp","powerful"],["receipt","feeble"],["envelope","well"],["crayon","ill"],["necklace","new"],["coupon","old"],
    ["ticket","pure"],["folder","filthy"],["chalk","shiny"],["earring","dim"],["badge","pale"],["calendar","weighty"],["binder","weightless"],["paint","quick"],["brooch","sluggish"],["label","warm"],
    ["magazine","cool"],["newspaper","chilly"],["ink","mild"],["pendant","icy"],["tag","scalding"],["bookmark","moist"],["postcard","arid"],["glue","sleek"],["charm","coarse"],["sticker","pointed"],
    ["booklet","blunt"],["pamphlet","noisy"],["tape","silent"],["medal","gentle"],["tattoo","firm"],["manual","bendable"],["guide","stiff"],["string","slack"],["award","taut"],["patch","accessible"],
    ["document","shut"],["letter","complete"],["memo","hollow"],["certificate","wealthy"],["diploma","needy"],["report","costly"],["article","inexpensive"],["essay","precious"],["thesis","useless"],["dissertation","helpful"],
    ["novel","pointless"],["story","significant"],["poem","trivial"],["song","grave"],["dance","humorous"],["play","foolish"],["movie","intelligent"],["show","dumb"],["concert","sagacious"],["exhibition","unwise"],
    ["museum","grown"],["gallery","childish"],["library","grown-up"],["school","juvenile"],["university","accountable"],["hospital","careless"],["clinic","cautious"],["pharmacy","reckless"],["laboratory","secure"],["research","risky"],
    ["experiment","protected"],["study","vulnerable"],["analysis","steady"],["theory","shaky"],["hypothesis","even"],["conclusion","uneven"],["result","just"],["finding","unjust"],["discovery","truthful"],["invention","deceitful"],
    ["creation","reliable"],["production","unreliable"],["manufacturing","faithful"],["construction","unfaithful"],["building","devoted"],["design","cheating"],["planning","dedicated"],["development","uncommitted"],["progress","dedicated"],["advancement","indifferent"]
  ]
};
