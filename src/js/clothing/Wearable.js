class Wearable extends GameObject {
    constructor(config) {
        super(config)
        this.mediaPaperDollKey = ''
        this.allure = ''
        this.obscenity = ''
        this.price = ''
        this.type = ''

        this.fromJSON(config)
    }
}

window.Wearable = Wearable
