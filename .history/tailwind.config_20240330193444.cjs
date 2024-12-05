/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
			xxs: '14px',
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
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  } 
}

