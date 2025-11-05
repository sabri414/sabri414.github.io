/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sabriBlue: "#2985ff",
        sabriGray: "#1e1e1e",
        sabriLight: "#f9fafb",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
