module.exports = {
  mode: 'jit',
  purge: ['pages/**/*.js', 'components/**/*.js', 'components/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        midnight:{
          default:'#14236E'
        },
        lime: {  
          default: '#B8FF01',  
          '50': '#F8FFE6',  
          '100': '#F1FFCD',  
          '200': '#E3FF9A',  
          '300': '#D5FF67',  
          '400': '#C6FF34',  
          '500': '#B8FF01',  
          '600': '#94CD00',  
          '700': '#6F9A00',  
          '800': '#4A6700',  
          '900': '#253400'
        },
        eggplant: {  
          default: '#321E41',
          '50': '#A780C4',  
          '100': '#9B6FBC',  
          '200': '#834EAA',  
          '300': '#683E87',  
          '400': '#4D2E64',  
          '500': '#321E41',  
          '600': '#170E1E',  
          '700': '#000000',  
          '800': '#000000',  
          '900': '#000000'
        },
        radicalRed: {
          default: '#FF3363',
          '100': '#FFFFFF',
          '200': '#FFCCD8',
          '300': '#FF99B1',
          '400': '#FF668A',
          '500': '#FF3363',
          '600': '#FF003B',
          '700': '#CC0030',
          '800': '#990024',
          '900': '#660018'
        },
      }
    },
  },
  variants: {
    extend: {
      borderWidth:['hover'],
      borderColor:['hover'],
      padding:['hover']
    },
  },
  plugins: [],
}
