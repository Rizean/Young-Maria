window.Inventory = function (config) {
    this.categories = [
        'cosmetics',
        'pharmacy',
        'eroticItems',
        'techItems',
        'grocery',
    ];

    this.cosmetics = {};
    this.pharmacy = {};
    this.eroticItems = {};
    this.techItems = {};
    this.grocery = {};
    this.available = [];

    Object.keys(config).forEach(function (pn) {
        this[pn] = clone(config[pn]);
    }, this);
};

Inventory.prototype.clone = function () {
    return new Inventory(this);
};

Inventory.prototype.toJSON = function () {
    var ownData = {};
    Object.keys(this).forEach(function (pn) {
        ownData[pn] = clone(this[pn]);
    }, this);
    return JSON.reviveWrapper('new Inventory($ReviveData$)', ownData);
};

Inventory.prototype.add = function(category, item) {
    if (! item.hasOwnProperty('name')) {
        alert('Item must contains a prop with name "name"');
        return;
    }

    this[category][item.name] = item;
};

Inventory.prototype.addCount = function(category, item) {
    this[category][item.name].count += item.count;
};

Inventory.prototype.has = function(category, itemName) {
    return this[category].hasOwnProperty(itemName);
};

Inventory.prototype.getAvailableLipstickColors = function() {
    let colors = [];

    for (const key in this.cosmetics) {
        if (this.cosmetics[key].name.includes('lipstick') || this.cosmetics[key].name.includes('balm')) {
            if (this.cosmetics[key].count) {
                colors.push(this.cosmetics[key].name);
            }
        }
    }

    if (colors.length === 0) {
        return null;
    }

    colors.push('none');

    return colors;
};
