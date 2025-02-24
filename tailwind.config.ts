import { type Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import radixPlugin from 'tailwindcss-radix'
import { extendedTheme } from './app/utils/extended-theme.ts'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
      orange: '#B94E10',
      orangeLight: '#ed732c',
      white: '#f9f5e6',
      black: '#000000',
      brown: '#302B28',
      green: '#38564b'
		},
		extend: {
			...extendedTheme,
			fontFamily: {
				sans: ['var(--font-base)']
			}
		},
	},
	plugins: [animatePlugin, radixPlugin],
} satisfies Config
