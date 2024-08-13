/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60A5FA",
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        secondary: {
          light: "#A78BFA",
          DEFAULT: "#8B5CF6",
          dark: "#7C3AED",
        },
        bg: {
          light: "#F0F9FF",
          DEFAULT: "#E0F2FE",
          dark: "#0F172A",
        },
        text: {
          primary: {
            light: "#1E293B",
            DEFAULT: "#0F172A",
            dark: "#F1F5F9",
          },
          secondary: {
            light: "#475569",
            DEFAULT: "#64748B",
            dark: "#94A3B8",
          },
        },
        card: {
          light: "#FFFFFF",
          DEFAULT: "#F1F5F9",
          dark: "#1E293B",
        },
        accent: {
          light: "#34D399",
          DEFAULT: "#10B981",
          dark: "#059669",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
