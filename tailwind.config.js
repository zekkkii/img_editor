module.exports = {
  plugins: [

  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          200: "#04B2D9",
          500: "#049DD9",
          700: "#00709B",
        },
        'secondary': {
          100: "#F2B705",
          200: "#ce9c04",
          300: "#0D0D0D",
          500: "#F2F2F2",
          600: "#36b47c",
          700: "#C28E00",
          900: "#936700",
        },
        'tertiary': {
          200: "#eeeeee",
          500: "#57586e",
          600: "#3a3b48",
          700: "#141C2C",
          800: "#101623"
        },
        'danger': {
          50: '#FEF8F8',
          100: '#FEF2F2',
          200: '#FCDEDE',
          300: '#FACACA',
          400: '#F7A3A3',
          500: '#F37B7B',
          600: '#DB6F6F',
          700: '#924A4A',
          800: '#6D3737',
          900: '#492525',
        },
        'code': {
          400: "#fefcf9",
          600: "#3c455b",
        }
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
}