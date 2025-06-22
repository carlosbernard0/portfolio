/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        blueLight: '#3B4A6B',
        blueGray: '#2F3D59',
        blueDark: '#0B1326',
        bgLight: '#E5E5E5',
        grayText: '#A0A0A0',
        cardBg: '#1F1F1F',
        success: '#4CAF50',
        error: '#F44336',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
