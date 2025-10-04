/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3047',
        'secondary': '#419D78',
        'accent': '#EAE8FF',
        'text': '#2D3047',
        'background': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}