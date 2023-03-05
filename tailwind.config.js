/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#171821',
        'secondary' : '#21222D',
        'grey' : {
          '100' : '#69696B'
        }, 
        'accent' : {
          '100' : '#FFBA03'
        },
        'dark' : '#212121'
      },
    },
  },
  plugins: [],
}