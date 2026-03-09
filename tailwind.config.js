/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'haram-gold': '#C4A46C',
        'haram-gold-light': '#D4BA8A',
        'haram-dark': '#111111',
        'haram-navy': '#111827',
        'haram-cream': '#F9F7F4',
        'haram-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
