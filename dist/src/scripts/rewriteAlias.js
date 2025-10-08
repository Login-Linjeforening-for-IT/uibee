import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
const DIST_DIR = path.resolve('dist');
const SRC_DIR = path.join(DIST_DIR, 'src');
const jsFiles = globSync(`${DIST_DIR}/**/*.js`, { nodir: true });
jsFiles.forEach((file) => {
    let content = fs.readFileSync(file, 'utf-8');
    const fileDir = path.dirname(file);
    // Handle @utils/* imports
    content = content.replace(/from ['"]@utils\/(.*?)['"]/g, (_, p1) => {
        const targetPath = path.join(SRC_DIR, 'utils', p1);
        const relative = path.relative(fileDir, targetPath).replace(/\\/g, '/');
        return `from '${relative}'`;
    });
    // Handle @components/* imports
    content = content.replace(/from ['"]@components\/(.*?)['"]/g, (_, p1) => {
        const targetPath = path.join(SRC_DIR, 'components', p1);
        const relative = path.relative(fileDir, targetPath).replace(/\\/g, '/');
        return `from '${relative}'`;
    });
    // Handle @hooks/* imports
    content = content.replace(/from ['"]@hooks\/(.*?)['"]/g, (_, p1) => {
        const targetPath = path.join(SRC_DIR, 'hooks', p1);
        const relative = path.relative(fileDir, targetPath).replace(/\\/g, '/');
        return `from '${relative}'`;
    });
    fs.writeFileSync(file, content, 'utf-8');
});
console.log('🐝 All path aliases rewritten');
console.log('🐝 Build complete');
