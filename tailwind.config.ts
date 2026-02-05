import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': {
          DEFAULT: '#233C6F',
          50: '#EBF0F7',
          100: '#D6E0EF',
          200: '#ADC1DF',
          300: '#84A2CF',
          400: '#5B83BF',
          500: '#3A649F',
          600: '#233C6F',
          700: '#1B2F57',
          800: '#13213F',
          900: '#0B1427',
        },
        'vibrant-orange': {
          DEFAULT: '#EF5E33',
          50: '#FEF0EB',
          100: '#FDE1D7',
          200: '#FBC3AF',
          300: '#F9A587',
          400: '#F7875F',
          500: '#EF5E33',
          600: '#D44A20',
          700: '#A33918',
          800: '#722810',
          900: '#411708',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
