/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFFFFF",
          dark: "#F9FAFB",
          darker: "#F3F4F6",
        },
        espresso: {
          DEFAULT: "#1A1A1A",
          light: "#374151",
          soft: "#4B5563",
        },
        terracotta: {
          DEFAULT: "#FF5C1A",
          light: "#FF7A45",
          dark: "#D94A1F",
          pale: "#FFF7ED",
        },
        nude: {
          DEFAULT: "#E5E7EB",
          light: "#F3F4F6",
        },
        ok: {
          DEFAULT: "#16A34A",
          pale: "#F0FFF4",
        },
        problem: {
          DEFAULT: "#EF4444",
          pale: "#FFF5F5",
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
        soft: "0 2px 10px rgba(0,0,0,0.06)",
        card: "0 4px 24px rgba(0,0,0,0.08)",
        lift: "0 12px 40px rgba(0,0,0,0.12)",
        device: "0 20px 50px rgba(0,0,0,0.15)",
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
