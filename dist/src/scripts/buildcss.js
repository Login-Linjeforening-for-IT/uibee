import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import postcss from 'postcss';
async function buildCss() {
    const tailwindModule = await import(new URL('../../tailwind.config.ts', import.meta.url).href);
    const tailwindConfig = tailwindModule.default ?? tailwindModule;
    const tailwindPostcss = (await import('@tailwindcss/postcss')).default;
    const inputPath = path.resolve('./src/globals.css');
    const outputPath = path.resolve('./dist/globals.css');
    const inputCss = readFileSync(inputPath, 'utf-8');
    const result = await postcss([tailwindPostcss(tailwindConfig)]).process(inputCss, {
        from: inputPath,
        to: outputPath,
    });
    mkdirSync(path.dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, result.css);
    console.log('🐝 dist/styles.css generated successfully');
}
buildCss().catch(err => {
    console.error(err);
    process.exit(1);
});
