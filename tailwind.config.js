/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '720px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily:{
      primary: "var(--font-jetbrainsMono)"
    },
    extend: {
      colors:{
        primary: "#1c1c22",
        accent:{
          DEFAULT:"#00ff99",
          hover:"00e187"
        }
      },
      boxShadow: {
        'custom-navy': '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        expandWidth: {
          '0%': { width: '10px' },
          '100%': { width: '100px' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "grow": "grow 0.5s forwards",
        expandWidth: 'expandWidth 2s ease-in-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}