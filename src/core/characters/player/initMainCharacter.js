window._initMainCharacter = ()=> {
    let mainCharacter = new GirlCharacter({
        firstName: "Maria",
        lastName: "Doe",
        age: 18,
        corruption: 3,
        beauty: 0,
        energy: 100,
        arousal: 0,
        intellect: 2,
        intoxication: 0,
        hasBeenAtSchool: false,
        watchedCristy: 0,
        isInSchoolLibraryAlone: true,
        bankBalance: 0,
        brothelDailyIncome: 0,
        brothelSafe: 0,
        girlsAmountInBrothel: 0,
        currentLocation: '',
        currentState: '',
        state: '',
        cleanliness: 100,
        menstruation: {
            day: 1,
            isProtected: false,
        },
        attractiveness: 10,
        laptop: {
            socials: {
                commentPoints: 0
            }
        },
        relationships: {
            mom: 5,
            dad: 5,
            sibling: 3,
            christy: 0,
            ralfDog: 0
        },
        reputation: {
            global: 0,
            school: 0,
            home: 3
        },
        timesWorkedOn: {
            copyright: 0,
            testingGames: 0,
            writingOpinions: 0,
            makeDesign: 0,
            writingDocs: 0
        },
        appearance: {
            isCombed: false,
            makeup: 'none',
            teethBrushed: false,
            image: '',
            head: {
                image: '',
                hair: {
                    color: 'red',
                    length: 'chest',
                    style: 'straight',
                    modification: '',
                },
                eyes: {
                    size: 'medium',
                    color: 'brown',
                    lashesSize: 'medium',
                },
                lips: {
                    size: 'medium',
                    color: 'none'
                },
                isWearingGlasses: false
            },
            chest: {
                size: 'b',
                image: '',
            },
            body: {
                type: 'normal',
                image: '',
            }
        },
        look: {
            clothes: {
                head: {
                    name: '',
                    image: ''
                },
                body: {
                    name: 'Usual clothes',
                    image: 'pics/object/UClothes.jpg',
                    allure: 5,
                    obscenity: 0
                },
                lowerbody: {
                    name: 'Jeans',
                    image: ''
                },
                legs: {
                    name: '',
                    image: ''
                },
                shoes: {
                    name: '',
                    image: ''
                }
            },
            lingerie: {
                bra: {
                    name: 'Plain Black Bra',
                    image: 'pics/look/lingerie/bra/default_bra.jpg',
                    description: 'A plain black bra.',
                    allure: 0,
                    obscenity: 0
                },
                panties: {
                    name: 'Plain Black Panties',
                    image: 'pics/look/lingerie/panties/default_panties.jpg',
                    description: 'A plain black pair of panties.',
                    allure: 0,
                    obscenity: 0
                }
            },
            accessories: {
                neck: {
                    name: '',
                    image: ''
                },
                purse: {
                    name: '',
                    image: ''
                },
                finger: {
                    name: '',
                    image: ''
                },
                ears: {
                    name: '',
                    image: ''
                },
                eyes: {
                    name: '',
                    image: ''
                },
                arms: {
                    name: '',
                    image: ''
                },
            },
            erotic_accessories: {
                neck: {
                    name: '',
                    image: ''
                },
                front: {
                    name: '',
                    image: ''
                },
                back: {
                    name: '',
                    image: ''
                },
                mouth: {
                    name: '',
                    image: ''
                },
                body: {
                    name: '',
                    image: ''
                }
            },
            suits: {
                swim: {
                    name: '',
                    image: ''
                },
                school: {
                    name: '',
                    image: ''
                },
                evening: {
                    name: '',
                    image: ''
                },
                work: {
                    name: '',
                    image: ''
                },
                beach: {
                    name: '',
                    image: ''
                }
            },
            piercings: {},
            tattoes: {},
        },
        eroticLook: {
            intimateHaircut: 'hairy'
        },
        items: {
            shampoo: 20,
            razors: 3,
            tampons: 10
        },
        stats: {
        },
        skills: {
            job: {
                copyright: 1,
                testing: 1,
                writingOpinions: 1,
                makeDesign: 1,
                writingDocs: 1
            }
        },
        sexStats: {
            masturbated: 0,
            bj: 0,
            vaginal: 0,
            vaginalCapacity: 1,
            anal: 0,
            analCapacity: 1,
            tits: 0,
            thigh: 0,
            handjob: 0,
            footjob: 0,
            threesome: 0,
            raped: 0,
            orgasm: 0,
            flashed: 0,
            ganged: 0,
            gloryholed: 0,
            annilingusGiven: 0,
            annilingusReceived: 0,
            receiveCuni: 0,
            receiveMasturbation: 0,
            givenCuni: 0,
            cum: {
                onFace: 0,
                onMouth: 0,
                inMouth: 0,
                onBody: 0,
                onAss: 0,
                onPussy: 0,
                inAss: 0,
                inPussy: 0,
                ate: 0,
                spitted: 0,
            }
        },
        sexSkills: {
            bj: 0
        },
        pregnancy: {
            isPregnant: false,
            day: 0,
            isOnPills: false,
            knowsAboutPregnancy: false,
        },
        wardrobe: new Wardrobe({
            clothes: {
                head: {},
                body: {
                    'School uniform': {
                        name: 'School uniform',
                        image: 'pics/object/SchoolUniform.jpg',
                        description: 'You must wear this at school',
                        category: 'suit, school',
                        allure: 5,
                        obscenity: 2
                    },
                    'Home t-shirt': {
                        name: 'Home t-shirt',
                        image: 'https://MariaMod.site/pics/PaperDoll/UpperBody/MainClothes/Home t-shirta.png',
                        description: 'Regular clothes, nice and comfortable.',
                        category: 'usual',
                        allure: 2,
                        obscenity: 1
                    },
                    'Office suit': {
                        name: 'Office suit',
                        image: 'pics/object/OfficeSuit.jpg',
                        description: 'You must wear this at work',
                        allure: 10,
                        obscenity: 0
                    },
                    'Usual clothes': {
                        name: 'Usual clothes',
                        image: 'pics/object/UClothes.jpg',
                        description: 'Regular clothes, nice and comfortable.',
                        category: 'usual',
                        allure: 5,
                        obscenity: 0
                    }
                },
                lowerbody: {
                    'Jeans': {
                        name: 'Jeans',
                        image: 'https://MariaMod.site/pics/PaperDoll/LowerBody/LowerBodyClothes/Jeans.png',
                        description: 'Just tight jeans',
                        category: 'usual',
                        allure: 2,
                        obscenity: 1
                    },
                    'School skirt': {
                        name: 'School skirt',
                        image: 'https://MariaMod.site/pics/PaperDoll/LowerBody/LowerBodyClothes/School skirt.png',
                        description: 'Not very long cute skirt',
                        category: 'usual',
                        allure: 5,
                        obscenity: 1
                    },
                },
                legs: {
                    'Short socks': {
                        name: 'Short socks',
                        image: 'https://MariaMod.site/pics/PaperDoll/LowerBody/Stockings/Short socks.png',
                        description: 'Very comfy white short socks',
                        category: 'usual',
                        allure: 0,
                        obscenity: 0
                    },
                },
                shoes: {
                    'Trainers': {
                        name: 'Trainers',
                        image: 'https://MariaMod.site/pics/PaperDoll/LowerBody/Shoes/Trainers.png',
                        description: 'A new pair of cool trainers',
                        category: 'usual',
                        allure: 0,
                        obscenity: 0
                    },
                    'School shoes': {
                        name: 'School shoes',
                        image: 'https://MariaMod.site/pics/PaperDoll/LowerBody/Shoes/School shoes.png',
                        description: 'A pair of formal girl shoes',
                        category: 'usual',
                        allure: 0,
                        obscenity: 0
                    },
                },
            },
            accessories: {
                neck: {},
                ears: {},
                eyes: {},
                arms: {},
                finger: {
                    'Plain gold ring': {
                        name: 'Plain gold ring',
                        image: 'pics/PGRing.jpg',
                        description: 'You have this ring for three years.',
                        category: 'accessories',
                        allure: 5,
                        obscenity: 0
                    }
                }
            },
            erotic_accessories: {
                neck: {},
                front: {},
                back: {},
                mouth: {},
                body: {}
            },
            lingerie: {
                bra: {
                    default: {
                        name: 'Plain Black Bra',
                        image: 'pics/look/lingerie/bra/default_bra.jpg',
                        description: 'A plain black bra.',
                        allure: 2,
                        obscenity: 1
                    }
                },
                panties: {
                    default: {
                        name: 'Plain Black Panties',
                        image: 'pics/look/lingerie/panties/default_panties.jpg',
                        description: 'A plain black pair of panties.',
                        allure: 2,
                        obscenity: 1
                    }
                }
            },
            suits: {}
        })
    })
    return mainCharacter
}

