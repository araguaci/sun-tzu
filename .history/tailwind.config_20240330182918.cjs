/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			display: [
			"IBM Plex Mono", "monospace",
			  ...defaultTheme.fontFamily.serif,
			  ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
			],
			body: [
			"IBM Plex Mono", "monospace",
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
