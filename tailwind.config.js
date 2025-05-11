/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // if using shadcn, include this too:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Serif", "serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
