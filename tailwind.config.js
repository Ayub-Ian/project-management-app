/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#171821',
      'secondary' : '#21222D'
    },
    extend: {},
  },
  plugins: [],
}