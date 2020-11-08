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
        if (! item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this[type][subType][item.name] = item;
        this.available.push(item.name);
    }
    addItem(itemType, item) {
        if (! item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.clothes[itemType][item.name] = item;
        this.available.push(item.name);
    }

    addAccessory(itemType, item) {
        if (! item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.accessories[itemType][item.name] = item;
        this.available.push(item.name);
    }
    addEroticAccessory(itemType, item) {
        if (! item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.erotic_accessories[itemType][item.name] = item;
        this.available.push(item.name);
    }
    addLingerie(itemType, item) {
        if (! item.hasOwnProperty('name')) {
            alert('"name" property must be provided!');
            return;
        }

        this.lingerie[itemType][item.name] = item;
        this.available.push(item.name);
    }
}
window.Wardrobe = Wardrobe

