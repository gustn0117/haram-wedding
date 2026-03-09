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
        'haram-navy': '#0f1a3a',
        'haram-navy-light': '#1a2850',
        'haram-cream': '#faf8f4',
        'haram-warm': '#f5f2ec',
        'haram-charcoal': '#2a2a2a',
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
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
