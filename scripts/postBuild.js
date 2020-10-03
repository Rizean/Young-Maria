const fs = require('fs')
let file = fs.readFileSync('./YoungMaria8.0.0_Offline.tw2.html', 'UTF8')

file = file
    .replace('StoryMenu#', 'StoryMenu')
    .replace('StoryAuthor#', 'StoryAuthor')

fs.writeFileSync('./YoungMaria8.0.0_Offline.tw2.html', file)
