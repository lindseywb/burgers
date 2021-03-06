module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'serif']
      },
      colors: {
        'twine': {
          '50': '#fcfdf6',
          '100': '#f7f8f1',
          '200': '#f0e6db',
          '300': '#e6d7c1',
          '400': '#c09d6d',
          '500': '#9e7b46',
          '600': '#736232',
          '700': '#5d4a23',
          '800': '#392314',
          '900': '#2c1d07',
        },
        'apple': {
          '50': '#f1fbea',
          '100': '#dff6d1',
          '200': '#c0eda9',
          '300': '#9adf77',
          '400': '#75cf4c',
          '500': '#5cbf31',
          '600': '#418f21',
          '700': '#336e1d',
          '800': '#2d571d',
          '900': '#274b1c',
        },
        'saffron': {
          '50': '#fdfbe9',
          '100': '#fcf6c5',
          '200': '#faeb8e',
          '300': '#f6d94e',
          '400': '#f2c626',
          '500': '#e2ac10',
          '600': '#c3840b',
          '700': '#9b5f0d',
          '800': '#814b12',
          '900': '#6d3e16',
        },

      }
    },
  },
  plugins: [],
}
