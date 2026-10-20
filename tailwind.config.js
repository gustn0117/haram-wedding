/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 하람 로고 금색을 포인트로. 흰 배경 위 글자·버튼에는 deep 단계만 쓴다
        // (로고색 #dec08a 는 흰 배경 대비 1.75 로 글자에 못 씀)
        ink: '#1a1a1a',
        brand: {
          DEFAULT: '#dec08a', // 로고색 — 어두운 면 위 강조, 테두리, 채움
          mid: '#a77c2f',
          deep: '#876526',    // 흰 배경 위 글자·버튼 (대비 5.36)
          darker: '#67501f',  // hover
          light: '#f7f0e3',   // 연한 배경
        },
        navy: { DEFAULT: '#876526', light: '#f7f0e3', deep: '#67501f' },
        mint: { DEFAULT: '#876526', light: '#f7f0e3', deep: '#67501f' },
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
