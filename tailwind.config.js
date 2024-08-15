/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B5BFA7',
        secondary: '#EB6A55',
        surface: '#485C66',
        background: '#F9F9F9',
        info: '#DDAF4C',
        success: '#c9dfb9',
        warning: '#fbdda9',
        error: '#fdcbc8',
        'success-text': '#78af4f',
        'warning-text': '#f59f17',
        'error-text': '#f44336',
      },
    },
  },
  plugins: [],
}
