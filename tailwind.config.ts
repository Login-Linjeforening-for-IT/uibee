import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const tailwindConfig: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: { extend: {} },
    plugins: [typography],
}

export default tailwindConfig
