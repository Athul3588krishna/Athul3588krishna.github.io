/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          black: '#000000',
          bg: '#000000',
          card: '#161617',
          cardHover: '#1d1d1f',
          surface: '#1c1c1e',
          surfaceElevated: '#2c2c2e',
          text: '#f5f5f7',
          gray: '#86868b',
          darkGray: '#424245',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
          blue: '#2997ff',
          blueHover: '#0071e3',
          green: '#30d158',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          '"Inter"',
          'sans-serif'
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ],
      },
      borderRadius: {
        'apple': '28px',
        'apple-lg': '32px',
        'apple-sm': '18px',
      }
    },
  },
  plugins: [],
}
