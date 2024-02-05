/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  important: "#root",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
    },
    screens: {
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  plugins: [],
};
