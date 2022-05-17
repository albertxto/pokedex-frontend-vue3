const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addComponents, theme }) => {
      const screens = theme('screens', {})
      addComponents([
        {
          '.container.pokedex-slider': { width: '100%' }
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            '.container.pokedex-slider': {
              'max-width': '640px'
            }
          }
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            '.container.pokedex-slider': {
              'max-width': '640px'
            }
          }
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            '.container.pokedex-slider': {
              'max-width': '768px'
            }
          }
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            '.container.pokedex-slider': {
              'max-width': '1024px'
            }
          }
        },
        {
          [`@media (min-width: ${screens['2xl']})`]: {
            '.container.pokedex-slider': {
              'max-width': '1280px'
            }
          }
        }
      ])
    })
  ],
  theme: {
    colors,
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      },
      backgroundSize: {
        full: '100%'
      },
      container: {
        center: true
      },
      fontSize: {
        55: '55rem'
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px'
      },
      height: {
        '70-px': '70px',
        '95-px': '95px',
        '350-px': '350px',
        '500-px': '500px',
        '550-px': '550px',
        '600-px': '600px'
      },
      maxHeight: {
        '860-px': '860px'
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px'
      },
      minHeight: {
        'screen-75': '75vh'
      },
      minWidth: {
        '140-px': '140px',
        48: '12rem'
      },
      opacity: {
        2: '.02'
      },
      zIndex: {
        2: 2,
        3: 3
      }
    }
  }
}
