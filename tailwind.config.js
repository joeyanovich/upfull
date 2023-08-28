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
          400: '#BC2BAE',
          500: '#B331C7',
          900: '#550B60'
        },
        black: {
          'black': '#242424'
        },
        white: {
          'white': '#FDFDFD'
        }
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(90deg, rgba(89,0,207,1) 0%, rgba(204,46,169,1) 100%);'
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
