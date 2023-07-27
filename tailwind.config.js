/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#2557B4",
        "secondary": "#29BFB1",
        "gray-01": "#DBDBDB",
        "main-bg": "#ECF2FB",
        "main-text": "#363636",
      },
      screens: {
        'wsm': { 'min': '300px', 'max': '767px' },
        'wmd': { 'min': '768px', 'max': '991px' },
        'wlg': { 'min': '992px', 'max': '1199px' },
        'wxl': { 'min': '1200px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
