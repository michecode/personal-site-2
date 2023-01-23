/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Garet'],
			},
			colors: {
				transparent: 'transparent',
				black: '#000',
				white: '#FFF',
				offwhite: '#FFF8F4',
				offblack: '#1D1D1F',
			},
			animation: {
				breathe: 'breathe 60s ease-in-out infinite',
				mobileBreathe: 'mobileBreathe 60s ease-in-out infinite',
			},
			keyframes: {
				breathe: {
					'0%, 100%': { transform: 'scale(1) skew(0)' },
					'50%': { transform: 'scale(1.2) skew(10deg, 5deg)' },
				},
				mobileBreathe: {
					'0% 100%': { transform: 'scale(1) skew(0)' },
					'50%': { transform: 'scale(1.5) skew(5deg, 10deg)' },
				},
			},
		},
	},
	plugins: [],
};
