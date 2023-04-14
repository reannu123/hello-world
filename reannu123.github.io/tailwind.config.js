/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{tsx,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "300% 300%",
      },
      fontFamily: {
        Comfortaa: ["Comfortaa", "cursive"],
        NanumMyeongjo: ["Nanum Myeongjo", "serif"],
        PublicSans: ["Public Sans", "sans-serif"],
        NotoSerif: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
