"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/scripts/build-css.cts
// @ts-nocheck
const fs_1 = require("fs");
const path = __importStar(require("path"));
const postcss_1 = __importDefault(require("postcss"));
async function buildCss() {
    const tailwindConfig = (await Promise.resolve().then(() => __importStar(require('../tailwind.config.ts')))).default;
    const tailwindcss = (await Promise.resolve().then(() => __importStar(require('tailwindcss')))).default;
    const inputPath = path.resolve('./src/styles.css');
    const outputPath = path.resolve('./dist/styles.css');
    const inputCss = (0, fs_1.readFileSync)(inputPath, 'utf-8');
    const result = await (0, postcss_1.default)([tailwindcss(tailwindConfig)]).process(inputCss, {
        from: inputPath,
        to: outputPath,
    });
    (0, fs_1.mkdirSync)(path.dirname(outputPath), { recursive: true });
    (0, fs_1.writeFileSync)(outputPath, result.css);
    console.log('✅ dist/styles.css generated successfully');
}
buildCss().catch(err => {
    console.error(err);
    process.exit(1);
});
