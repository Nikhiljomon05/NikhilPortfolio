/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#080808',
        surface: '#0f0b0b',
        mist: '#A1A1AA',
        crimson: {
          DEFAULT: '#B51220', // brand red — lines, large type, button fills
          deep: '#6E0A14',
          ember: '#E5384A', // lighter red for small text (passes 4.5:1 on ink)
        },
      },
      fontFamily: {
        display: ['Anton', 'Impact', '"Arial Narrow"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        script: ['Allura', '"Brush Script MT"', 'cursive'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.95' },
        },
      },
      animation: {
        glow: 'glow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
