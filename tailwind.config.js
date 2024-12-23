/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      borderRadius: {
        rounded: "5px",
      },
      backgroundImage: {
        centerSectionBg: "url('/protect.png')",
      },
      colors: {
        primary: "#0d309e",
        "primary-color": "#0d309e",
        "secondary-color": "#60148c",
        "accent-color": "#18cad3",
        "bright-one": "#f2f2f2",
        "bright-two": "#ccc",
        "dark-one": "#040e30",
        "dark-two": "#1d062a",
        test: "#34fe41",
      },
    },
  },
  plugins: [],
};
