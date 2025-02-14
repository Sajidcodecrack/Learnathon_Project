/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			background: {
    				DEFAULT: 'hsl(var(--background))',
    				dark: 'hsl(var(--background-dark))',
    				light: 'hsl(var(--background-light))'
    			},
    			foreground: {
    				DEFAULT: 'hsl(var(--foreground))',
    				dark: 'hsl(var(--foreground-dark))',
    				light: 'hsl(var(--foreground-light))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))',
    				dark: 'hsl(var(--card-dark))',
    				light: 'hsl(var(--card-light))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))',
    				dark: 'hsl(var(--popover-dark))',
    				light: 'hsl(var(--popover-light))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))',
    				dark: 'hsl(var(--secondary-dark))',
    				light: 'hsl(var(--secondary-light))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))',
    				dark: 'hsl(var(--muted-dark))',
    				light: 'hsl(var(--muted-light))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))',
    				dark: 'hsl(var(--accent-dark))',
    				light: 'hsl(var(--accent-light))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))',
    				dark: 'hsl(var(--destructive-dark))',
    				light: 'hsl(var(--destructive-light))'
    			},
    			border: {
    				DEFAULT: 'hsl(var(--border))',
    				dark: 'hsl(var(--border-dark))',
    				light: 'hsl(var(--border-light))'
    			},
    			input: {
    				DEFAULT: 'hsl(var(--input))',
    				dark: 'hsl(var(--input-dark))',
    				light: 'hsl(var(--input-light))'
    			},
    			ring: {
    				DEFAULT: 'hsl(var(--ring))',
    				dark: 'hsl(var(--ring-dark))',
    				light: 'hsl(var(--ring-light))'
    			},
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			grid: {
    				light: 'rgba(38, 50, 56, 0.1)',
    				dark: 'rgba(230, 255, 230, 0.1)'
    			}
    		},
    		fontFamily: {
    			heading: [
    				'Anton',
    				'sans-serif'
    			],
    			secondary: [
    				'Roboto',
    				'sans-serif'
    			],
    			praise: [
    				'Praise',
    				'cursive'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
  };