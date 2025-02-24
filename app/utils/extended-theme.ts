import { type Config } from 'tailwindcss'

export const extendedTheme = {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		orange: '#B94E10',
		orangeLight: '#ed732c',
		white: '#f9f5e6',
		black: '#280004',
		brown: '#302B28',
		green: '#38564b',
		greenLight: '#466c5e',
	},
	fontFamily: {
		sans: [
			"Archivo"
		],
	},
	keyframes: {
		'caret-blink': {
			'0%,70%,100%': { opacity: '1' },
			'20%,50%': { opacity: '0' },
		},
		'fadeIn': {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' }
		},
		'grow': {
			'0%': { scale: '0' },
			'100%': { scale: '100%' }
		},
		'halfSpin': {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(180deg) '}
		}
	},
	animation: {
		'caret-blink': 'caret-blink 1.25s ease-out infinite',
	},
} satisfies Config['theme']
