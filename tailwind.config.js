/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "400px",

      md: "547px",

      lg: "768px",

      xl: "1024px",

      xxl: "1680px",
    },
    extend: {
      colors: {
        primary: "#F6BFC2",
        secondary: "#6B4748",
      },

      fontFamily: {
        body: ["Lobster"],
        head: ["Aclonica"],
      },
    },
  },
  plugins: [],
};
