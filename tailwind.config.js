/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", ".src/style.css", "./index.html", "./services.html", "./portfolio.html", "./about.html", "./home.html"],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#121212',
        'color-hover': '#1F1E1E',
        'red-text': '#FF0000',
        'round-red': '#8B0C0C',
        'facebook': '#3b5998',
        'twitter': '#00acee',
        'youtube': '#c4302b',
        'instagram': '#3f729b',
      }
    },
  },
  plugins: [],
}

