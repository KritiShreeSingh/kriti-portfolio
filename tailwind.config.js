/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#2A222C",        // Cassie top dark
        bg2: "#4F3D58",       // Cassie purple section
        bg3: "#2F2833",       // Cassie alternate dark
        brand: "#EB4E84",     // Cassie pink button accent
        "brand-hover": "#D8346A",
        textMain: "#FDFDFD",
        textMuted: "#B8B1BA", // Lighter text for secondary
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
