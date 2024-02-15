/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lightFont: ["Light Font", "ProximaNova"],

        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
