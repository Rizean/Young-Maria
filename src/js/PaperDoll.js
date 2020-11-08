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
            upperBody: {key: '', variant: ''},
            lowerBody: {key: '', variant: ''},
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
            `    <div id="DollZeroLay"><br/></div>` +
            `    <div id="DollMainBody"><img src="${this.getImage('mainBody')}" alt=""/></div>` +
            `    <div id="DollButtPlug"><img src="${this.getImage('buttPlug')}" alt=""/></div>` +
            `    <div id="DollNeck"><img src="${this.getImage('neck')}" alt=""/></div>` +
            `    <div id="DollHair"><img src="${this.getImage('hair')}" alt=""/></div>` +
            `    <div id="DollChest"><img src="${this.getImage('chest')}" alt=""/></div>` +
            `    <div id="DollChestAccessory"><img src="${this.getImage('chestAccessory')}" alt=""/></div>` +
            `    <div id="DollBra"><img src="${this.getImage('bra')}" alt=""/></div>` +
            `    <div id="DollPanties"><img src="${this.getImage('panties')}" alt=""/></div>` +
            `    <div id="DollStockings"><img src="${this.getImage('stockings')}" alt=""/></div>` +
            // <div id="DollShoes">[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/Shoes/' + $dollShoes + '.png')]]</div>
            // <div id="DollLowerBodyClothes">[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/LowerBodyClothes/' + $dollLowerBodyClothes + '.png')]]</div>
            `    <div id="DollMainClothes"><img src="${this.getImage('mainClothes')}" alt=""/></div>` +
            `</div>`
    }

}

window.PaperDoll = PaperDoll

/* 8.3 doll


#DollMainBody img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 1
}

#DollButtPlug img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 2
}

#DollNeck img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 3
}

#DollHair img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 4
}

#DollChest img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 5
}

#DollChestClothes img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 6
}

#DollBra img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 7
}

#DollPanties img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 8
}

#DollStockings img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 9
}

#DollShoes img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 10
}

#DollLowerBodyClothes img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 11
}

#DollMainClothes img {
  position: absolute;
  top: 0;
  left: 50px;
  border: 1px red solid;
  border-style: hidden;
  max-height: 400px;
  z-index: 12
}

<div style="position: relative; top: 0; left: 0">
	<div id="DollZeroLay">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/.png')]]
	</div>
	<div id="DollMainBody">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/MainBody' + $dollEyesColor + 'Eyes.png')]]
	</div>
	<div id="DollButtPlug">
	[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/ButtPlug/' + $dollButtPlug + '.png')]]
	</div>
	<div id="DollNeck">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/Head/Neck/' + $dollNeckClothes + '.png')]]
	</div>
	<div id="DollHair">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/Head/Hair/Hair' + $dollHairLength + $dollHairColor + '.png')]]
	</div>
	<div id="DollChest">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/UpperBody/Chest/' + $dollChestSize + '.png')]]
	</div>
	<div id="DollChestClothes">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/UpperBody/Chest/' + $dollChestSize + $dollNipplesClothes + '.png')]]
	</div>
	<div id="DollBra">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/UpperBody/Bra/' + $dollBra + $dollChestSizeBraClothes + '.png')]]
	</div>
	<div id="DollPanties">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/Panties/' + $dollPanties + '.png')]]
	</div>
	<div id="DollStockings">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/Stockings/' + $dollLegsClothes + '.png')]]
	</div>
	<div id="DollShoes">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/Shoes/' + $dollShoes + '.png')]]
	</div>
	<div id="DollLowerBodyClothes">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/LowerBody/LowerBodyClothes/' + $dollLowerBodyClothes + '.png')]]
	</div>
	<div id="DollMainClothes">
		[img[String.format('https://MariaMod.site/pics/PaperDoll/UpperBody/MainClothes/' + $dollMainClothes + $dollChestSizeMainClothes + '.png')]]
	</div>
</div>


::Paper Doll Widgets [widget nobr] <181,3116>
<<widget "dollClothesWidget">>

<!-- HEAD -->

<<set $dollEyesColor = $mainChar.appearance.head.eyes.color>>
<<set $dollHairColor = $mainChar.appearance.head.hair.color>>
<<set $dollHairLength = $mainChar.appearance.head.hair.length>>
<<set $dollNeckClothes = $mainChar.look.accessories.neck.name>>


<!-- UPPER BODY -->

<<set $dollChestSize = $mainChar.appearance.chest.size>>
<<set $dollChestSizeMainClothes = $mainChar.appearance.chest.size>>
<<set $dollChestSizeBraClothes = $mainChar.appearance.chest.size>>
<<set $dollMainClothes = $mainChar.look.clothes.body.name>>
<<set $dollBra = $mainChar.look.lingerie.bra.name>>
<<set $dollNipplesClothes = $mainChar.look.erotic_accessories.body.name>>


<!-- LOWER BODY -->

<<set $dollPanties = $mainChar.look.lingerie.panties.name>>
<<set $dollLegsClothes = $mainChar.look.clothes.legs.name>>
<<set $dollButtPlug = $mainChar.look.erotic_accessories.back.name>>
<<set $dollLowerBodyClothes = $mainChar.look.clothes.lowerbody.name>>
<<set $dollShoes = $mainChar.look.clothes.shoes.name>>


<!-- RULES -->

<<if $dollMainClothes != '' or $dollBra != ''>>
	<<set $dollChestSize = ''>>
	<<set $dollNipplesClothes = ''>>
<<endif>>

<<if $dollBra == 'Usual bra'>>
	<<set $dollBra = 'Default bra'>>
<<endif>>

<<if $dollMainClothes == 'Bikini'>>
	<<set $dollBra == ''>>
<<endif>>

<<if $dollPanties == 'Usual Panties'>>
	<<set $dollPanties = 'Default Panties'>>
<<endif>>

<<if $dollLowerBodyClothes == 'Bikini panties'>>
	<<set $dollPanties == ''>>
<<endif>>

<<if $dollButtPlug == 'Butt plug'>>
	<<set $dollButtPlug = ''>>
<<endif>>

<!-- <<if $dollMainClothes == 'School uniform' and $dollLegsClothes == 'Stockings'>>
	<<set $dollLegsClothes = ''>>
<<endif>> -->

<<if $dollMainClothes == ''>>
	<<set $dollChestSizeMainClothes = ''>>
<<endif>>

<<if $dollBra == ''>>
	<<set $dollChestSizeBraClothes = ''>>
<<endif>>

<</widget>>

 */


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
