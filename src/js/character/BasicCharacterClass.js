class BasicCharacter {
    constructor(config) {
        this.firstName = '';
        this.lastName = '';
        this.age = '';
        this.money = 100;
        this.corruption = 0;
        this.gender = '';
        this.beauty = 0;
        this.energy = 0;
        this.maxEnergy = 100;
        this.arousal = 0;
        this.intellect = 0;
        this.intoxication = 0;
        this.genitals = '';
        this.wardrobe = undefined;
        this.inventory = new Inventory({})
        this.selfies = new SelfieController()
        this.appearance = {
            isBrushed: false,
            image: '',
            head: {
                image: '',
                hair: {
                    color: '',
                    length: '',
                    style: '',
                    modification: '',
                },
                eyes: {
                    size: '',
                    color: '',
                    lashesSize: '',
                },
                lips: {
                    size: '',
                    color: ''
                },
                isWearingGlasses: false
            },
            chest: {
                size: 'B',
                image: '',
            },
            body: {
                type: 'normal',
                image: '',
            }
        }
        this.paperDoll = new PaperDoll(mediaCatalog)


        Object.keys(config).forEach(function (pn) {
            if (pn === 'paperDoll') return
            this[pn] = clone(config[pn]);
        }, this);
    }

    clone() {
        return new BasicCharacter(this);
    }

    toJSON() {
        let ownData = {};

        Object.keys(this).forEach(function (pn) {
            if (pn === 'paperDoll') return
            ownData[pn] = clone(this[pn]);
        }, this);

        return JSON.reviveWrapper(
            'new BasicCharacter($ReviveData$)', ownData
        );
    }

    setFirstName(firstName) {
        if (firstName) {
            this.firstName = firstName;
        }
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(lastName) {
        if (lastName) {
            this.lastName = lastName;
        }
    }

    getLastName() {
        return this.lastName;
    }

    setAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }

    getAge() {
        return this.age;
    }

    increaseCorruption(value) {
        if (value && value > 0) {
            if ((this.corruption + value) > 100) {
                this.corruption = 100;
            } else {
                this.corruption += value;
            }
        }
    }

    decreaseCorruption(value) {
        if (value && value > 0) {
            if ((this.corruption - value) < 0) {
                this.corruption = 0;
            } else {
                this.corruption -= value;
            }
        }
    }

    setCorruption(value) {
        if (value && value > 0) {
            this.corruption = value;
        }
    }

    getCorruption() {
        return this.corruption;
    }

    setGender(gender) {
        var availableGenders = [
            variables().GENDER_MALE,
            variables().GENDER_FEMALE,
            variables().GENDER_TRANS
        ];

        if (availableGenders.includes(gender)) {
            this.gender = gender;
        }
    }

    getGender() {
        return this.gender;
    }

    increaseBeauty(value) {
        if (value && value > 0) {
            this.beauty += value;
        }
    }

    decreaseBeauty(value) {
        if (value && value > 0) {
            this.beauty -= value;
        }
    }

    getBeauty() {
        return this.beauty;
    }

    increaseEnergy(value) {
        this.energy = ((this.energy + value) > this.maxEnergy) ? this.maxEnergy : this.energy + value
    }

    decreaseEnergy(value) {
        this.energy = ((this.energy - value) < 0) ? 0 : this.energy - value
    }

    setEnergy(value) {
        this.energy = (value > this.maxEnergy) ? this.energy = this.maxEnergy : (value < 0) ? 0 : value
    }

    getEnergy() {
        return this.energy;
    }

    increaseMaxEnergy(value) {
        this.maxEnergy += value;
    }

    decreaseMaxEnergy(value) {
        this.maxEnergy -= value;
    }

    getMaxEnergy() {
        return this.maxEnergy;
    }

    increaseArousal(value) {
        if ((this.arousal + value) > 100) {
            this.arousal = 100;
        }

        this.arousal += arousal;
    }

    decreaseArousal(value) {
        if ((this.arousal - value) < 0) {
            this.arousal = 0;
        }

        this.arousal -= value;
    }

    setArousal(value) {
        if (value && value >= 0) {
            this.arousal = value || 0;
        }
    }

    getArousal() {
        return this.arousal;
    }

    increaseIntellect(value) {
        if (value && value > 0) {
            this.intellect += value;
        }
    }

    decreaseIntellect(value) {
        if (value && value > 0) {
            this.intellect -= value;
        }
    }

    setIntellect(value) {
        this.intellect = value;
    }

    getIntellect() {
        return this.intellect;
    }

    increaseIntoxication(value) {
        if (value && value > 0) {
            this.intoxication += value;
        }
    }

    decreaseIntoxication(value) {
        if (value && value > 0) {
            this.intoxication -= value;
        }
    }

    setIntoxication(value) {
        this.intoxication = value;
    }

    getIntoxication() {
        return this.intoxication;
    }

    increaseRelationshipWithSibling(value) {
        this.relationships.sibling += value || 1;
    }

    getPrice(price) {
        price = parseInt(price)
        if (settings.lessPrices) price = Math.floor(price / 2)
        return price
    }

    canBuy(price) {
        price = parseInt(price)
        if (settings.lessPrices) price = Math.floor(price / 2)
        console.log('settings', settings)
        console.log('wardrobe', window)
        return this.money >= price
    }

    buy({price, type = 'item', subType, item, add, goto, hours, minutes}) {
        console.log(`buy: `, {price, type, subType, item, add, goto, hours, minutes})
        price = parseInt(price)
        if (settings.lessPrices) price = Math.floor(price / 2)
        if (!this.canBuy(price)) return false
        this.money -= price
        // type = clothes, accessories, erotic_accessories, lingerie, suits
        if (type !== 'item') {
            console.log(`buy: `, {price, type, subType, item, add, goto, hours, minutes})
            this.wardrobe.add(type, subType, item)
        } else {
            console.log(`buy item: `, {price, type, subType, item, add, goto, hours, minutes})
            if (add) this.inventory.addCount(subType, item)
            else this.inventory.add(subType, item)
        }
        if (hours && hours !== 0) {
            variables().hour += hours
        }
        if (minutes && minutes !== 0) {
            variables().minute += minutes
        }
        if (goto) {
            if (!Story.has(goto)) return console.warn(`passage "${goto}" does not exist`)
            setTimeout(() => Engine.play(goto), Engine.minDomActionDelay)
        }

    }

    buyWardrobe(price, itemType, item) {
        price = parseInt(price)
        if (settings.lessPrices) price = Math.floor(price / 2)
        if (!this.canBuy(price)) return false
        this.money -= price
        this.wardrobe.addAccessory(itemType, item)
    }

    hasWardrobe(item) {
        return this.wardrobe.available.includes(item)
    }

    buyItem(price, type, item, add) {
        price = parseInt(price)
        if (settings.lessPrices) price = Math.floor(price / 2)
        if (!this.canBuy(price)) return false
        this.money -= price
        if (add) return this.inventory.addCount(type, item)
        this.inventory.add(type, item)
    }

    hasItem(type, item) {
        return this.inventory.has(type, item)
    }

    getAppearancePicture(type) {
        if (type === 'anal') {
            if (this.sexStats.anal > 50) return mediaCatalog.getImage({key: 'appearance.anal.hole'})
            if (this.sexStats.anal > 20) return mediaCatalog.getImage({key: 'appearance.anal.developed'})
            if (this.sexStats.anal > 1) return mediaCatalog.getImage({key: 'appearance.anal.small'})
            return mediaCatalog.getImage({key: 'appearance.anal.virgin'})
        }
        if (type === 'pussy') {
            if (this.sexStats.vaginal > 70) mediaCatalog.getImage({key: 'appearance.pussy.hole'})
            if (this.sexStats.vaginal > 45) mediaCatalog.getImage({key: 'appearance.pussy.large'})
            if (this.sexStats.vaginal > 20) mediaCatalog.getImage({key: 'appearance.pussy.medium'})
            if (this.sexStats.vaginal > 1) mediaCatalog.getImage({key: 'appearance.pussy.small'})
            return mediaCatalog.getImage({key: 'appearance.pussy.virgin'})
        }
        if (type === 'bj') {
            if (this.sexStats.bj > 70) return mediaCatalog.getImage({key: 'appearance.mouth.pro'})
            if (this.sexStats.bj > 40) return mediaCatalog.getImage({key: 'appearance.mouth.deepthroat'})
            if (this.sexStats.bj > 25) return mediaCatalog.getImage({key: 'appearance.mouth.experienced'})
            if (this.sexStats.bj > 10) return mediaCatalog.getImage({key: 'appearance.mouth.somewhat_experienced'})
            if (this.sexStats.bj > 1) return mediaCatalog.getImage({key: 'appearance.mouth.inexperienced'})
            return mediaCatalog.getImage({key: 'appearance.mouth.chaste'})
        }

    }

    showPicture(url) {
        return `@@.image-wrapper-w50p;[img[${url}]]\n<<back "Back">>`
    }

    getImage(part) {
        if (part === 'head') {
            if (!this.appearance.head.image) this.appearance.head.image = `pics/appearance/face/${this.appearance.head.hair.color}/${this.appearance.head.hair.length}/${this.appearance.head.hair.style}/image.jpg`
            return this.appearance.head.image
        }
    }

    getDescription(part) {
        if (part === 'hairColor') {
            this.appearance.head.hair.color = this.appearance.head.hair.color || 'brown'
            return this.appearance.head.hair.color
        }
        if (part === 'hairLength') {
            this.appearance.head.hair.length = this.appearance.head.hair.length || 'medium'
            return this.appearance.head.hair.length
        }
        if (part === 'hairStyle') {
            this.appearance.head.hair.style = this.appearance.head.hair.style || 'straight'
            return this.appearance.head.hair.style
        }
        if (part === 'hair') {
            this.appearance.head.hair.length = this.appearance.head.hair.length || 'medium'
            let length = this.getDescription('hairLength')
            let color = this.getDescription('hairColor')
            let style = this.getDescription('hairStyle')
            if (length === 'boyish') return `You have a ${color} ${style} boyish haircut. Many people consider this hairstyle unsuitable for a girl, but you are quite comfortable with it. Sometimes people mistake you for a guy.`
            if (length === 'pixie') return `You like your ${color} ${style} pixie hair. Some of your peers also wear this hairstyle because it is easy to care for. It also makes you seem a little younger.`
            if (length === 'short') return `You have ${color} ${style} short hair. It is a pretty popular hairstyle nowadays. You do not need to spend much time on it. Besides, whatever the weather, you look great!`
            if (length === 'shoulders') return `${color.toUpperFirst()} ${style} shoulder-length hair quite suits you. Your mom really likes this hairstyle (she wears the same one). Sometimes your hair falls in front of your face and obstructs the view.`
            if (length === 'chest') return `You have ${color} ${style} chest-length hair. This is one of the most popular hairstyles amongst girls of your age. This longer hairstyle is more difficult to care for but worth the effort.`
            if (length === 'long') return `${color.toUpperFirst()} ${style} long hair adorns your head. It falls well past your chest, attracting the attention of others. But beware, this length of hair is hell to tend to.`
        }
        if (part === 'eyes') {
            let color = this.appearance.head.eyes.color
            this.appearance.head.eyes.size = this.appearance.head.eyes.size || 'medium'
            if (this.appearance.head.eyes.size === 'small') return `Small ${color} eyes are not a hallmark of your face, but are well suited to the overall composition`
            if (this.appearance.head.eyes.size === 'medium') return `Nice ${color} eyes perfectly complement your face, drawing attention to yourself.`
            if (this.appearance.head.eyes.size === 'big') return `You have big ${color} eyes. When someone looks at you, the first thing they see is your big eyes.`
            if (this.appearance.head.eyes.size === 'very big') return `People can't help but notice your big anime-like ${color} eyes. They seem to fascinate everyone around you with their charming allure!`
        }
        if (part === 'lashes') {
            this.appearance.head.eyes.lashesSize = this.appearance.head.eyes.lashesSize || 'medium'
            if (this.appearance.head.eyes.lashesSize === 'small') return `You have pretty little eyelashes though they are barely visible.`
            if (this.appearance.head.eyes.lashesSize === 'medium') return `Medium sized eyelashes look great! They complement your eyes well but are not the centre of attention.`
            if (this.appearance.head.eyes.lashesSize === 'big') return `Large eyelashes perfectly decorate your eyes, making you look even more expressive and alluring.`
        }
        if (part === 'lips') {
            this.appearance.head.lips.size = this.appearance.head.lips.size || 'medium'
            if (this.appearance.head.lips.size === 'thin') return `You have discreet thin lips. They suit your face but are scarcely noticeable.`
            if (this.appearance.head.lips.size === 'medium') return `You have normal, pretty attractive lips. They look good!`
            if (this.appearance.head.lips.size === 'nice') return `You have full, attractive lips. When people look at you, they are drawn to your seductive lips.`
        }
        if (part === 'makeup') {
            this.appearance.makeup = this.appearance.makeup || 'none'
            if (this.appearance.makeup === 'none') return `You don't have makeup on right now.`
            if (this.appearance.makeup === 'light') return `You are wearing light makeup that enhances some parts of your face.`
            if (this.appearance.makeup === 'tangible') return `You are wearing tangible makeup that hides your flaws and emphasizes features.`
            if (this.appearance.makeup === 'bright') return `There is a thick layer of makeup on you that has altered your appearance and brightened it up.`
        }

    }

    getSexStatsDescription(part) {
        if (part === 'bj') {
            if (this.sexStats.bj > 70) return `Even experienced porn actresses should praise your [[mouth->Character mouth]]! Your tongue applies perfect pressure and knows where to concentrate. In fact, you can bring your partner to orgasm only with your tongue, without even using your whole mouth! Confidence and vulgarity mixes in your gaze, which forces the partner to submit to your experience and completely relax, concentrating on pleasure. The sensitivity of your throat is completely gone and now you can serve any dick. You can also take a while cock in your mouth right down to the base. As soon as you start having fun with a woman, the only thing she can do is press your head to her pussy and hold it with all her strength, because no one wants to stop the pleasure that you can bring.`
            if (this.sexStats.bj > 40) return `You have a professionally trained [[mouth->Character mouth]] that has had a lot of experience! Your tongue confidently turns a cock, skillfully processing its head and professionally working on the barrel. You also remember that you need to pay attention to the testicles. During eye contact, you smile and laugh with your eyes, adding excitement to your partner. Your mouth is almost insensitive and even a big cock can penetrate your throat for a few seconds. You also have a lot of salivation, which helps you a lot. Girls go crazy with your mouth! You are able to expertly serve pussies and bring your partner to several orgasms.`
            if (this.sexStats.bj > 25) return `You have a pretty well trained [[mouth->Character mouth]]. Your tongue is much more skillful, meaning you can lick entire shafts and really stimulate pussies. You can confidently maintain eye contact whilst still giving satisfaction to your partner. Your throat gives almost no complaints and you can take much more dick than most.`
            if (this.sexStats.bj > 10) return `Your [[mouth->Character mouth]] already has some experience. You can even use your tongue to lick and add more stimulation. Sometimes you look into the eyes of your partner. Your throat sensitivity is lower than average and you can sometimes even take a whole dick in your mouth.`
            if (this.sexStats.bj > 1) return `Your [[mouth->Character mouth]] is inexperienced, but it looks cute and adds excitement. You're not sure how to use your tongue and have problems controlling your teeth. You focus too much on your technique to pay attention to your partner. Your throat is very sensitive and resists "foreign objects".`
            return `You have an innocent [[mouth->Character mouth]]`
        }
        if (part === 'vaginal') {
            let intimateHaircut = this.eroticLook.intimateHaircut
            if (this.sexStats.vaginal > 70) return `Your poor ${intimateHaircut} [[hole->Character pussy]] has seen a lot. It is very stretched, but elastic and can take in more than just human cocks...`
            if (this.sexStats.vaginal > 45) return `Your experienced ${intimateHaircut} [[pussy->Character pussy]] is quite stretched and most members can enter without problems.`
            if (this.sexStats.vaginal > 20) return `Your ${intimateHaircut} [[pussy->Character pussy]] is already comfortable with dicks and looks pretty used.`
            if (this.sexStats.vaginal > 1) return `You have an inexperienced tight ${intimateHaircut} [[pussy->Character pussy]] between your legs.`
            return `Your ${intimateHaircut} [[pussy->Character pussy]] still has hymen`
        }
        if (part === 'anal') {
            if (this.sexStats.anal > 50) return `Your [[anal->Character anal]] gapes more than most. Small dicks no longer give you pleasure, in fact, you almost don't feel them anymore.`
            if (this.sexStats.anal > 20) return `Your [[anal->Character anal]] is sufficiently developed and you are happy to serve most members.`
            if (this.sexStats.anal > 1) return `You have a tight [[anal->Character anal]] that can take small dicks.`
            return `You have a chaste [[anal->Character anal]].`
        }
    }

    newDay() {
        if (settings.pregnancy) {
            if (this.pregnancy.isPregnant) {
                this.pregnancy.day++
                this.menstruation.day = 0
            }
            this.isOnPills = false
        }
        if (settings.menstruation) {
            if (this.menstruation.day > 17) this.menstruation.day = 1 // 28 days is norm why 17?
            else this.menstruation.day++
        }
        if (this.eroticLook.intimateHaircut === 'shaved') {
            this.eroticLook.intimateHaircut = 'stubble'
        } else if (this.eroticLook.intimateHaircut === 'stubble') {
            this.eroticLook.intimateHaircut = 'hairy'
        }
    }

    // <<if $mainChar.canDoAction({corruption: 20})>>[[Show them a bit more skin]] <br /><<endif>>
    // <<if $mainChar.canDoAction({energy: 30})>>[[Show them a bit more skin]] <br /><<endif>>
    // <<if $mainChar.canDoAction({money: 10})>>[[Show them a bit more skin]] <br /><<endif>>
    canDoAction({e, energy, c, corruption, m, money}) {
        e = e || energy
        c = c || corruption
        m = m || money
        console.log('canDoAction: ', {e, c, m}, {e: this.energy, c: this.corruption, m: this.money})
        console.log('e <= this.energy: ', e <= this.energy)
        console.log('c <= this.corruption: ', c <= this.corruption)
        console.log('m <= this.money: ', m <= this.money)
        let canDo = true
        if (e && canDo) canDo = e <= this.energy
        if (c && canDo) canDo = c <= this.corruption
        if (m && canDo) canDo = m <= this.money
        return canDo
    }

    // <<=$mainChar.doAction({b:1,e:-20})>>
    // <<=$mainChar.doAction({c:1,e:-20})>>
    // <<=$mainChar.doAction({e:-10,min:30})>>
    // <<=$mainChar.doAction({e:-60,h:5})>>
    doAction({e, energy, c, corruption, cl, cleanliness, m, money, h, hour, min, minutes, b, beauty}) {
        e = e || energy
        c = c || corruption
        cl = cl || cleanliness
        m = m || money
        b = b || beauty
        h = h || hour
        min = min || minutes

        const genText = (v, text) => (v > 0) ? ` <p class="add">+${v} ${text}</p> ` : ` <p class="minus">-${v} ${text}</p> `
        const genMoney = (v) => (v > 0) ? ` <p class="add">+$${v}</p> ` : ` <p class="minus">-$${v}</p> `

        let out = ''
        if (e && e !== 0) {
            if (settings.lessEnergy && e < 0) e = Math.floor(e / 2)
            if (e > 0) this.energy = Math.min(this.energy + e, this.maxEnergy)
            if (e < 0) this.energy = Math.max(this.energy + e, 0)
            out += genText(e, 'Energy')
        }
        if (c && c !== 0) {
            this.corruption += c
            out += genText(c, 'Corruption')
        }
        if (cl && cl !== 0) {
            if (cl > 0) this.cleanliness = Math.min(this.cleanliness + cl, 100)
            if (cl < 0) this.cleanliness = Math.max(this.cleanliness + cl, 0)
            out += genText(cl, 'Cleanliness')
        }
        if (b && b !== 0) {
            this.Beauty += c
            out += genText(b, 'Beauty')
        }
        if (m && m !== 0) {
            this.money += m
            out += genMoney(m)
        }
        if (h && h !== 0) {
            variables().hour += h
        }
        if (min && min !== 0) {
            variables().minute += min
        }

        return out
    }

    takeNap({h = 0, hour, m = 0, minutes}) {
        hour = hour || h
        minutes = minutes || m
        let napTime = hour * 60 + minutes
        let restRecoveryValue = 0.05
        if (napTime > 30) restRecoveryValue = 0.10
        if (napTime > 120) restRecoveryValue = 0.15
        if (napTime > 240) restRecoveryValue = 0.20
        let energy = Math.round(napTime * restRecoveryValue)
        return this.doAction({energy, hour, minutes})
    }

    updatePaperDoll() {
        let {paperDoll} = this
        let {accessories: {neck}, erotic_accessories, clothes: {legs, body, panties, bra}} = this.look
        let {chest, head: {eyes, hair}} = this.appearance
        let chestSize = chest.size.toUpperCase()

        const TEMP_DATA = {
            'School uniform': 'paperDoll.body.upper.schoolUniform',
            'Evening dress': 'paperDoll.body.upper.eveningDress',
        }
        paperDoll.clear()
        paperDoll.setPart({part: 'mainBody', key: 'paperDoll.head.eyes', variant: eyes.color})
        if (erotic_accessories.butt.name === 'Tail butt plug') paperDoll.setPart({part: 'buttPlug', key: 'paperDoll.body.lower.buttPlug', variant: 'TailButtPlug'})
        if (neck !== '') paperDoll.setPart({part: 'neck', key: 'paperDoll.head.neck.accessor', variant: neck === 'Dog collar' ? 'dogCollar' : 'choker'})
        paperDoll.setPart({part: 'hair', key: `paperDoll.head.hair.${hair.length}`, variant: hair.color.toUpperFirst()})
        paperDoll.setPart({part: 'chest', key: `paperDoll.body.upper.breast`, variant: chestSize})
        if (erotic_accessories.nipple.name === "Nipple rings") paperDoll.setPart({part: 'chestAccessory', key: `paperDoll.body.upper.nippleRings`, variant: chestSize})
        if (bra.name > '') paperDoll.setPart({part: 'bra', key: `paperDoll.body.upper.bra`, variant: chestSize})
        if (panties.name > '') paperDoll.setPart({part: 'panties', key: 'paperDoll.body.lower.panties.defaultPanties'})
        if (legs.name > '') paperDoll.setPart({part: 'stockings', key: 'paperDoll.body.lower.stockings'})
        if (TEMP_DATA[body.name]) paperDoll.setPart({part: 'mainClothes', key: TEMP_DATA[body.name]})
    }
    renderPaperDoll() {
        this.updatePaperDoll()
        return this.paperDoll.render()
    }
}

window.BasicCharacter = BasicCharacter
