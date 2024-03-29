/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#30578e',
        header: '#212529',
        footer: '#ccdbed'
      },
    },
  },
  plugins: [],
}
