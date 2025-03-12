import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@fasto/ui/dist/**/*.js',
    './node_modules/@fasto/crud/dist/**/*.js',
    './node_modules/@fasto/boilerplate/dist/**/*.js',
  ],
  safelist: [
    {
      pattern: /ant-./, // 👈  This includes bg of all colors and shades
    },
    {
      // for @fasto/button
      pattern: /(text|bg|border)-(primary|black|success|secondary|danger)/,
      variants: ['hover'],
    },
  ],

  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        midnight: '#121063',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
          outline: 'hsl(var(--primary) / <alpha-value>)',
        },

        black: {
          DEFAULT: '#000',
          foreground: '#fff',
          outline: '#000',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground))',
          outline: 'hsl(var(--secondary-foreground))',
        },
        danger: {
          DEFAULT: 'hsl(var(--danger) / <alpha-value>)',
          foreground: 'hsl(var(--danger-foreground) / <alpha-value>)',
          outline: 'hsl(var(--danger) / <alpha-value>)',
        },
        success: {
          DEFAULT: '#22bb33',
          foreground: '#fff',
          outline: '#22bb33',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}

export default config
