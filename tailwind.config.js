/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*index.html"],
  theme: {
    extend: {
      colors: {
        lightWhite: '#f8f9fd',
        deepBlue: '#5e4bda',
        lightCream:'#bec2cb',
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        lightBlue:'#7160de'

      },
    },
  },
  plugins: [],
}
