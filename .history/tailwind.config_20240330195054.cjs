/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		fontSize: {
			sm: ['16px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
			xxs: '16px',
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
			   'html': { fontSize: "16px" },
			   'body': { fontSize: "16px" },
			   'p': { fontSize: "16px" },
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
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  } 
}

