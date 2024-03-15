import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#121214',
        'gray-800': '#202024',
        'gray-300': '#c4c4cc',
        'gray-100': '#e1e1e6',
        'green-500': '#00875f',
        'green-300': '#00B37E',
      },
      fontSize: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
