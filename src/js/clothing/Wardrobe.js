class Wardrobe extends PersistentObject {
    constructor(config) {
        super(config)
        this.clothes = {};
        this.accessories = {};
        this.erotic_accessories = {};
        this.lingerie = {};
        this.suits = {};
        this.available = [
            'Home t-shirt',
            'Jeans',
            'School uniform',
            'School skirt',
            'Short socks',
            'Trainers',
            'School shoes',
            'Default bra',
            'Default panties',
        ];

        this.fromJSON(config)
    }

    add(type, subType, item) {
        if (!item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this[type][subType][item.name] = item;
        this.available.push(item.name);
    }

    addItem(itemType, item) {
        if (!item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.clothes[itemType][item.name] = item;
        this.available.push(item.name);
    }

    addAccessory(itemType, item) {
        if (!item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.accessories[itemType][item.name] = item;
        this.available.push(item.name);
    }

    addEroticAccessory(itemType, item) {
        if (!item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.erotic_accessories[itemType][item.name] = item;
        this.available.push(item.name);
    }

    addLingerie(itemType, item) {
        if (!item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.lingerie[itemType][item.name] = item;
        this.available.push(item.name);
    }

    renderSelection({slot = '', mainChar, joiner = '', category = 'clothes'}) {
        console.log({slot, category})
        let items = Object.keys(mainChar.wardrobe[category][slot]).map(key => mainChar.wardrobe[category][slot][key]) || []

        const row = ({item, mainChar}) => {
            if (!item) console.error(`item not found!`)
            let isWearing = mainChar.look[category][item.slot] && mainChar.look[category][item.slot].name === item.name
            let name = item.name + (isWearing ? ` (take off)` : ' (wear)')
            let link = `<<link "${name}" "Wardrobe">>` + (isWearing ? `<<set $mainChar.look["${category}"]["${item.slot}"] = {name:"",image:""} >>` : `<<set $mainChar.look["${category}"]["${item.slot}"] = $mainChar.wardrobe["${category}"]["${item.slot}"]["${item.name}"] >>`) + '<</link>>'

            return [
                `<tr>`,
                `<td width="20%">${link}</td>`,
                `<td align="center"><img src="${mediaCatalog.getImage({key: item.mediaKey, variant: mainChar.appearance.chest.size})}"/></td>`,
                `<td width="20%">${item.description}</td>`,
                `</tr>`,
            ].join(joiner)
        }
        return [
            `<table width="100%" border="5" class="wardrobe-clothes"><caption>${slot.toUpperFirst()} clothes</caption>`,
            `<tbody>${items.reduce((a, item) => a + row({item, mainChar}), '')}</tbody>`,
            `</table>`,
            `<br/>`,
            `<br/>`,
            `[[Back->Wardrobe]]`,
        ].join(joiner)
    }

    render({joiner = '', mainChar}) {
        const section = ({name, category, headers, mainChar}) => {
            console.log({name, category, headers, mainChar})
            let header = headers.reduce((a, c) => `${a}<th>${c}</th>`, '<thead><tr>') + '</tr></thead>'

            let row = (slot) => {
                if (!mainChar.look[category][slot]) console.error(`mainChar.look[${category}][${slot}] not found!`)
                return `<td align="center">[[${mainChar.look[category][slot].name === '' ? '-' : `${mainChar.look[category][slot].name.toUpperFirst()}`}->${slot} Clothes]]</td>`
            }
            let rows = (headers) => headers.reduce((a, c) => `${a}${row(c)}`, '')

            return [
                `<table width="100%" align="center" border="5" class="wardrobe-clothes">`,
                `<caption>${name.toUpperFirst()}: </caption>`,
                header,
                `<tbody><tr>${rows(headers)}</tr></tbody>`,
                `</table>`
            ].join(joiner)
        }

        let sections = [
            {name: 'Clothes', category: 'clothes', headers: ['head', 'body', 'lowerbody', 'legs', 'feet']},
            {name: 'Lingerie', category: 'clothes', headers: ['bra', 'panties']},
            {name: 'Accessories', category: 'accessories', headers: ['neck', 'fingers', 'arms', 'ears', 'eyes']},
            {name: 'Erotic accessories', category: 'erotic_accessories', headers: ['navel', 'nipple', 'butt', 'mouth', 'clit']},
        ]

        let out = [
            `<div class="default-image-wrapper"><img src="pics/object/wardrobe.jpg"></div>`,
        ]

        sections.forEach(({name, category, headers}) => out.push(section({name, category, headers, mainChar})))
        out.push('[[Back->Bedroom]]')

        return out.join(joiner)
    }
}

window.Wardrobe = Wardrobe
