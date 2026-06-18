/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F2EA",
          dark: "#EEE5D6",
          darker: "#E2D4BD",
        },
        espresso: {
          DEFAULT: "#2C1810",
          light: "#4A2C1A",
          soft: "#6B4C3A",
        },
        terracotta: {
          DEFAULT: "#C0452A",
          light: "#D4604A",
          dark: "#A03A22",
          pale: "#FBEAE5",
        },
        nude: {
          DEFAULT: "#D4B896",
          light: "#E8D5BE",
        },
        ok: {
          DEFAULT: "#2E7D44",
          pale: "#E8F4EA",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(44,24,16,0.06)",
        card: "0 4px 24px rgba(44,24,16,0.08)",
        lift: "0 12px 40px rgba(44,24,16,0.14)",
        device: "0 20px 50px rgba(44,24,16,0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
