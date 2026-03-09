/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'haram-gold': '#C5A55A',
        'haram-navy': '#1B2340',
      },
      fontFamily: {
        'sans': ['Noto Sans KR', 'sans-serif'],
        'serif': ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
};
