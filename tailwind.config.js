/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainClr: '#89AB0C',
        txtClr: '#123707',
        lightClr: '#FFFFFF',
        darkClr: '#636363',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        primary: "0px 5px 15px rgb(0,0,0)",
        icon: "0px 0px 0px 10px",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [],
}