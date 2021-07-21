module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#bc1335',
        'secondary': '#0e1e2e'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
