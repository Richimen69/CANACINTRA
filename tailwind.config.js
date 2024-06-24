/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#259b9b", // Color primario
        secondary: "#494949",
        tertiary: "#26355A",
        principal: "#f2fbfa",
      },
    },
  },
  plugins: [],
};
