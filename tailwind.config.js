const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#141416',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: '#45B36B',
      purple: '#6C2B9F'
    },
    extend: {
      backgroundImage: {
        earnings: "url('../public/images/earnings-bg.png')"
      },
      colors: {
        black: '#000000',
        primary: '#26DED0',
        'primary-dark': '#245c5f',
        secondary: '#08282D',
        'neutral-1': '#141416',
        'neutral-2': '#23262F',
        'neutral-3': '#353945',
        'neutral-4': '#777E90',
        'neutral-5': '#B1B5C3',
        'neutral-6': '#E6E8EC',
        'neutral-7': '#F4F5F6',
        'neutral-8': '#FCFCFD',
        'gradient-gray-1': '#434755',
        'gradient-gray-2': '#2A2D36',
        unlockable: '#B5B906',
        red: '#FF1E1E',
        turquoise: '#26DED0',
        orange: '#FF9212',
        yellow: '#FFD612',
        pink: '#FA707B',

        //OLD
        g: '#252525',
        glight: '#1C1C1C',
        glight2: '#323232',
        glight3: '#444444',
        g2: '#242529',
        g3: '#C9C9C9',
        blight: '#303030',
        y: '#FAFF00',
        gtxt: '#777E90',
        gtxt2: '#B1B5C3',
        blight: '#23262F',
        yell: '#FFD947',
        gree: '#45B36B',
        purple: '#6C2B9F'
      },
      width: {
        128: '32rem',
        160: '40rem',
        '9/16': '56.25%'
      },
      height: {
        128: '32rem',
        160: '40rem'
      },
      inset: {
        34: '136px',
        54: '216px'
      },
      padding: {
        full: '100%',
        34: '8.5rem'
      },
      fontSize: {
        s: ['12px', '16px'],
        m: ['14px', '20px'],
        l: ['16px', '24px'],
        hs: ['20px', '28px'],
        hm: ['28px', '36px'],
        hl: ['36px', '44px'],
        hxl: ['42px', '54px']
      }
    }
  },
  variants: {
    extend: {
      translate: ['motion-reduce'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      borderWidth: ['first', 'last']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
