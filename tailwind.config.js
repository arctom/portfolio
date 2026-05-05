/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          raised: "#111111",
          overlay: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#3b82f6",
          purple: "#8b5cf6",
          cyan: "#06b6d4",
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 20s ease-in-out infinite alternate",
        "gradient-shift-slow": "gradient-shift 30s ease-in-out infinite alternate-reverse",
      },
      keyframes: {
        "gradient-shift": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(10%, -5%) scale(1.1)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
          "100%": { transform: "translate(-5%, -5%) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
