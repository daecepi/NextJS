module.exports = {
  mode: 'jit',
  purge: ['pages/**/*.js', 'components/**/*.js', 'components/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class' or false
  theme: {
    screens:{
      'sm': "767px",
      'md': "991px",
      'lg': "1399px",
      'xl': '1400px',
    },
    extend: {
      fontFamily: {
        graphicLight: ['Graphic-Light', 'sans-serif'],
        graphicRegular: ['Graphik-Regular', 'sans-serif'],
        graphicMedium: ['Graphik-Medium', 'sans-serif']
      },
      colors: {
        midnight:{
          default: '#14236E',
          '50': '#8091E8',
          '100': '#6A7EE4',
          '200': '#3F59DC',
          '300': '#243EC4',
          '400': '#1C3199',
          '500': '#14236E',
          '600': '#0C1543',
          '700': '#040818',
          '800': '#000000',
          '900': '#000000'
        },
        volt:{
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
        // Copper colors
        "gray-white":{
          default: '#EAE9EE',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#EAE9EE',
          '600': '#CFCCD8',
          '700': '#B3AFC2',
          '800': '#9893AB',
          '900': '#7C7695'
        },
        "new-volt":{
          default: '#006B5B',
          '50': '#52FFE5',
          '100': '#38FFE1',
          '200': '#05FFDA',
          '300': '#00D1B2',
          '400': '#009E86',
          '500': '#006B5B',
          '600': '#003830',
          '700': '#000504',
          '800': '#000000',
          '900': '#000000'
        },
        "deep-purple":{
          default: '#2F203F',
          '50': '#A184C1',
          '100': '#9473B8',
          '200': '#7B54A4',
          '300': '#614283',
          '400': '#483161',
          '500': '#2F203F',
          '600': '#160F1D',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        "hot-pink":{
          default: '#FF3465',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFCDD9',
          '300': '#FF9AB2',
          '400': '#FF678C',
          '500': '#FF3465',
          '600': '#FF013E',
          '700': '#CD0031',
          '800': '#9A0025',
          '900': '#670019'
        },
        "orange-g2crowd":{
          default: '#F0492D',
          '50': '#FFFFFF',
          '100': '#FEEEEB',
          '200': '#FAC5BC',
          '300': '#F79C8C',
          '400': '#F3725D',
          '500': '#F0492D',
          '600': '#DA2D10',
          '700': '#AB230C',
          '800': '#7B1909',
          '900': '#4C0F05'
        },
        "soft-gray":{
          default: '#B0B7BA',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#E6E9EA',
          '400': '#CBD0D2',
          '500': '#B0B7BA',
          '600': '#959EA2',
          '700': '#7A858A',
          '800': '#616B70',
          '900': '#4A5154'
        },
        "extra-soft-gray":{
          default: '#DDDDDD',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#F7F7F7',
          '500': '#DDDDDD',
          '600': '#C4C4C4',
          '700': '#AAAAAA',
          '800': '#919191',
          '900': '#777777'
        },
        "graphite":{
          default: '#3C3F40',
          '50': '#AEB2B3',
          '100': '#A1A5A7',
          '200': '#878C8E',
          '300': '#6D7375',
          '400': '#55595A',
          '500': '#3C3F40',
          '600': '#232526',
          '700': '#0B0B0B',
          '800': '#000000',
          '900': '#000000'
        },
        "eggplant":{
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
        "soft-eggplant":{
          default: '#503068',
          '50': '#C2A7D6',
          '100': '#B696CE',
          '200': '#9E73BE',
          '300': '#8650AE',
          '400': '#6B408B',
          '500': '#503068',
          '600': '#352045',
          '700': '#1A1022',
          '800': '#000000',
          '900': '#000000'
        },
        "soft-midnight":{
          default: '#1E3192',
          '50': '#A8B4ED',
          '100': '#93A1E9',
          '200': '#697CE0',
          '300': '#3F58D7',
          '400': '#273FBC',
          '500': '#1E3192',
          '600': '#152368',
          '700': '#0D153D',
          '800': '#040613',
          '900': '#000000'
        },
        "mint":{
          default: '#00E6C3',
          '50': '#CCFFF7',
          '100': '#B3FFF3',
          '200': '#80FFEC',
          '300': '#4DFFE4',
          '400': '#1AFFDC',
          '500': '#00E6C3',
          '600': '#00B398',
          '700': '#00806D',
          '800': '#004D41',
          '900': '#001A16'
        },
        "teal":{
          default: '#20D5BA',
          '50': '#E0FAF6',
          '100': '#CAF7F0',
          '200': '#9EF0E4',
          '300': '#71EAD8',
          '400': '#45E3CB',
          '500': '#20D5BA',
          '600': '#19A993',
          '700': '#137C6D',
          '800': '#0C5046',
          '900': '#05241F'
        },
        "teal-dark":{
          default: '#006B5B',
          '50': '#52FFE5',
          '100': '#38FFE1',
          '200': '#05FFDA',
          '300': '#00D1B2',
          '400': '#009E86',
          '500': '#006B5B',
          '600': '#003830',
          '700': '#000504',
          '800': '#000000',
          '900': '#000000'
        },
        "aqua-mint":{
          default: '#20D5BA',
          '50': '#E0FAF6',
          '100': '#CAF7F0',
          '200': '#9EF0E4',
          '300': '#71EAD8',
          '400': '#45E3CB',
          '500': '#20D5BA',
          '600': '#19A993',
          '700': '#137C6D',
          '800': '#0C5046',
          '900': '#05241F'
        },
        "strong-green":{
          default: '#018A75',
          '50': '#73FEE9',
          '100': '#59FEE5',
          '200': '#27FDDC',
          '300': '#02EFCB',
          '400': '#01BDA0',
          '500': '#018A75',
          '600': '#01574A',
          '700': '#00251F',
          '800': '#000000',
          '900': '#000000'
        },
        "burgundy":{
          default: '#661428',
          '50': '#E57A94',
          '100': '#E16583',
          '200': '#D83B61',
          '300': '#BB2549',
          '400': '#911C39',
          '500': '#661428',
          '600': '#3B0C17',
          '700': '#110307',
          '800': '#000000',
          '900': '#000000'
        },
        "light-mint":{
          default: '#CCF9F2',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FAFEFE',
          '500': '#CCF9F2',
          '600': '#9EF4E6',
          '700': '#71EEDB',
          '800': '#43E9CF',
          '900': '#1ADFC0'
        },
        "silver":{
          default: "#E5E7E9"
        },
        "putty":{
          default: "#F5F6F6"
        },
        "cemento":{
          default: "#F5F5F5"
        },
        "sky":{
          default: "#D8E0E7"
        },
        "light-text":{
          default: "#8A8C8B"
        },
        "purple":{
          default: "#311D40"
        },
        "final-plea":{
          default: "#56468f"
        },
        "purple-rain":{
          default: "#6F448E"
        },
        "barney-purple":{
          default: "#A16BC9"
        },
        "evergreen":{
          default: "#004C3F"
        },
        "indigo":{
          default: "#2B41B2"
        },
        "light-pink":{
          default: "#D92C55"
        },
        // Old colors
        "dark-white":{
          default: "#ececec"
        },
        "dark-gray":{
          default: "#4a4a4a"
        },
        "light-gray":{
          default: "#aaa"
        },
        "green-500":{
          default: "#4CAF50"
        },
        "blue-500":{
          default: "#2196F3"
        },
        "amber-600":{
          default: "#FFB300"
        },
        "cyan-600":{
          default: "#00acc1"
        },
        "teal-500":{
          default: "#009688"
        },
        "indigo":{
          default: "#3F51B5"
        },
        "dark-slate":{
          default: "#263238"
        },
        "mid-slate":{
          default: "#37474F"
        },
        "tan":{
          default: "#F8F7F4"
        },
        "blue-gray-900":{
          default: "#263238"
        },
        "cornflower":{
          default: "#5659fc"
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
      },
      backgroundColor: theme => ({
        ...theme('colors'),
       }),
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    })
  },
  variants: {
    margin: ['responsive'],
    translate: ['active', 'group-hover'],
    extend: {
      borderWidth:['hover'],
      borderColor:['hover'],
      padding:['hover']
    },
  },
  plugins: [],
}
