/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",        
        bg2: "#141414",       
        bg3: "#1A1A1A",       
        brand: "#FFFFFF",     
        "brand-hover": "#CCCCCC",
        textMain: "#FFFFFF",
        textMuted: "#A3A3A3", 
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
