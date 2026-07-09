/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        cream: '#f3efe4',
        ink: '#111111',
        cobalt: '#1747ff',
        accent: '#b8ff3c',
      },
    },
  },
  plugins: [],
};
