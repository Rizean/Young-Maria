const _generateSelfiePassages = ({selfies, title, backLink, characterRef}) => {
    return `
<<nobr>>
${selfies}
<</nobr>>

[[${backLink}]]
`.trim()
}

const _generateSelfieGallerySrc = ({backLink, selfies}) => {
    return `
&emsp;If you've taken pictures, you can find them here for... personal use... ;) <br/>
[[Go back->${backLink}]]

<<nobr>>
${selfies}
<</nobr>>

[[Go back->${backLink}]]
`.trim()
}

const _generateSelfieSellPassageSrc = ({selfies, backLink, characterRef}) => {
    return `
&emsp;You open a website that leads you to an advertisement for selling photos. On it, a random guy messages you for some more private pictures. Well, money is money... <br/><br/>

${selfies}
<br/>
[[${backLink}]]
`.trim()
}

class SelfieController extends PersistentObject {
    constructor(config= {}) {
        super(config)
        this._selfies = {}
        SELFIE_DATA.forEach(({key, media}) => {
            this._selfies[key] = {isTaken: false, taken: [], isSold: false, sold: []}
        })

        this.fromJSON(config)
    }

    getSelfieData(selfieKey) {
        return {requirements: {take: {canTake: true, corruption: 0}, sell: {canSell: true, corruption: 0}}, ...SELFIE_DATA.find(({key}) => key === selfieKey), ...this._selfies[selfieKey]}
    }

    setTaken(key) {
        this._selfies[key].isTaken = true
    }
    setSold(key, price) {
        this._selfies[key].isSold = true
        this._selfies[key].soldFor = price
    }

    generateSelfiePassageSrc({title = 'Take a photo', backLink = 'Back->Smartphone', character, characterRef = '$mainChar'}) {
        let selfies = []
        Object.keys(this._selfies).forEach(key => {
            let selfie = this.getSelfieData(key)
            if (selfie.isTaken) return selfies.push(`You already have the best ${selfie.link.slice(2)}<br/>`)

            if (selfie.requirements.take.canTake === false) return
            if (selfie.requirements.take.corruption && character.corruption < selfie.requirements.take.corruption) return

            selfies.push(`<<link 'Take ${selfie.link}'>> <<set $selfieKey = "${selfie.key}">> <<set $selfieMedia = "${selfie.media}">> <<set $selfieText = "${selfie.text}">> <<goto "Take selfie">><</link>><br/>`)
        })
        if (character.corruption < 70) selfies.push('You are not brave enough to take more lewd photos.')
        return _generateSelfiePassages({selfies: selfies.join('\n'), title, backLink, characterRef})
    }
    generateSelfiePassageTarget({characterRef = '$mainChar', backLink = 'Take a photo'}={}) {
        return `<<run ${characterRef}.selfies.setTaken($selfieKey)>><<=mediaCatalog.showImage({key: $selfieMedia})>><<=$selfieText>><br/>[[Back->${backLink}]]`.trim()
    }
    generateSelfieGallerySrc({title = 'Gallery', backLink = 'Smartphone', targetLink = 'Show Selfie'}={}) {
        let selfies = []
        Object.keys(this._selfies).forEach(key => {
            let selfie = this.getSelfieData(key)
            if (!selfie.isTaken) return
            selfies.push(`<<link '${selfie.link}'>><<set $selfieMedia = "${selfie.media}">><<goto "${targetLink}">><</link>><br/>`)
        })
        return _generateSelfieGallerySrc({selfies: selfies.join('\n'), backLink})
    }
    generateSelfieGalleryTarget({backLink = 'Gallery', targetLink = 'Show Selfie'}={}) {
        return `[[Back->${backLink}]]\n\n<<=mediaCatalog.showImage({key: $selfieMedia})>>\n[[Back->${backLink}]]`.trim()
    }

    generateSelfieSellPassageSrc({title = 'GF photos', backLink = 'Go back->JobHunters.net', character, characterRef = '$mainChar'}={}) {
        let selfies = []
        Object.keys(this._selfies).forEach(key => {
            let selfie = this.getSelfieData(key)
            if (!selfie.isTaken) return
            if (selfie.isSold) return selfies.push(`${selfie.link} - sent $${selfie.soldFor}`)

            if (selfie.requirements.sell.canSell === false) return
            if (selfie.requirements.sell.corruption && character.corruption < selfie.requirements.sell.corruption) return
            let price = (character.beauty + selfie.price + 20) * 2 + Math.ceil(Math.random() * 15) + 5

            selfies.push(`<<link '${selfie.link}'>><<run ${characterRef}.selfies.setSold("${selfie.key}", ${price})>><<set $mainChar.money += ${price}>><<goto "${title}">><</link>>`)
        })
        return _generateSelfieSellPassageSrc({selfies: selfies.join('\n'), title, backLink, characterRef})
    }

}

window.SelfieController = SelfieController
