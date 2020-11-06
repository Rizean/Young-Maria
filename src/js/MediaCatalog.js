class MediaCatalog {
    constructor(media = []) {
        this.catalog = new Map()
        media.forEach(({key, root = '', media, alt = '', range, variant}) => {
            if (this.catalog.has(key)) return console.warn(`MediaCatalog skipping ${key} as it already exist!`)
            if (root.endsWith('/')) root = root.slice(0, -1)
            if (range) {
                let {min, max, ext, start = ''} = range
                media = []
                for (let i = min; i <= max; i++) media.push(`${start}${i}.${ext}`)
            }
            if (variant) {
                let {base, variants, ext} = variant
                let once = false
                variants.forEach(v => {
                    // handle a call where the variant is missing
                    if (!once) {
                        once = true
                        this.catalog.set(`${key}`, {root, alt, media: [`${base}${v}.${ext}`]})
                    }
                    this.catalog.set(`${key}.${v}`, {root, alt, media: [`${base}${v}.${ext}`]})
                })
                return
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

    getImage({key, random = true, index = 0, variant}) {
        variant = variant && variant !== '' ? variant : undefined
        let _key = variant ? `${key}.${variant}` : key
        if (_key && !this.catalog.has(_key)) {
            if (variant && !this.catalog.has(key)) return
            _key = key
        }
        let data = this.catalog.get(_key)
        index = random ? Math.floor(Math.random() * data.media.length) : index
        if (index >= data.media[index].length) index = 0
        return data.root !== '' ? `${data.root}/${data.media[index]}` : data.media[index]
    }
}

window.MediaCatalog = MediaCatalog
