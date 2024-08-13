/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#854CE6",
        bg: "#FFFFFF",
        darkBg: "#1C1C27",
        bgLight: "#f0f0f0",
        darkBgLight: "#1C1E27",
        textPrimary: "#111111",
        darkTextPrimary: "#F2F3F4",
        textSecondary: "#48494a",
        darkTextSecondary: "#b1b2b3",
        card: "#FFFFFF",
        darkCard: "#171721",
        cardLight: "#FFFFFF",
        darkCardLight: "#191924",
        button: "#5c5b5b",
        darkButton: "#854CE6",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
