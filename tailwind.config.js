/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
        },
        green: {
          200: '#c6f6d5',
        },
        gray: {
          50: '#f9fafb',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}