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
        "cyan-100": "#f2f8fc",
        "cyan-200": "#e5f0f0",
        "cyan-300": "#a5c5c5",
        "cyan-500": "#66b2b2",
        "cyan-800": "#2b4242",
      },
      fontSize: {
        sm: "0.9375rem",
      },
      fontFamily: {
        sans: ["var(--font-spartan)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
