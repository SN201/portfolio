/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
     'instagram-bottom-glow': '0 5px 10px rgba(236, 72, 153, 0.7), 0 10px 20px rgba(239, 68, 68, 0.5), 0 15px 30px rgba(252, 211, 77, 0.4)'
     },

      fontFamily: {
        palanquin: ['Palanquin Dark', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sacramento: ['Sacramento', 'cursive'], // Separate Sacramento font correctly
      },
    },
  },
  plugins: [],
}