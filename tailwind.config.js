module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            '2.75': '0.7rem',
            '3.25': '0.82rem',
            '6.5': '1.7rem',
        },
        outline: {
            'none': 'none',
        },
        colors: {
            'string': '#c41a17',
            'number': '#1d00d0',
            'null': '#5e5e5e',
            'key': '#881391',
        },
        fontSize: {
            'xxs': '.6rem',
            'xxxs': '.5rem',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
