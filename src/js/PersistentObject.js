class PersistentObject {
    constructor(config) {

    }

    fromJSON(config) {
        Object.keys(config).forEach((key) => this[key] = clone(config[key]))
    }

    clone() {
        return eval(`()=>new ${this.constructor.name}(this)`)()
    }

    toJSON() {
        let ownData = {};
        Object.keys(this).forEach((key) => ownData[key] = clone(this[key]))
        return JSON.reviveWrapper(`new ${this.constructor.name}($ReviveData$)`, ownData)
    }
}

window.PersistentObject = PersistentObject
