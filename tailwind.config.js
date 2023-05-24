/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-black': '#0F141F',
				'custom-blue': '#F4F8FF',
				'custom-blue-2': '#2C64E4',
				'custom-grey': '#CCCCCC',
				'custom-grey-2': '#596B8D',
				'card-sidebar': '#2E3A54',
			},
		},
	},
	plugins: [],
};
