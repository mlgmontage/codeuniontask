/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: '#3782DA',
      gray: '#9494A0',
      dark: '#424F5E'
    },
    borderRadius: {
      none: '0',
      DEFAULT: '20px'
    }
  },
  plugins: [],
}
