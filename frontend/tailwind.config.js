/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d64f38",
        dark: "#111111",
      },
      // userSelect: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        }
      }
    },
  },
  plugins: [],
};

