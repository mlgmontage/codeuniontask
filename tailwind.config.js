/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: '#3782DA',
      gray: '#9494A0',
      lightGray: '#C1C1CB',
      dark: '#424F5E',
      white: '#FFFFFF'
    },
    borderRadius: {
      none: '0',
      xs: '10px',
      sm: '15px',
      DEFAULT: '20px',
      lg: '25px'
    },
    fontSize: {
      xxs: ['16px', {fontWeight: 450, lineHeight: '20px'}],
      xs: ['18px', {fontWeight: 400, lineHeight: '20px'}],
      base: ['20px', {fontWeight: 400, lineHeight: '25px'}],
      boldBase: ['20px', {fontWeight: 500, lineHeight: '20px'}],
      lg: ['34px', {fontWeight: 500, lineHeight: '34px'}],
      xl: ['42px', {fontWeight: 500, lineHeight: '44px'}],
    }
  },
  plugins: [],
}
