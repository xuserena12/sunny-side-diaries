/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/assets/images/kitchen.png')",
        chooseEgg: "url('/src/assets/images/choose_egg.png')",
      },
      colors : {
        yellow: "#FFF7CB",
        brown: "#4F2D2D",
        cream: "#FFFDF8",
      }
    },
  },
  plugins: [],
}

