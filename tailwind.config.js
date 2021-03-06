module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
      'cooper': ['Cooper']
    },
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
    fontSize: {
      sm: ['24px', '32px'],
      base: ['14px', '24px'],
      lg: ['32px', '40px'],
      xl: ['64px', '72px'],
    },
    colors: {
      transparent: 'transparent',
      black: "#2E373C",
      green: "#0E8685",
      white: {
        yellow: "#FEFBF6",
        DEFAULT: "#FFF"
      },
      grey: {
        DEFAULT: "#D5D9DC",
        dark: "#838793",
      },
      orange: "#FED5B9",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
