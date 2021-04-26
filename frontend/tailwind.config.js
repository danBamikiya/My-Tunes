module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production', /* use purgecss only in production */
    content: ['./src/**/*.{ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#8187a2',
        btn: '#1762a7',
        DEFAULT: '#477eff',
        dark: '#576c99',
        darker: '#12172d',
        darkest: '#060415'
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1'
      },
      purple: {
        DEFAULT: '#8c3a80'
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
    },
    fontFamily: {
      poppins: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
