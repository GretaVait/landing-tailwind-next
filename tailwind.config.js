module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lobster': ['Lobster'],
      'ribeye': ['Ribeye'],
      'roboto': ['Roboto'],
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
      base: ['16px', '24px'],
      lg: ['32px', '40px'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
