/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		fontSize: {
			sm: ['18px', '20px'],
			base: ['18px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
			xxs: '18px',
			},
		fontFamily: {
			display: [
			"IBM Plex Serif",
			...defaultTheme.fontFamily.serif,
			...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
			],
			body: [
			"IBM Plex Serif",
			...defaultTheme.fontFamily.serif,
			...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
			],
		},
		},
	},
	plugins: [
		plugin(function({ addBase }) {
			addBase({
			'html': { fontSize: "18px" },
			'body': { fontSize: "18px" },
			'p': { fontSize: "18px" },
			})
		}),
		require('tailwindcss'),
		require("@tailwindcss/typography"),
		require("daisyui"),
		require('tailwindcss-base-font-size')({
			baseFontSize: 16,
		}),
	],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: ["light", "dark", "cupcake"], // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	} 
}

