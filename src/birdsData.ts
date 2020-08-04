export const stepsArray = [
  'General',
  'Passeridae',
  'Forestbirds',
  'Songbirds',
  'Predators',
  'Seabirds',
];

export type BirdData = {
  id: number;
  name: string;
  species: string;
  link: string;
  description: string;
  image: string;
  audio: string;
};

export const birdsData = [
  [
    {
      id: 1,
      name: 'Raven',
      species: 'Corvus corax',
      link: 'https://en.wikipedia.org/wiki/Common_raven',
      description:
        'A mature common raven ranges between 54 and 67 cm long, with a wingspan of 115 to 150 cm. Common ravens have a wide range of vocalizations. Like other corvids, ravens can mimic sounds from their environment, including human speech.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
    },
    {
      id: 2,
      name: 'Crane',
      species: 'Grus grus',
      link: 'https://en.wikipedia.org/wiki/Common_crane',
      description:
        'The common crane is a large, stately bird and a medium-sized crane. It is 100–130 cm long with a 180–240 cm wingspan. The common crane is a fairly social bird while not breeding. Flocks of up to 400 birds may be seen flying together during migration.',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
    },
    {
      id: 3,
      name: 'Swallow',
      species: 'Delichon urbicum',
      link: 'https://en.wikipedia.org/wiki/Swallow',
      description:
        'Swallows have two foveae in each eye, giving them sharp lateral and frontal vision to help track prey. The swallows generally forage for prey on the wing, but they on occasion snap prey off branches or on the ground. The flight may be fast and involve a rapid succession of turns and banks when actively chasing fast-moving prey.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
    },
    {
      id: 4,
      name: 'Nightjar',
      species: 'Caprimulgus europaeus',
      link: 'https://en.wikipedia.org/wiki/European_nightjar',
      description:
        "The preferred habitat is dry, open country with some trees and small bushes, such as heaths, forest clearings or newly planted woodland. The male European nightjar's song is a sustained churring trill, given continuously for up to 10 minutes with occasional shifts of speed or pitch.",
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
    },
    {
      id: 5,
      name: 'Сuckoo',
      species: 'Cuculus canorus',
      link: 'https://en.wikipedia.org/wiki/Common_cuckoo',
      description:
        "The male's song, goo-ko, is usually given from an open perch. The common cuckoo is an obligate brood parasite; it lays its eggs in the nests of other birds.",
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
    },
    {
      id: 6,
      name: 'Titmice',
      species: 'Parus major',
      link: 'https://en.wikipedia.org/wiki/Great_tit',
      description:
        'Tits are active, noisy, and social birds. They are territorial during the breeding season and often join mixed-species feeding flocks during the nonbreeding season. The tits are highly adaptable, and after the corvids (crows and jays) and parrots, amongst the most intelligent of all birds.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Sparrow',
      species: 'Passer domesticus',
      link: 'https://en.wikipedia.org/wiki/House_sparrow',
      description:
        'The Old World sparrows are indigenous to Europe, Africa and Asia. In the Americas, Australia, and other parts of the world, settlers imported some species which quickly naturalised, particularly in urban and degraded areas.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3',
    },
    {
      id: 2,
      name: 'Rook',
      species: 'Corvus frugilegus',
      link: 'https://en.wikipedia.org/wiki/Rook_(bird)',
      description:
        'Rooks show the ability to work together to receive a reward. In order to receive a reward, multiple rooks had to pull strings along the lid of a box in order for it to move and them to reach the reward.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3',
    },
    {
      id: 3,
      name: 'Jackdaw',
      species: 'Coloeus monedula',
      link: 'https://en.wikipedia.org/wiki/Western_jackdaw',
      description:
        'Western jackdaws are voluble birds. The main call, frequently given in flight, is a metallic and squeaky chyak-chyak or kak-kak. This is a contact or greeting call.  also have a hoarse, drawn-out alarm call, arrrrr or kaaaarr, used when warning of predators or when mobbing them.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3',
    },
    {
      id: 4,
      name: 'Thrush',
      species: 'Turdus philomelos',
      link: 'https://en.wikipedia.org/wiki/Song_thrush',
      description:
        'The song thrush breeds in forests, gardens and parks, and is partially migratory with many birds wintering in southern Europe, North Africa and the Middle East',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3',
    },
    {
      id: 5,
      name: 'Magpie',
      species: 'Pica pica',
      link: 'https://en.wikipedia.org/wiki/Eurasian_magpie',
      description:
        'The Eurasian magpie is one of the most intelligent birds, and it is believed to be one of the most intelligent of all non-human animals. It is the only bird known to pass the mirror test, along with very few other non-avian species.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3',
    },
    {
      id: 6,
      name: 'Jay',
      species: 'Garrulus glandarius',
      link: 'https://en.wikipedia.org/wiki/Eurasian_jay',
      description:
        'Its usual call is the alarm call which is a harsh, rasping screech and is used upon sighting various predatory animals, but the jay is well known for its mimicry, often sounding so like a different species that it is virtually impossible to distinguish its true identity unless the jay is seen.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Finch',
      species: 'Fringilla coelebs',
      link: 'https://en.wikipedia.org/wiki/Common_chaffinch',
      description:
        'Finches helped Charles Darwin understand the way that natural environments affect the evolution and adaptation of a species. Originally, Darwin did not discern that all the finches were the same species, as they looked different.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Crossbill',
      species: 'Loxia curvirostra',
      link: 'https://en.wikipedia.org/wiki/Red_crossbill',
      description:
        'Crossbills are characterized by the mandibles crossing at their tips, which gives the group its English name. Using their crossed mandibles for leverage, crossbills are able to efficiently separate the scales of conifer cones and extract the seeds on which they feed.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3',
    },
    {
      id: 3,
      name: 'Streptopelia',
      species: 'Streptopelia turtur',
      link: 'https://en.wikipedia.org/wiki/Streptopelia',
      description:
        'Streptopelia is a genus of birds in the pigeon and dove family Columbidae. These are mainly slim, small to medium-sized species.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3',
    },
    {
      id: 4,
      name: 'Dendrocopos',
      species: 'Dendrocopos major',
      link: 'https://en.wikipedia.org/wiki/Dendrocopos',
      description:
        'Its natural habitats are subtropical or tropical dry forest, subtropical or tropical moist lowland forest, and subtropical or tropical moist montane forest.',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3',
    },
    {
      id: 5,
      name: 'Hoopoe',
      species: 'Upupa epops',
      link: 'https://en.wikipedia.org/wiki/Hoopoe',
      description:
        'The hoopoe has two basic requirements of its habitat: bare or lightly vegetated ground on which to forage and vertical surfaces with cavities (such as trees, cliffs or even walls, nestboxes, haystacks, and abandoned burrows) in which to nest.',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3',
    },
    {
      id: 6,
      name: 'Swift',
      species: 'Apus apus',
      link: 'https://en.wikipedia.org/wiki/Common_swift',
      description:
        'Except when nesting, swifts spend their lives in the air, living on the insects caught in flight; they drink, feed, and often mate and sleep on the wing. Some individuals go 10 months without landing. No other bird spends as much of its life in flight. Their maximum horizontal flying speed is 111.6 km/h. Over a lifetime they can cover millions of kilometers.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Skylark',
      species: 'Alauda arvensis',
      link: 'https://en.wikipedia.org/wiki/Eurasian_skylark',
      description:
        'The female Eurasian skylark builds an open nest in a shallow depression on open ground well away from trees, bushes and hedges. She lays three to five eggs which she incubates for around 11 days.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3',
    },
    {
      id: 2,
      name: 'Nightingale',
      species: 'Luscinia luscinia',
      link: 'https://en.wikipedia.org/wiki/Thrush_nightingale',
      description:
        'The male\'s About this soundsong  is loud, with a range of whistles, trills and clicks and includes a flute-like "pioo" with a pure bell-like tone. It is sometimes interrupted by a rasping "dserr" sound and is rather solemn as compared to that of the nightingale.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3',
    },
    {
      id: 3,
      name: 'Starling',
      species: 'Sturnus vulgaris',
      link: 'https://en.wikipedia.org/wiki/Common_starling',
      description:
        'Like most terrestrial starlings the common starling moves by walking or running, rather than hopping. Their flight is quite strong and direct; their triangular-shaped wings beat very rapidly, and periodically the birds glide for a short way without losing much height before resuming powered flight.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3',
    },
    {
      id: 4,
      name: 'Oriole',
      species: 'Oriolus oriolus',
      link: 'https://en.wikipedia.org/wiki/Oriolus',
      description:
        'It is difficult for humans to see the Oriole, as it lives high in the trees. The Oriole is not only very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3',
    },
    {
      id: 5,
      name: 'Waxwing',
      species: 'Bombycilla garrulus',
      link: 'https://en.wikipedia.org/wiki/Waxwing',
      description:
        'Waxwings are not long-distance migrants, but move nomadically outside the breeding season. Waxwings mostly feed on fruit, but at times of year when fruits are unavailable they feed on sap, buds, flowers and insects.',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3',
    },
    {
      id: 6,
      name: 'Goldfinch',
      species: 'Carduelis carduelis',
      link: 'https://en.wikipedia.org/wiki/European_goldfinch',
      description:
        'The breeding male has a red face and a black-and-white head. The back and flanks are buff or chestnut brown. The black wings have a broad yellow bar.',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Eagle',
      species: 'Aquila nipalensis',
      link: 'https://en.wikipedia.org/wiki/Steppe_eagle',
      description:
        'The steppe eagle is a large, bulky and robust-looking eagle. It is mainly dark brown in colour with a longish but very thick neck and a relatively small head that nonetheless features a strong bill and long gape-line. It appears long-winged and has a longish and rather rounded tail and markedly well-feathered legs.',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3',
    },
    {
      id: 2,
      name: 'Kite',
      species: 'Milvus migrans',
      link: 'https://en.wikipedia.org/wiki/Black_kite',
      description:
        'They spend much time soaring and gliding in thermals in search of food. Their angled wing and distinctive forked tail make them easy to identify. They are also vociferous with a shrill whinnying call. This kite is widely distributed through the temperate and tropical parts of Eurasia and parts of Australasia and Oceania, with the temperate region populations tending to be migratory.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3',
    },
    {
      id: 3,
      name: 'Harrier',
      species: 'Circus cyaneus',
      link: 'https://en.wikipedia.org/wiki/Hen_harrier',
      description:
        'In some parts of Europe people believed that seeing a harrier perched on a house was a sign that three people would die. Unlike many raptors, hen harriers have historically been favorably regarded by farmers because they eat predators of quail eggs and mice that damage crops.',
      image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3',
    },
    {
      id: 4,
      name: 'Falcon',
      species: 'Falco peregrinus',
      link: 'https://en.wikipedia.org/wiki/Peregrine_falcon',
      description:
        'Its diet consists almost exclusively of medium-sized birds, the peregrine will occasionally hunt small mammals, small reptiles, or even insects. the highest measured speed of a peregrine falcon is 389 km/h (242 mph).',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3',
    },
    {
      id: 5,
      name: 'Hawk',
      species: 'Accipiter gentilis',
      link: 'https://en.wikipedia.org/wiki/Northern_goshawk',
      description:
        'Northern goshawks normally only vocalize during courtship or the nesting season. Adult goshawks may chatter a repeated note, varying in speed and volume based on the context. When calling from a perch, birds often turn their heads slowly from side to side, producing a ventriloquial effect.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3',
    },
    {
      id: 6,
      name: 'Eagle-owl',
      species: 'Bubo bubo',
      link: 'https://en.wikipedia.org/wiki/Eurasian_eagle-owl',
      description:
        'The territorial song, which can be heard at great distance, is a deep resonant ooh-hu with emphasis on the first syllable for the male, and a more high-pitched and slightly more drawn-out uh-hu for the female. It is not uncommon for a pair to perform an antiphonal duet.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Albatross',
      species: 'Diomedea exulans',
      link: 'https://en.wikipedia.org/wiki/Great_albatross',
      description:
        "The great albatrosses range across the Southern Ocean, and nest (for the most part) on isolated oceanic islands. The wandering albatrosses nest on islands around the Southern Ocean, from the Atlantic Ocean (South Georgia and Tristan da Cunha), to the Indian Ocean and New Zealand's Subantarctic islands.",
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3',
    },
    {
      id: 2,
      name: 'Booby',
      species: 'Sula nebouxii',
      link: 'https://en.wikipedia.org/wiki/Booby',
      description:
        'The blue-footed booby is on average 81 cm (32 in) long and weighs 1.5 kg (3.3 lb), with the female being slightly larger than the male. Its wings are long, pointed, and brown in color.',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3',
    },
    {
      id: 3,
      name: 'Sooty shearwater',
      species: 'Puffinus griseus',
      link: 'https://en.wikipedia.org/wiki/Sooty_shearwater',
      description:
        'Sooty shearwaters are 40–51 cm in length with a 94– to 110-cm wingspan. It has the typical "shearing" flight of the genus, dipping from side to side on stiff wings with few wing beats, the wingtips almost touching the water.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3',
    },
    {
      id: 4,
      name: 'Pelican',
      species: 'Pelecanus',
      link: 'https://en.wikipedia.org/wiki/Pelican',
      description:
        'Pelicans frequent inland and coastal waters, where they feed principally on fish, catching them at or near the water surface. They are gregarious birds, travelling in flocks, hunting cooperatively, and breeding colonially.',
      image:
        'https://image.shutterstock.com/image-photo/great-white-eastern-pelican-rosy-600w-688823338.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3',
    },
    {
      id: 5,
      name: 'Penguin',
      species: 'Aptenodytes forsteri',
      link: 'https://en.wikipedia.org/wiki/Emperor_penguin',
      description:
        'As the species has no fixed nest sites that individuals can use to locate their own partner or chick, emperor penguins must rely on vocal calls alone for identification. They use a complex set of calls that are critical to individual recognition between parents, offspring and mates, displaying the widest variation in individual calls of all penguins.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3',
    },
    {
      id: 6,
      name: 'Gull',
      species: 'Larus argentatus',
      link: 'https://en.wikipedia.org/wiki/Gull',
      description:
        'Gulls are typically medium to large birds, usually grey or white, often with black markings on the head or wings. They typically have harsh wailing or squawking calls; stout, longish bills; and webbed feet.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3',
    },
  ],
];
