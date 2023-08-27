/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#00E5A1",
        darkBlue: "#1B243F",
        lightWhite: "rgb(205, 205, 205)",
        lightGray: "#A5A5A5",
      },
    },
  },
  plugins: [],
};
