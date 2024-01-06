/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur:{
        "2px":"2px"
      },
      fontSize:{
        "1.5xl":"1.20rem"
      }
    },
  },
  plugins: [],
}