// /** @type {import('tailwindcss').Config} */
// import { defineConfig } from 'vite';
// import svgr from 'vite-plugin-svgr';
// export default {
//   plugins: [svgr()],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   important: true, 
//   theme: {
//     extend: {
//       boxShadow: {
//      'instagram-bottom-glow': '0 5px 10px rgba(236, 72, 153, 0.7), 0 10px 20px rgba(239, 68, 68, 0.5), 0 15px 30px rgba(252, 211, 77, 0.4)'
//      },

//       fontFamily: {
//         palanquin: ['Palanquin Dark', 'sans-serif'],
//         montserrat: ['Montserrat', 'sans-serif'],
//         sacramento: ['Sacramento', 'cursive'], // Separate Sacramento font correctly
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr()],
  css: {
    // Add TailwindCSS as a PostCSS plugin
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Match all files for tailwind to process
  ],
  important: true, // Add specificity to TailwindCSS classes
  theme: {
    extend: {
      boxShadow: {
        'instagram-bottom-glow': '0 5px 10px rgba(236, 72, 153, 0.7), 0 10px 20px rgba(239, 68, 68, 0.5), 0 15px 30px rgba(252, 211, 77, 0.4)',
      },
      fontFamily: {
        palanquin: ['Palanquin Dark', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sacramento: ['Sacramento', 'cursive'], // Ensure Sacramento is separated properly
      },
    },
  },
  plugins: [],
});
