class Game extends PersistentObject {
    constructor(config) {
        super(config)
        this.data = 'a'

        this.fromJSON(config)
    }

}

window.Game = Game
