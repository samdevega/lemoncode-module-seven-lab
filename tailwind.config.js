/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        stone: "url('/bg.png')",
        mk: 'linear-gradient(#ffff00, #ffff00 4%, #f5d51f 20%, #d6232c 80%)',
      },
      fontFamily: {
        spectralsc: 'Spectral SC',
      }
    },
  },
  plugins: [],
}
