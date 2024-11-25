/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EB194B',
          dark: '#d1174a',
        },
        secondary: {
          DEFAULT: '#00a699',
          dark: '#008489',
        },
      },
    },
  },
  plugins: [],
}