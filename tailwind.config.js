/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fffdf9',
        ink: '#34332e',
        gold: { DEFAULT: '#b87962', light: '#ead3c9', deep: '#8e5543' },
        sage: { DEFAULT: '#89927a', light: '#dbe0d4', deep: '#5e6753', ink: '#4a5241' },
        mist: '#f3eee6',
        line: '#ddd5c9',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Noto Sans KR', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
