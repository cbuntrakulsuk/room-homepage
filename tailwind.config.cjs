/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: "hsl(0, 0%, 63%)",
        darkGray: "hsl(0, 0%, 27%)",
      },
      fontFamily: {
        leagueSpartan: "League Spartan",
      },
    },
  },
  plugins: [],
};
