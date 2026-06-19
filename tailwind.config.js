/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F9F9F5",
          dark: "#F2F2EB",
          darker: "#E8E8E0",
        },
        espresso: {
          DEFAULT: "#1A1A1A",
          light: "#444444",
          soft: "#555555",
        },
        terracotta: {
          DEFAULT: "#6C7A4D",
          light: "#7D8F5C",
          dark: "#5A6640",
          pale: "#F2F2EB",
        },
        nude: {
          DEFAULT: "#E5E2D8",
          light: "#EDEAE2",
        },
        ok: {
          DEFAULT: "#6C7A4D",
          pale: "#F2F2EB",
        },
        problem: {
          DEFAULT: "#8B7355",
          pale: "#F2F2EB",
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
        soft: "0 2px 10px rgba(26,26,26,0.06)",
        card: "0 4px 24px rgba(26,26,26,0.08)",
        lift: "0 12px 40px rgba(26,26,26,0.12)",
        device: "0 20px 50px rgba(26,26,26,0.15)",
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
