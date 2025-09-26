"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindcss_1 = require("tailwindcss");
var tailwindConfig = (0, tailwindcss_1.default)({
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: { extend: {} },
    plugins: [],
});
exports.default = tailwindConfig;
