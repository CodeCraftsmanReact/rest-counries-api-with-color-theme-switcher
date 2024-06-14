/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      dropShadow:{
        'custom': '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
      },
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

