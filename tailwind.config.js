/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue: '#d9d9ff',
        lightBlue:'#f5f6f1',
        lightPink: '#fee4c9',
        darkBlack: '#010101',
        white: '#fefefe',
      }
    },
  },
  plugins: [],
}

