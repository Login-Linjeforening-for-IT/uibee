"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require("path");
var postcss_1 = require("postcss");
var tailwindcss_1 = require("tailwindcss");
var tailwind_config_js_1 = require("../tailwind.config.js"); // make sure it's ESM-compatible
var inputPath = path.resolve('./src/styles.css');
var outputPath = path.resolve('./dist/styles.css');
var inputCss = (0, fs_1.readFileSync)(inputPath, 'utf-8');
// @ts-ignore
(0, postcss_1.default)([(0, tailwindcss_1.default)(tailwind_config_js_1.default)])
    .process(inputCss, { from: inputPath, to: outputPath })
    .then(function (result) {
    (0, fs_1.mkdirSync)(path.dirname(outputPath), { recursive: true });
    (0, fs_1.writeFileSync)(outputPath, result.css);
    console.log('✅ dist/styles.css generated successfully');
})
    .catch(function (err) {
    console.error(err);
    process.exit(1);
});
