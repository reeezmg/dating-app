module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   theme: {
    extend: {
      colors: {
        backgroundColor: '#F6F6F6', 
        customPink: '#F6AD9E',
        customLightPink: '#F8D1C9',
      },
      screens: {
        'xs': '275px',
   
      },
    },
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }