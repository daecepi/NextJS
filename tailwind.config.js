module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        midnight:{
          default:'#14236E'
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
