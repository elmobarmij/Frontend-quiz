/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyDark: "rgb(65 84 111 / 75%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
