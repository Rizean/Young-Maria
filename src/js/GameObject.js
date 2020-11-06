class GameObject extends PersistentObject {
    constructor(config) {
        super(config)
        this.key = ''
        this.name = ''
        this.mediaKey = ''
        this.description = ''

        this.fromJSON(config)
    }
}

window.GameObject = GameObject


// 	<!--<div id="DollChest">[img[String.format('pics/PaperDoll/UpperBody/Chest/' + $dollChestSize + $dollNipplesClothes + '.png')]]</div>-->
// $mainChar.look.erotic_accessories.body.name
//    <<set $dollBra = $mainChar.look.lingerie.bra.name>>
//    <<set $dollNipplesClothes = $mainChar.look.erotic_accessories.body.name>>
// 	<div id="DollBra">[img[String.format('pics/PaperDoll/UpperBody/Bra/' + $dollBra + $dollChestSizeClothes + '.png')]]</div>
// D:\twine\Young-Maria\pics\PaperDoll\UpperBody\Bra\DefaultBraD.png
// <div id="DollMainClothes">[img[String.format('pics/PaperDoll/UpperBody/MainClothes/' + $dollMainClothes + $dollChestSizeClothes + '.png')]]</div>

