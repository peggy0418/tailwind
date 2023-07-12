/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    // tailwind預設
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // bs5尺寸
      //   screens: {
      //     'sm': '576px',
      //     'md': '768px',
      //     'lg': '992px',
      //     'xl': '1200px',
      //     '2xl': '1400px',
      // },
    },
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        'sky': {
          '100': '#e0f2fe',
        },
        'red': {
          '600': '#dc2626',
          '500': '#ef4444',
        },
        'mygreen': {
          '100': '#dcfce7',
          '300': '#86efac',
          '500': '#84cc16'
        },
        'white': '#ffffff',
        'myblue': {
          '600': '#2563eb'
        },
        'myorange': {
          '300': '#fdba74'
        }
      },
    }
  }
}
