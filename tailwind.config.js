/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#00f5d4', // Cyan accent
          500: '#9d4edd', // Purple accent
          600: '#ff4d6d', // Pink accent
        },
        secondary: {
          50: '#e6edf3', // Light text
          500: '#aaa',   // Gray text
        },
        dark: {
          50: '#161b22', // Glassy container
          500: '#0d1117', // Main background
        },
        border: '#30363d',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};