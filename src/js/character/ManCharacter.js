window.ManCharacter = function (config) {
    this.gender = variables().GENDER_MALE;
    this.genitals = variables().GENITALS_MALE;
    this.weight = variables().DEFAULT_WEIGHT + 10;
    this.height = variables().DEFAULT_HEIGHT + 5;

    Object.keys(config).forEach(function (pn) {
        if (pn === 'paperDoll') return
        this[pn] = clone(config[pn]);
    }, this);
};

ManCharacter.prototype = Object.create(BasicCharacter.prototype);
ManCharacter.prototype.constructor = BasicCharacter;

ManCharacter.prototype.clone = function () {
    return new BasicCharacter(this);
};

ManCharacter.prototype.toJSON = function () {
    var ownData = {};

    Object.keys(this).forEach(function (pn) {
        if (pn === 'paperDoll') return
        ownData[pn] = clone(this[pn]);
    }, this);

    return JSON.reviveWrapper(
        'new BasicCharacter($ReviveData$)', ownData
    );
};

