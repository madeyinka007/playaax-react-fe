/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const colors = require("./src/tokens/color.tokens");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["hover:bg-primary-800", "text-neutral-white"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {},
      boxShadow: {
        "shadow-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "shadow-sm":
          "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)",
        "shadow-md":
          "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        "shadow-lg":
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        "shadow-xl":
          "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        "shadow-2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "shadow-3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
        "shadow-input": "0px 0px 0px 4px rgba(244, 235, 255, 1)",
      },
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1780px",
        "4xl": "2160px", // only need to control product grid mode in ultra 4k device
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Gemunu_Libre: ["Gemunu_Libre", "sans-serif"],
    },
    plugins: [],
  },
};
