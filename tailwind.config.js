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
        primary: "#D367C1",
        secondary: "#6B4748",
        purpleLight: "#D367C1",
        purpleDark: "#AB79D6",
        backgroundLight: "#27272C",
        backgroundDark: "#1E1C22",
        border: "#00BBCB",
      },

      fontFamily: {
        body: ["Lobster"],
        head: ["Aclonica"],
      },
    },
  },
  plugins: [],
};
