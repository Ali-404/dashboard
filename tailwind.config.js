/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: { 'light_cyan': { DEFAULT: '#c9f2fd', 100: '#034558', 200: '#068baf', 300: '#1ac7f7', 400: '#71dcfa', 500: '#c9f2fd', 600: '#d4f4fd', 700: '#dff7fe', 800: '#e9fafe', 900: '#f4fcff' }, 'white': { DEFAULT: '#fbfdff', 100: '#003265', 200: '#0065ca', 300: '#3097ff', 400: '#95caff', 500: '#fbfdff', 600: '#fbfdff', 700: '#fcfdff', 800: '#fdfeff', 900: '#fefeff' }, 'uranian_blue': { DEFAULT: '#9ed2f0', 100: '#0b3045', 200: '#155f8a', 300: '#208fce', 400: '#59b2e5', 500: '#9ed2f0', 600: '#b1dbf3', 700: '#c5e4f6', 800: '#d8edf9', 900: '#ecf6fc' }, 'raisin_black': { DEFAULT: '#1f2029', 100: '#060608', 200: '#0c0d10', 300: '#121318', 400: '#191921', 500: '#1f2029', 600: '#44475b', 700: '#6a6e8d', 800: '#9b9db4', 900: '#cdced9' }, 'jet': { DEFAULT: '#33343c', 100: '#0a0b0c', 200: '#151518', 300: '#1f2024', 400: '#292a30', 500: '#33343c', 600: '#585a68', 700: '#7e8091', 800: '#a9abb6', 900: '#d4d5da' } }
    },
  },
  plugins: [],
}

