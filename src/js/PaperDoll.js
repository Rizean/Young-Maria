class PaperDoll {
    constructor(mediaCatalog) {
        this.mediaCatalog = mediaCatalog
        this.parts = this.clear()
    }
    clear() {
        const data = JSON.parse(JSON.stringify({
            mainBody: {key: '', variant: ''},
            buttPlug: {key: '', variant: ''},
            neck: {key: '', variant: ''},
            hair: {key: '', variant: ''},
            chest: {key: '', variant: ''},
            chestAccessory: {key: '', variant: ''},
            bra: {key: '', variant: ''},
            panties: {key: '', variant: ''},
            stockings: {key: '', variant: ''},
            mainClothes: {key: '', variant: ''},
        }))
        this.parts = data
        return data
    }
    setPart({part, key, variant}) {
        this.parts[part].key = key
        this.parts[part].variant = variant
    }

    getImage(part) {
        return this.mediaCatalog.getImage(this.parts[part])
    }

    render() {
        return '' +
            `<div style="position: relative; top: 0; left: 0">` +
            `    <div id="DollMainBody"><img src="${this.getImage('mainBody')}" alt=""/></div>` +
            `    <div id="DollButtPlug"><img src="${this.getImage('buttPlug')}" alt=""/></div>` +
            `    <div id="DollNeck"><img src="${this.getImage('neck')}" alt=""/></div>` +
            `    <div id="DollHair"><img src="${this.getImage('hair')}" alt=""/></div>` +
            `    <div id="DollChest"><img src="${this.getImage('chest')}" alt=""/></div>` +
            `    <div id="DollChestAccessory"><img src="${this.getImage('chestAccessory')}" alt=""/></div>` +
            `    <div id="DollBra"><img src="${this.getImage('bra')}" alt=""/></div>` +
            `    <div id="DollPanties"><img src="${this.getImage('panties')}" alt=""/></div>` +
            `    <div id="DollStockings"><img src="${this.getImage('stockings')}" alt=""/></div>` +
            `    <div id="DollMainClothes"><img src="${this.getImage('mainClothes')}" alt=""/></div>` +
            `</div>`
    }

}

window.PaperDoll = PaperDoll


/* old
 <<widget "dollClothesWidget">>

<!-- HEAD -->

<<set $dollEyesColor = $mainChar.appearance.head.eyes.color>>
<<set $dollHairColor = $mainChar.appearance.head.hair.color>>
<<set $dollHairLength = $mainChar.appearance.head.hair.length>>
<<set $dollNeckClothes = $mainChar.look.accessories.neck.name>>


<!-- UPPER BODY -->

<<set $dollChestSize = $mainChar.appearance.chest.size>>
<<set $dollChestSizeClothes = $mainChar.appearance.chest.size>>
<<set $dollMainClothes = $mainChar.look.clothes.body.name>>
<<set $dollBra = $mainChar.look.lingerie.bra.name>>
<<set $dollNipplesClothes = $mainChar.look.erotic_accessories.body.name>>

<!-- LOWER BODY -->

<<set $dollPanties = $mainChar.look.lingerie.panties.name>>
<<set $dollLegsClothes = $mainChar.look.clothes.legs.name>>
<<set $dollButtPlug = $mainChar.look.erotic_accessories.back.name>>

<!-- RULES -->

<<if $dollMainClothes != '' or $dollBra != ''>><<set $dollChestSize = ''>><<set $dollNipplesClothes = ''>><<endif>>
<<if $dollBra == 'Usual bra'>><<set $dollBra = 'Default bra'>><<endif>>
<<if $dollPanties == 'Usual Panties'>><<set $dollPanties = 'Default Panties'>><<endif>>
<<if $dollButtPlug == 'Butt plug'>><<set $dollButtPlug = ''>><<endif>>
<<if $dollMainClothes == 'School uniform' and $dollLegsClothes == 'Stockings'>><<set $dollLegsClothes = ''>><<endif>>

<</widget>>


 */
