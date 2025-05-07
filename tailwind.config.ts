
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				tiffany: {
					light: '#B2E5E3',
					DEFAULT: '#0ABAB5',
					dark: '#068B87'
				},
				cyber: {
					red: '#FF0033',
					blue: '#0088FF',
					green: '#00FF9F',
					purple: '#9D00FF',
					yellow: '#FFDD00'
				}
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
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 5px rgba(255, 55, 55, 0.7)'
					},
					'50%': {
						opacity: '0.8',
						boxShadow: '0 0 20px rgba(255, 55, 55, 0.9), 0 0 40px rgba(255, 55, 55, 0.4)'
					}
				},
				'glitch': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'20%': {
						transform: 'translateX(-2px)'
					},
					'40%': {
						transform: 'translateX(2px)'
					},
					'60%': {
						transform: 'translateX(-2px)'
					},
					'80%': {
						transform: 'translateX(2px)'
					}
				},
				'scan-line': {
					'0%': {
						top: '0%'
					},
					'100%': {
						top: '100%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 3s infinite',
				'glitch': 'glitch 0.5s infinite',
				'scan-line': 'scan-line 8s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
