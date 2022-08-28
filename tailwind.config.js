/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenBrown: '#966F33',
        bdazzledBlue: '#335B96',
        fieldDarb: '#665029',
        earthYellow: '#CFA364',
        blanchedAlmond: '#FFECCB',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 5px 15px rgb(207,163,100)",
        icon: "0px 0px 0px 8px rgb(207,163,100)",
      },
    },
  },
  plugins: [],
}