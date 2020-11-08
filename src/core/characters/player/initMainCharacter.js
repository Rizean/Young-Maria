window._initMainCharacter = ()=> {
    console.log('GAME_ITEMS_V2', GAME_ITEMS_V2)
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
                body: utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='usualClothes')),
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
                bra: utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='plainBlackBra')),
                panties: utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='plainBlackPanties')),
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
                    'School uniform': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='schoolUniform')),
                    'Home t-shirt': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='homeTShirt')),
                    'Office suit': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='officeSuit')),
                    'Usual clothes': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='usualClothes')),
                },
                lowerbody: {
                    'Jeans': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='jeans')),
                    'School skirt': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='schoolSkirt')),
                },
                legs: {
                    'Short socks': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='shortSocks')),
                },
                shoes: {
                    'Trainers': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='trainers')),
                    'School shoes': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='schoolShoes')),
                },
            },
            accessories: {
                neck: {},
                ears: {},
                eyes: {},
                arms: {},
                finger: {
                    'Plain gold ring': utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='plainGoldRing')),
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
                    default: utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='plainBlackBra')),
                },
                panties: {
                    default: utils.shallowClone(GAME_ITEMS_V2.wearable.find(({key})=>key==='plainBlackPanties')),
                }
            },
            suits: {}
        })
    })
    return mainCharacter
}

