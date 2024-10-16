/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['"Inter"', "sans-serif"],
      },
      colors: {
        "black-200": "#2e2e2e", // Custom color definition
        primary: "#008080",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
