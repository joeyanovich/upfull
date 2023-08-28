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
      },
      colors:{
        'background': '#F1F1F1',
        purple: {
          100: '#CC2EA9',
          400: '#BC2BAE',
          500: '#B331C7',
          900: '#550B60'
        },
        black: {
          600: '#646464',
          800: '#242424'
        },
        white: {
          'white': '#FDFDFD'
        }
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '760px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
}
