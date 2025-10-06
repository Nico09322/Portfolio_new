/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ['Space Mono', 'sans-serif'],
      }
    },
  },
  plugins: [ 

    ({ addBase }) => {
      addBase({
        'html, body': { backgroundColor: '#0a0a0a' },
      })
    },
  ],
}



