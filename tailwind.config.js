/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "gray-510": "#4D4D4D",
        "black-910": "#161616",
        "gray-350": "#AAA",
        "black-920": "#252525",
      },
      backgroundImage: {
        home: "src/assets/mountain.png",
      },
    },
  },
  plugins: [],
};
