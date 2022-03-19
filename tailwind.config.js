module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        'theme-yellow': '#fad257',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
