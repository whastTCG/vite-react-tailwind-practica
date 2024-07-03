/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration:{
        'dark-mode': '500ms',
        'light-mode': '500ms',
      }
    },
  },
  plugins: [],
  darkMode:'class'
}