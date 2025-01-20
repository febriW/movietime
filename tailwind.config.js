/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      largePc: "1441px"
    },
    extend: {
        colors: {
            baseColor1: 'rgba(30,35,43, 0.9)',
            baseColor2: 'rgba(41,46,53,1)',
            titleCard: 'rgba(146, 146, 146, 1)',
            subtitleCard: 'rgba(146, 146, 146, 1)',
            cardHover: 'rgba(0, 0, 0, 0.8)',
            buttonCard: 'rgba(255, 0, 0, 1)'
        },
        maxWidth: {
            desktopMax: '1440px',
        },
        fontFamily: {
          sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
}

