/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        darkBg: '#050505',
        darkCard: '#0a0a0a',
      },
      animation: {
        'float-slow': 'float 8s infinite ease-in-out alternate',
        'float-fast': 'float 5s infinite ease-in-out alternate-reverse',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
