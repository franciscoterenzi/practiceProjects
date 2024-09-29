
const fs = require('node:fs')

fs.readdir('.', (err, files) =>{
    if (err){
        console.error('No se puede leer el directorio',err)
        return
    }
    files.forEach(file =>{
        console.log(file)
    })
})
