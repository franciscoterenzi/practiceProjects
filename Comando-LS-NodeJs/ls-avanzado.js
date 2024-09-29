// usamos process
const fs = require('node:fs/promises')
const path = require('node:path')
const folder=process.argv[2] ?? '.'

// fs.readdir(folder)
//     .then(files =>{
//         files.forEach(file => {
//             console.log(file)
//         })
//     })
//     .catch(err =>{
//         if(err){
//         console.error('No se encuentra ese directorio', err)
//         return;
//     }
//     })
async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    }catch {
        console.log(`no se pudo leer el ${folder}`)
        process.exit(1)
    }
    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file)
        let fileStats
        try {
            fileStats = await fs.stat(filePath)
        }catch {
            console.log(`no se pudo leer el ${filePath}`)
            process.exit(1)
        }

        const isDirectory = fileStats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = fileStats.size
        const fileModified=fileStats.mtime.toLocaleString()


        return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`
    })

        const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo)
    });
}

ls(folder)