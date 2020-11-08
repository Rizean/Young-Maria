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

