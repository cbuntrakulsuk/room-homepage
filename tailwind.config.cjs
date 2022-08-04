/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}", "./js/**/*.{html,js}"],
  theme: {
    screens: {
      md: "500px",
      lg: "1000px",
    },
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
