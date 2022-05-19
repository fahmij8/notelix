module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#6F6FC8',
        secondary: '#FEBE47',
        success: '#39DB6C',
        danger: '#F97748',
        warning: '#FFCC00',
        info: '#62C1FC',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
