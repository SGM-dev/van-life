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
        lightgray: "#D3D3D3",
        "orange-430": "#FF8C38",
        "orange-120": "#FFCC8D",
      },
      backgroundImage: {
        home: "linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%), url(./src/assets/mountain.png)",
      },
    },
  },
  plugins: [],
};
