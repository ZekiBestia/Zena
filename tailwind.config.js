/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zena-blue': '#00182B',
        'zena-cyan': '#00FFF7',
        'zena-indigo': '#6B33B8',
        'zena-pink': '#FF66C4',
        'zena-white': '#F4F4F5',
      },
    },
  },
  plugins: [],
}
