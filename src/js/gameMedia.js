const gameMedia = [
    /** PaperDoll **/
    {key: "", root: "pics/PaperDoll", media: '.png'},

    {key: "paperDoll.head.eyes", root: "pics/PaperDoll/Head/eyes", variant: {base: '', variants: ['blue', 'brown', 'green', 'grey'], ext: 'png'}},
    {key: "paperDoll.head.hair.chest", root: "pics/PaperDoll/Head/Hair", variant: {base: 'HairChest', variants: ['Blonde', 'Brunette', 'Red'], ext: 'png'}},
    {key: "paperDoll.head.hair.long", root: "pics/PaperDoll/Head/Hair", variant: {base: 'HairLong', variants: ['Blonde', 'Brunette', 'Red'], ext: 'png'}},
    {key: "paperDoll.head.hair.short", root: "pics/PaperDoll/Head/Hair", variant: {base: 'HairShort', variants: ['Blonde', 'Brunette', 'Red'], ext: 'png'}},
    {key: "paperDoll.head.hair.shoulders", root: "pics/PaperDoll/Head/Hair", variant: {base: 'HairShoulders', variants: ['Blonde', 'Brunette', 'Red'], ext: 'png'}},

    {key: "paperDoll.body.upper.breast", root: "pics/PaperDoll/UpperBody/Chest", variant: {base: 'breast', variants: ['A', 'B', 'C', 'D'], ext: 'png'}},

    /** PaperDoll Wearables **/
    {key: "paperDoll.head.neck.accessor", root: "pics/PaperDoll/Head/Neck", variant: {base: '', variants: ['', 'choker', 'dogCollar'], ext: 'png'}},

    {key: "paperDoll.body.lower.buttPlug", root: "pics/PaperDoll/LowerBody/ButtPlug", variant: {base: '', variants: ['', 'TailButtPlug'], ext: 'png'}},
    {key: "paperDoll.body.lower.panties.defaultPanties", root: "pics/PaperDoll/LowerBody/Panties", media: 'defaultPanties.png'},
    {key: "paperDoll.body.lower.jeans", root: "pics/PaperDoll/LowerBody/LowerBodyClothes", media: 'Jeans.jpg'},
    {key: "paperDoll.body.lower.schoolSkirt", root: "pics/PaperDoll/LowerBody/LowerBodyClothes", media: 'School skirt.png'},

    // todo should refactor to legs or something?
    {key: "paperDoll.body.lower.stockings", root: "pics/PaperDoll/LowerBody/Stockings", media: 'Stockings.png'},
    {key: "paperDoll.body.lower.shortSocks", root: "pics/PaperDoll/LowerBody/Stockings", media: 'Short socks.png'},

    /** PaperDoll Feet **/
    {key: "paperDoll.body.feet.trainers", root: "pics/PaperDoll/LowerBody/Shoes", media: 'Trainers.png'},
    {key: "paperDoll.body.feet.schoolShoes", root: "pics/PaperDoll/LowerBody/Shoes", media: 'School shoes.png'},

    {key: "paperDoll.body.upper.bra", root: "pics/PaperDoll/UpperBody/Bra", variant: {base: 'DefaultBra', variants: ['', 'A', 'B', 'C', 'D'], ext: 'png'}},
    {key: "paperDoll.body.upper.nippleRings", root: "pics/PaperDoll/UpperBody/Chest", variant: {base: 'NippleRings', variants: ['', 'A', 'B', 'C', 'D'], ext: 'png'}},

    {key: "paperDoll.body.upper.eveningDress", root: "pics/PaperDoll/UpperBody/EveningDress", variant: {base: 'EveningDress', variants: ['A', 'B', 'C', 'D'], ext: 'png'}},
    {key: "paperDoll.body.upper.schoolUniform", root: "pics/PaperDoll/UpperBody/schoolUniform", variant: {base: 'schoolUniform', variants: ['A', 'B', 'C', 'D'], ext: 'png'}},
    {key: "paperDoll.body.upper.homeTShirt", root: "pics/PaperDoll/UpperBody/MainClothes", variant: {base: 'Home t-shirt', variants: ['a', 'b', 'c', 'd'], ext: 'png'}},
    {key: "paperDoll.body.upper.officeSuit", root: "pics/PaperDoll/UpperBody/MainClothes", variant: {base: 'Office suit', variants: ['a', 'b', 'c', 'd'], ext: 'png'}},
    {key: "paperDoll.body.upper.usualClothes", root: "pics/PaperDoll/UpperBody/MainClothes", variant: {base: 'Usual clothes', variants: ['a', 'b', 'c', 'd'], ext: 'png'}},

    {key: "books.DaddyMe", "media": ["pics/books/DaddyMe.jpg"]},

    {key: "appearance.anal.hole", root: "pics/appearance/anal/hole/", range: {min: 1, max: 3, ext: 'jpg'}},
    {key: "appearance.anal.developed", root: "pics/appearance/anal/developed/", range: {min: 1, max: 5, ext: 'jpg'}},
    {key: "appearance.anal.small", root: "pics/appearance/anal/small/", range: {min: 1, max: 3, ext: 'jpg'}},
    {key: "appearance.anal.virgin", root: "pics/appearance/anal/virgin/", range: {min: 1, max: 3, ext: 'jpg'}},

    {key: "appearance.pussy.hole", root: "pics/appearance/pussy/hole/", range: {min: 1, max: 5, ext: 'jpg'}},
    {key: "appearance.pussy.large", root: "pics/appearance/pussy/large/", range: {min: 1, max: 4, ext: 'jpg'}},
    {key: "appearance.pussy.medium", root: "pics/appearance/pussy/medium/", range: {min: 1, max: 5, ext: 'jpg'}},
    {key: "appearance.pussy.small", root: "pics/appearance/pussy/small/", range: {min: 1, max: 8, ext: 'jpg'}},
    {key: "appearance.pussy.virgin", root: "pics/appearance/pussy/virgin/", range: {min: 1, max: 6, ext: 'jpg'}},

    {key: "appearance.mouth.pro", root: "pics/appearance/mouth/", media: 'pro.jpg'},
    {key: "appearance.mouth.deepthroat", root: "pics/appearance/mouth/", media: 'deepthroat.jpg'},
    {key: "appearance.mouth.experienced", root: "pics/appearance/mouth/", media: 'experienced.jpg'},
    {key: "appearance.mouth.somewhat_experienced", root: "pics/appearance/mouth/", media: 'somewhat_experienced.jpg'},
    {key: "appearance.mouth.inexperienced", root: "pics/appearance/mouth/", media: 'inexperienced.jpg'},
    {key: "appearance.mouth.chaste", root: "pics/appearance/mouth/", media: 'chaste.jpg'},

    // selfie pics

    {key: "appearance.selfie.bathroom.ass", root: "pics/selfie/bathroom/ass", range: {min: 0, max: 9, ext: 'jpg'}},
    {key: "appearance.selfie.bathroom.lingerie", root: "pics/selfie/bathroom/lingerie", range: {min: 0, max: 3, ext: 'jpg'}},
    {key: "appearance.selfie.bathroom.naked", root: "pics/selfie/bathroom/naked", range: {min: 0, max: 10, ext: 'jpg'}},
    {key: "appearance.selfie.bathroom.plain", root: "pics/selfie/bathroom/plain", range: {min: 0, max: 0, ext: 'jpg'}},
    {key: "appearance.selfie.bathroom.tits", root: "pics/selfie/bathroom/tits", range: {min: 0, max: 7, ext: 'jpg'}},

    {key: "appearance.selfie.beach", root: "pics/selfie/beach", range: {min: 0, max: 3, ext: 'jpg'}},

    {key: "appearance.selfie.ahegao", root: "pics/selfie/ahegao", range: {min: 0, max: 7, start: 'ahegao', ext: 'jpg'}},
    {key: "appearance.selfie.banana", root: "pics/selfie/banana", range: {min: 0, max: 5, start: 'banana', ext: 'jpg'}},
    {key: "appearance.selfie.bottomless", root: "pics/selfie/bottomless", range: {min: 0, max: 5, start: 'bottomless', ext: 'jpg'}},
    {key: "appearance.selfie.bra", root: "pics/selfie/bra", range: {min: 0, max: 0, start: 'bra', ext: 'jpg'}},
    {key: "appearance.selfie.breasts", root: "pics/selfie/breasts", range: {min: 0, max: 26, start: 'breasts', ext: 'jpg'}},
    {key: "appearance.selfie.butt", root: "pics/selfie/butt", range: {min: 0, max: 6, start: 'butt', ext: 'jpg'}},
    {key: "appearance.selfie.butt_plug", root: "pics/selfie/butt_plug", range: {min: 0, max: 6, start: 'butt_plug', ext: 'jpg'}},
    {key: "appearance.selfie.buttpanties", root: "pics/selfie/buttpanties", range: {min: 0, max: 8, start: 'buttpanties', ext: 'jpg'}},
    {key: "appearance.selfie.cucumber", root: "pics/selfie/cucumber", range: {min: 0, max: 2, start: 'cucumber', ext: 'jpg'}},
    {key: "appearance.selfie.dildo", root: "pics/selfie/dildo", range: {min: 0, max: 3, start: 'dildo', ext: 'jpg'}},
    {key: "appearance.selfie.masturbation", root: "pics/selfie/masturbation", range: {min: 0, max: 9, start: 'masturbation', ext: 'jpg'}},
    {key: "appearance.selfie.naked_butt", root: "pics/selfie/naked_butt", range: {min: 0, max: 9, start: 'naked_butt', ext: 'jpg'}},
    {key: "appearance.selfie.nude", root: "pics/selfie/nude", range: {min: 0, max: 9, start: 'nude', ext: 'jpg'}},
    {key: "appearance.selfie.onoff", root: "pics/selfie/onoff", range: {min: 0, max: 25, start: 'onoff', ext: 'jpg'}},
    {key: "appearance.selfie.park", root: "pics/selfie/park", range: {min: 0, max: 0, start: 'park', ext: 'jpg'}},
    {key: "appearance.selfie.plain", root: "pics/selfie/plain", range: {min: 0, max: 7, start: 'plain', ext: 'jpg'}},
    {key: "appearance.selfie.pussy", root: "pics/selfie/pussy", range: {min: 0, max: 22, start: 'pussy', ext: 'jpg'}},
    {key: "appearance.selfie.seeThrough", root: "pics/selfie/seeThrough", range: {min: 0, max: 0, ext: 'jpg'}},
    {key: "appearance.selfie.tail_plug", root: "pics/selfie/tail_plug", range: {min: 0, max: 10, start: 'tail_plug', ext: 'jpg'}},
    {key: "appearance.selfie.tongueout", root: "pics/selfie/tongueout", range: {min: 0, max: 3, start: 'tongueout', ext: 'jpg'}},
    {key: "appearance.selfie.underwear", root: "pics/selfie/underwear", range: {min: 0, max: 12, start: 'underwear', ext: 'jpg'}},
    {key: "appearance.selfie.wet", root: "pics/selfie/wet", range: {min: 0, max: 7, start: 'wet', ext: 'jpg'}},

    // wearables
    {key: "wearable.eveningDress", root: "pics/wearable", media: 'EDress.png'},
    {key: "wearable.miniskirt", root: "pics/object", media: 'MSkirt.jpg'},
    {key: "wearable.officeSuit", root: "pics/object", media: 'OfficeSuit.jpg'},
    {key: "wearable.sportOutfit", root: "pics/object", media: 'SportOutfit.jpg'},
    {key: "wearable.bikini", root: "pics/wearable", media: 'Bikini.jpg'},
    {key: "wearable.shortsAndShirt", root: "pics/object", media: 'shorts_with_tshirt.jpg'},
    {key: "wearable.stockings", root: "pics/object", media: 'Stockings.jpg'},
    {key: "wearable.choker", root: "pics/wearable", media: 'Choker.jpg'},
    {key: "wearable.plainBlackBra", root: "pics/look/lingerie/bra", media: 'default_bra.jpg'},
    {key: "wearable.plainBlackPanties", root: "pics/look/lingerie/panties", media: 'default_panties.jpg'},
    {key: "wearable.blackMiniGString", root: "pics/look/lingerie/panties", media: 'transparentBlackMiniGString.jpg'},
    {key: "wearable.anal_plug", root: "pics/wearable", media: 'BPlug.jpg'},
    {key: "wearable.anal_tailplug", root: "pics/wearable", media: 'TBPlug.jpg'},
    {key: "wearable.nipple_rings", root: "pics/object", media: 'NPiercing.jpg'},
    {key: "wearable.nipple_rings", root: "pics/object", media: 'NPiercing.jpg'},
    {key: "wearable.schoolUniform", root: "pics/object", media: 'SchoolUniform.jpg'},
    {key: "wearable.homeTShirt", root: "pics/PaperDoll/UpperBody/MainClothes", media: 'Home t-shirta.png'},
    {key: "wearable.usualClothes", root: "pics/object/", media: 'UClothes.jpg'},
    {key: "wearable.jeans", root: "pics/PaperDoll/LowerBody/LowerBodyClothes", media: 'Jeans.jpg'},
    {key: "wearable.schoolSkirt", root: "pics/PaperDoll/LowerBody/LowerBodyClothes", media: 'School skirt.png'},
    {key: "wearable.shortSocks", root: "pics/PaperDoll/LowerBody/Stockings", media: 'Short socks.png'},
    {key: "wearable.trainers", root: "pics/PaperDoll/LowerBody/Shoes", media: 'Trainers.png'},
    {key: "wearable.schoolShoes", root: "pics/PaperDoll/LowerBody/Shoes", media: 'School shoes.png'},
    {key: "wearable.plainGoldRing", root: "pics/object", media: 'PGRing.jpg'},

    // objects
    {key: "object.dildo", root: "pics/object", media: 'Dildo.jpg'},
    {key: "object.gun", root: "pics/object", media: 'Gun.jpg'},
    {key: "object.laptop", root: "pics/object", media: 'Laptop.jpg'},
    {key: "object.webcam", root: "pics/personal_items", media: 'webcam.jpg'},
    {key: "object.makeup_kit", root: "pics/personal_items", media: 'cosmetics.jpg'},
    {key: "object.lipstick", root: "pics/personal_items/lipsticks", variant: {base: '', variants: ['red', 'black', 'brown', 'violet', 'pink'], ext: 'jpg'}},
    {key: "object.lipbalm", root: "pics/personal_items", media: 'lipbalm.jpg'},
    {key: "object.birth_control_pills", root: "pics/personal_items", media: 'birth_control_pills.jpg'},
    {key: "object.tampons", root: "pics/personal_items", media: 'tampons.jpg'},
    {key: "object.vitamins", root: "pics/personal_items", media: 'vitamins.jpg'},
    {key: "object.pregnancy_test", root: "pics/personal_items", media: 'pregnancy_test.jpg'},
    {key: "object.shampoo", root: "pics/personal_items", media: 'shampoo.jpg'},
    {key: "object.razors", root: "pics/personal_items", media: 'razors.jpg'},
]

window._gameMedia = gameMedia
