const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*", "./src/components/*"],
  theme: {
    extend: {
      // sm: 375px, lg: 1440px
      screens: {
        sm: "23.4375rem",
        lg: "90rem",
      },
      colors: {
        cyan100: "#f2f8fc",
        cyan200: "#e5f0f0",
        cyan300: "#a5c5c5",
        cyan500: "#5CA5A5",
        cyan800: "#2B3939",
      },
      fontSize: {
        // sm: "0.9375rem",
      },
      fontFamily: {
        sans: ["var(--font-spartan)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
