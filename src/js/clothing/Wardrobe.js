window.Wardrobe = function (config) {
    this.clothes = {};
    this.accessories = {};
    this.erotic_accessories = {};
    this.lingerie = {};
    this.suits = {};
    this.available = [
        'Usual clothes',
        'School uniform',
        'Plain gold ring'
    ];

    Object.keys(config).forEach(function (pn) {
        this[pn] = clone(config[pn]);
    }, this);
};

Wardrobe.prototype.clone = function () {
    return new Wardrobe(this);
};

Wardrobe.prototype.toJSON = function () {
    var ownData = {};
    Object.keys(this).forEach(function (pn) {
        ownData[pn] = clone(this[pn]);
    }, this);
    return JSON.reviveWrapper('new Wardrobe($ReviveData$)', ownData);
};

Wardrobe.prototype.add = function(type, subType, item) {
    if (! item.hasOwnProperty('name')) {
        alert('"name" property must be provided!');
        return;
    }

    this[type][subType][item.name] = item;
    this.available.push(item.name);
}

Wardrobe.prototype.addItem = function(itemType, item) {
    if (! item.hasOwnProperty('name')) {
        alert('"name" property must be provided!');
        return;
    }

    this.clothes[itemType][item.name] = item;
    this.available.push(item.name);
};

Wardrobe.prototype.addAccessory = function(itemType, item) {
    if (! item.hasOwnProperty('name')) {
        alert('"name" property must be provided!');
        return;
    }

    this.accessories[itemType][item.name] = item;
    this.available.push(item.name);
};

Wardrobe.prototype.addEroticAccessory = function(itemType, item) {
    if (! item.hasOwnProperty('name')) {
        alert('"name" property must be provided!');
        return;
    }

    this.erotic_accessories[itemType][item.name] = item;
    this.available.push(item.name);
};
