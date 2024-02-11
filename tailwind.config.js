/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        newWhite: " hsl(0, 0%, 100%)",
        lightpink: "hsl(275, 100%, 97%)",
        lightPurple: "hsl(292, 16%, 49%)",
        darkPurple: " hsl(292, 42%, 14%)",
      }
    },
  },
  plugins: [],
}

