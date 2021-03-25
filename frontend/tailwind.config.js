module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#477eff',
        dark: '#576c99',
        darker: '#12172d',
        darkest: '#060415'
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1'
      }
    },
    textColor: {
      primary: '#ffffff',
      secondary: '#ffffff99'
    },
    extend: {
      maxWidth: {
        'max-w-screen-2xl': '1800px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
