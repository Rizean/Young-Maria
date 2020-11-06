const GAME_ITEMS_V2 = {
    wearable: [
        {
            key: 'eveningDress',
            name: 'Evening dress',
            mediaKey: 'pics/EDress.jpg',
            description: 'Perfect for special events + quite sexy!',
            mediaPaperDollKey: 'paperDoll.body.upper.eveningDress',
            allure: 20,
            obscenity: 5,
            price: 150,
            type: 'body',
        },
    ]
}

const GAME_ITEMS = {
    clothes: {
        eveningDress: {
            name: 'Evening dress',
            image: 'pics/EDress.jpg',
            description: 'Perfect for special events + quite sexy!',
            allure: 20,
            obscenity: 5,
            price: 150,
            type: 'body',
        },
        miniskirt: {
            name: 'Miniskirt',
            image: 'pics/MSkirt.jpg',
            description: 'Very attractive and comfortable!',
            allure: 30,
            obscenity: 10,
            price: 120,
            type: 'body',
        },
        officeSuit: {
            name: 'Office suit',
            image: 'pics/OfficeSuit.jpg',
            description: 'Strict and firm',
            allure: 10,
            obscenity: 5,
            price: 90,
            type: 'body',
        },
        sportOutfit: {
            name: 'Sport outfit',
            image: 'pics/SportOutfit.jpg',
            description: 'You can do sports in it. Not for everyday wear',
            allure: 3,
            obscenity: 0,
            price: 70,
            type: 'body',
        },
        bikini: {
            name: 'Bikini',
            image: 'pics/Bikini.jpg',
            description: 'You can swim in it. Not for everyday wear',
            allure: 20,
            obscenity: 0,
            price: 60,
            type: 'body',
        },
        shortsAndShirt: {
            name: 'Shorts with t-shirt',
            image: 'pics/shorts_with_tshirt.jpg',
            description: 'Very comfortable and open clothing...',
            allure: 30,
            obscenity: 0,
            price: 70,
            type: 'body',
        },
        stockings: {
            name: 'Stockings',
            image: 'pics/Stockings.jpg',
            description: "Sexy as hell, isn't it?",
            allure: 5,
            obscenity: 0,
            price: 80,
            type: 'legs',
        },
    },
    accessories: {
        choker: {
            name: 'Choker',
            image: 'pics/Choker.jpg',
            description: 'Simple and sexy:3',
            allure: 5,
            obscenity: 10,
            price: 40,
            type: 'neck',
        },
    },
    lingerie: {
        plainBlackBra: {
            name: 'Plain Black Bra',
            price: 40,
            image: 'pics/look/lingerie/bra/default_bra.jpg',
            description: 'A plain black bra.',
            allure: 0,
            obscenity: 0,
            type: 'bra',
        },
        plainBlackPanties: {
            name: 'Plain Black Panties',
            price: 30,
            image: 'pics/look/lingerie/panties/default_panties.jpg',
            description: 'A plain black pair of panties.',
            allure: 0,
            obscenity: 0,
            type: 'panties',
        },
        blackMiniGString: {
            name: 'Transparent Mini G-String',
            price: 60,
            image: 'pics/look/lingerie/panties/transparentBlackMiniGString.jpg',
            description: 'A plain black pair of panties.',
            allure: 15,
            obscenity: 5,
            type: 'panties',
        },
        // bras: [
        //     {
        //         name: 'Usual bra',
        //         price: 40,
        //         image: 'pics/usualBra.jpg',
        //     },
        // ],
        // panties: [
        //     {
        //         name: 'Usual panties',
        //         price: 30,
        //         image: 'pics/usualPanties.jpg',
        //     },
        // ],
    },
    erotic_accessories: {
        dildo: {
            name: 'Dildo',
            image: 'pics/Dildo.jpg',
            size: 10,
            price: 40,
            description: 'A plain dildo.',
            color: 'pink',
            use: 'single',
        },
        "anal_plug": {
            name: 'Butt plug',
            image: 'pics/BPlug.jpg',
            description: 'A butt plug, wear everyday.',
            price: 70,
            size: 6,
            allure: 0,
            type: 'back',
            use: 'single',
        },
        "anal_tailplug": {
            name: 'Tail butt plug',
            image: 'pics/TBPlug.jpg',
            description: 'Cute and fluffy.',
            price: 110,
            size: 6,
            allure: 0,
            type: 'back',
            use: 'single',
        },
        "nipple_rings": {
            name: 'Nipple rings',
            image: 'pics/NPiercing.png',
            description: "That's lovely!",
            price: 50,
            allure: 7,
            type: 'body',
            use: 'single',
        },
    },
    gun: {
        name: 'Sig Sauer 9mm',
        image: 'pics/Gun.jpg',
        description: 'This gun will scare away any bad man you might meet!',
        price: 150
    },
    magicTech: {
        laptop: {
            name: 'Laptop',
            image: 'pics/Laptop.png',
            description: 'A must have for teenagers!',
            price: 800,
        },
        webcam: {
            name: 'Web cam',
            image: 'pics/personal_items/webcam.jpg',
            description: 'To chat with your friends and family! And not only... (Requires Laptop)',
            price: 500,
        }
    },
    cosmetics: {
        makeup_kit: {
            name: 'Makeup kit',
            image: 'pics/personal_items/cosmetics.jpg',
            description: 'A set of cosmetics for women who want to look stunning and eye-catching!',
            count: 10,
            price: 300,
            use: 'many',
        },
        red_lipstick: {
            name: 'Red lipstick',
            image: 'pics/personal_items/lipsticks/red.jpg',
            description: 'Red lipstick',
            count: 30,
            price: 130,
            use: 'many',
        },
        black_lipstick: {
            name: 'Black lipstick',
            image: 'pics/personal_items/lipsticks/black.jpg',
            description: 'Black lipstick',
            count: 30,
            price: 130,
            use: 'many',
        },
        brown_lipstick: {
            name: 'Brown lipstick',
            image: 'pics/personal_items/lipsticks/brown.jpg',
            description: 'Brown lipstick',
            count: 30,
            price: 130,
            use: 'many',
        },
        violet_lipstick: {
            name: 'Violet lipstick',
            image: 'pics/personal_items/lipsticks/violet.jpg',
            description: 'Violet lipstick',
            count: 30,
            price: 130,
            use: 'many',
        },
        pink_lipstick: {
            name: 'Pink lipstick',
            image: 'pics/personal_items/lipsticks/pink.jpg',
            description: 'Pink lipstick',
            count: 30,
            price: 130,
            use: 'many',
        },
        lipbalm: {
            name: 'Lip balm',
            image: 'pics/personal_items/lipbalm.jpg',
            description: 'Lip balm',
            count: 30,
            price: 100,
            use: 'many',
        },
    },
    pharmacy: {
        birth_control_pills: {
            name: 'Birth control pills',
            image: 'pics/personal_items/birth_control_pills.jpg',
            description: "Who doesn't want a lot of hassle and sleepless nights?",
            count: 10,
            price: 150,
            use: 'many',
        },
        tampons: {
            name: 'Tampons',
            image: 'pics/personal_items/tampons.jpg',
            description: 'Mini dildos!',
            count: 18,
            price: 250,
            use: 'many',
        },
        vitamins: {
            name: 'Vitamins',
            image: 'pics/personal_items/vitamins.jpg',
            description: 'Drink once a day for good health and energy!',
            count: 20,
            price: 200,
            use: 'many',
        },
        pregnancy_test: {
            name: 'Pregnancy test',
            image: 'pics/personal_items/pregnancy_test.jpg',
            description: 'The game started...',
            count: 1,
            price: 100,
            use: 'many',
        },
    },
    dime_time: {
        shampoo: {
            name: 'Shampoo',
            image: 'pics/personal_items/shampoo.jpg',
            description: 'Keeps your body and hair clean',
            count: 20,
            price: 150,
            use: 'many',
        },
        razors: {
            name: 'Razors',
            image: 'pics/personal_items/razors.jpg',
            description: 'Cuts your bush',
            count: 20,
            price: 200,
            use: 'many',
        },
        tampons: {
            name: 'Tampons',
            image: 'pics/personal_items/tampons.jpg',
            description: 'Take on unexpected moments',
            count: 18,
            price: 250,
            use: 'many',
        },
    },
}
window.GAME_ITEMS = GAME_ITEMS
