/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        grey: '#282c34',
      },
      fontFamily: {
        openSans: ['Open Sans'],
      },
    },
  },
  plugins: [],
};
