/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-hover": "#5932EA",
        "dark-green": "#00AC4F",
        "light-grey": "#9197B3",
        "light-green": "#16C098",
        "bg-light-green": "#F9FBFF",
        "ligt-pink": "#EAABF0",
        "dark-blue": "#4623E9",
        "check-box": "#EF498F1F",
        "grey-color": "#F6F6F6",
        "green-light": "#6BC62D",
        "input-text-color": "#1A0710A6",
        "label-color": "#8C8387",
        "input-color": "#1A0710D9",
      },
      backgroundImage: {
        "hero-pattern": "url('Image.png')",
      },
    },
  },
  plugins: [],
};
