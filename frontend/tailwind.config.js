/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // for Next.js app folder structure
    "./pages/**/*.{js,ts,jsx,tsx}",     // for pages folder (if used)
    "./components/**/*.{js,ts,jsx,tsx}" // for components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

