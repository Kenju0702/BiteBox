/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
	  "./app/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	],
	theme: {
    	extend: {
    		fontFamily: {
    			sans: [
    				'var(--font-roboto)',
    				'sans-serif'
    			],
    			mono: [
    				'var(--font-geist-mono)',
    				'monospace'
    			]
    		},
    		colors: {
				border: "hsl(var(--border))", 
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		}
    	}
    },
	  
	plugins: [require("tailwindcss-animate")],
  };
  