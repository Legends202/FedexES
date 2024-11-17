/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#4D148C',
          800: '#3D1172',
        },
        orange: {
          500: '#FF6200',
          600: '#E65800',
        }
      }
    },
  },
  plugins: [],
}