/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#15234B',
          'navy-deep': '#0E1E45',
          blue: '#2BA1D9',
          'blue-light': '#86D2EF',
          slate: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

