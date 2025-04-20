/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
		  fontFamily: {
			sans: ["var(--font-roboto)", "sans-serif"], // hoặc geist
			mono: ["var(--font-geist-mono)", "monospace"],
		  },
		},
	  },
	  
	plugins: [require("tailwindcss-animate")],
  };
  