/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",

        // iOS System colors
        ios: {
          light: "rgba(255, 255, 255, 0.55)", // frosted white
          dark: "rgba(28, 28, 30, 0.55)",     // frosted dark
          blue: "#0A84FF",  // iOS blue
          green: "#34C759", // iOS green
          red: "#FF3B30",   // iOS red
        },
      },
      backdropBlur: {
        ios: "24px", // frosted glass blur
      },
      borderRadius: {
        ios: "1rem", // rounded corners
      },
      boxShadow: {
        ios: "0 8px 32px rgba(0,0,0,0.15)", // soft iOS shadow
      },
    },
  },
  plugins: [],
};
