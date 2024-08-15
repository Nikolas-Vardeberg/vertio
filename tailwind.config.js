const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
    extend: {
      fontSize: {
        "extra-small": "1.25rem",
        small: "1.875rem",
        medium: "2.5rem",
        large: "3.125rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      colors: {
        primary: "#007AFF",
        secondary: "#fff",
        tertiary: "#00447F",
        red: "#F61B33",
        black: "#000"
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
