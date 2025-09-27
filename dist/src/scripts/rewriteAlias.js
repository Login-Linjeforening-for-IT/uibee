import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
const DIST_DIR = path.resolve('dist');
const IMAGES_DIR = path.join(DIST_DIR, 'images');
const jsFiles = globSync(`${DIST_DIR}/**/*.js`, { nodir: true });
jsFiles.forEach((file) => {
    let content = fs.readFileSync(file, 'utf-8');
    const fileDir = path.dirname(file);
    content = content.replace(/from ['"]@images\/(.*?)['"]/g, (_, p1) => {
        const targetPath = path.join(IMAGES_DIR, p1);
        const relative = path.relative(fileDir, targetPath).replace(/\\/g, '/');
        return `from '${relative}'`;
    });
    const inlineImages = content.match(/src: ['"]images\/(.*?)['"]/g);
    if (inlineImages) {
        inlineImages.forEach((match) => {
            const imgPathMatch = match.match(/src: ['"]images\/(.*?)['"]/);
            if (imgPathMatch) {
                const imgRelativePath = imgPathMatch[1];
                const resolvedPath = path.join(IMAGES_DIR, imgRelativePath);
                console.error(`⚠️  Detected inline image in ${file}: ${match}`);
                console.error(`   Resolved file path: ${resolvedPath}`);
                console.error(`   This is not allowed. Use 'import image from '../../images/${imgRelativePath}'' instead.`);
            }
        });
    }
    fs.writeFileSync(file, content, 'utf-8');
});
console.log('🐝 Image imports rewritten');
console.log('🐝 Build complete');
