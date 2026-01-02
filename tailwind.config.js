/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9ca3af',
          dark: '#6b7280',
        },
        space: {
          white: '#ffffff',
          'light-grey': '#e5e7eb',
          grey: '#9ca3af',
          'medium-grey': '#6b7280',
          'dark-grey': '#4b5563',
          charcoal: '#374151',
          'dark-space': '#0f0f0f',
          'deep-space': '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
