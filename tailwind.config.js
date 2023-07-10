/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': 'Montserrat, sans-serif',
        'title': 'Anton, sans-serif'
      }
    },
  },
  plugins: [],
}

