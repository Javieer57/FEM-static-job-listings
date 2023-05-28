const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*", "./src/components/*"],
  theme: {
    extend: {
      screens: {
        sm: "23.4375rem", // 375px
        lg: "90rem", // 1440px
      },
      colors: {
        cyan: "#5CA5A5",
        dark: "#2B3939",
        gray: "#7C8F8F",
        cyanLight: "#EFFAFA",
        // cyan100: "#f2f8fc",
        // cyan200: "#EFFAFA",
        // cyan300: "#a5c5c5",
        // cyan500: "#5CA5A5",
        // cyan800: "#2B3939",
      },
      fontSize: {
        sm: "0.8125rem", // 13px
        base: "0.9375rem", // 15px
        md: "1rem", // 16px
        xl: "1.375rem", // 22px
      },
    },
  },
  plugins: [],
};
