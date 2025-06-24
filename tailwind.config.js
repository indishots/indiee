/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#0f0f0f',
      },
      backgroundImage: {
        'glossy-black': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 40%, #1c1c1c 100%)'
      }
    }
  },
  plugins: [],
}