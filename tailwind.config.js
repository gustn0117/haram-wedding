/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'haram-gold': '#DDC18C',
        'haram-gold-light': '#f5e6c8',
        'haram-gold-dark': '#c9a96e',
        'haram-navy': '#162249',
        'haram-navy-light': '#1e3060',
        'haram-cream': '#faf8f4',
        'haram-warm': '#f7f5f0',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        display: ['Lustria', 'serif'],
        serif: ['Cormorant Garamond', 'Lustria', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
