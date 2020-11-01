class MediaCatalog {
    constructor(media = []) {
        this.catalog = new Map()
        media.forEach(({key, root = '', media, alt = '', range}) => {
            if (this.catalog.has(key)) return console.warn(`MediaCatalog skipping ${key} as it already exist!`)
            if (root.endsWith('/')) root = root.slice(0, -1)
            if (range) {
                let {min, max, ext, start = ''} = range
                media = []
                for (let i = min; i <= max; i++) media.push(`${start}${i}.${ext}`)
            }
            if (!Array.isArray(media)) media = [media]
            media = media.map((src) => {
                if (src.startsWith('/')) src = src.slice(1)
                return src
            })

            this.catalog.set(key, {root, alt, media})
        })
    }

    showImage({key, random = true, index = 0, src, alt = ''}) {
        let _src = this.getImage({key, random, index})
        return `<div class="default-image-wrapper"><img src="${_src || src}" alt="${alt}"></div>`
    }

    getImage({key, random = true, index = 0}) {
        if (key && !this.catalog.has(key)) return
        let data = this.catalog.get(key)
        index = random ? Math.floor(Math.random() * data.media.length) : index
        if (index >= data.media[index].length) index = 0
        return data.root !== '' ? `${data.root}/${data.media[index]}` : data.media[index]
    }
}

window.MediaCatalog = MediaCatalog
