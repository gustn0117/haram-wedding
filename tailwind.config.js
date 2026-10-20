/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 만나교회 계열: 흰 바탕 · 남색 포인트 · 민트 보조
        ink: '#1a1a1a',
        navy: { DEFAULT: '#1f3f78', light: '#eaf0fa', deep: '#16305c' },
        mint: { DEFAULT: '#2fb79a', light: '#e4f6f1', deep: '#1f8a74' },
        mist: '#f5f6f8',
        line: '#e3e5e9',
        // 이전 토큰 — 아직 남은 화면이 참조한다
        gold: { DEFAULT: '#b87962', light: '#ead3c9', deep: '#8e5543' },
        sage: { DEFAULT: '#89927a', light: '#dbe0d4', deep: '#5e6753', ink: '#4a5241' },
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Noto Sans KR', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
