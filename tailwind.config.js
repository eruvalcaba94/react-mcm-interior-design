/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Playfair Display'],
      'body': ['Lato'],
    },
    extend: {
      colors: {
        textPrimary: '#16181d',
        textSecondary: '#f5f5f7',
        background: '#e5e7eb',
        primary: '#b299a2',
        secondary: '#f6f7f8',
        accent: '#a2b299'
      }
    },
  },
  plugins: [],
}
