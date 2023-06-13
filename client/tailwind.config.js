/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        "dark-purple": "#081A51",
        "light-purple": "rgba(255, 255, 255, 0.18)",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
