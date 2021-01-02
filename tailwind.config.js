module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ktech': {
          light: '#205F8B',
          DEFAULT: '#205F8B',
          dark: '#205F8B'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
