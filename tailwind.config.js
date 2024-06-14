/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
            main: "hsl(209, 23%, 22%)",
            background: "hsl(207, 26%, 17%)",
            text: "hsl(200, 15%, 8%)"
        },
        gray:{
          input: "hsl(0, 0%, 52%)",
          light: "hsl(0, 0%, 98%)"
        }
      }
    },
  },
  plugins: [],
}

