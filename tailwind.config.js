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
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1370px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
