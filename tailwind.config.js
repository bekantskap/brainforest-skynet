/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primarycolor: "#D1CABD",
      textcolor: "#131315",
      accentcolor: "#5C7457",
      white: "#E0E0E0",
      transparent: "transparent",
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
