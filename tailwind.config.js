/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card_shadow": ' 9px 16px 32px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

