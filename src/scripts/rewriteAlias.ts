import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'

const DIST_DIR = path.resolve('dist')
const IMAGES_DIR = path.join(DIST_DIR, 'images')

const jsFiles = globSync(`${DIST_DIR}/**/*.js`, { nodir: true })

jsFiles.forEach((file) => {
    let content = fs.readFileSync(file, 'utf-8')
    const fileDir = path.dirname(file)

    content = content.replace(/from ['"]@images\/(.*?)['"]/g, (_, p1) => {
        const relative = path.relative(fileDir, path.join(IMAGES_DIR, p1)).replace(/\\/g, '/')
        return `from '${relative}'`
    })

    content = content.replace(/src: (['"])\/images\/(.*?)\1/g, (_, __, p1) => {
        const relative = path.relative(fileDir, path.join(IMAGES_DIR, p1)).replace(/\\/g, '/')
        return `src: '${relative}'`
    })

    fs.writeFileSync(file, content, 'utf-8')
})

console.log('🐝 Inline image aliases rewritten to relative paths')
