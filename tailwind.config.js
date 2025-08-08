/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      fadeZoom: "fadeZoom 0.3s ease-out forwards",
    },
    keyframes: {
      fadeZoom: {
        "0%": { opacity: "0", transform: "scale(0.9)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
    },
  },
},

  plugins: [],
}
