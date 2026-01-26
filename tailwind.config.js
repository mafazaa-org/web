/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/mafazaa-react-ui/**/*.{js,ts,jsx,tsx}", // Your npm package components
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        cairo: ["Cairo", "sans-serif"], // Keep for backward compatibility
      },
      borderRadius: {
        rounded: "5px",
      },
      backgroundImage: {
        centerSectionBg: "url('/protect.png')",
        "brand-gradient": "linear-gradient(135deg, #0d309e 0%, #60148c 100%)",
        "brand-gradient-accent": "linear-gradient(135deg, #0d309e 0%, #18cad3 50%, #60148c 100%)",
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
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
