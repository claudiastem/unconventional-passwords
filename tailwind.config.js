/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}',
            './dist/**/*.{html,js,ts,jsx,tsx}',
            './components/**/*.{html,js,ts,jsx,tsx}',
            './pages/**/*.{html,js,ts,jsx,tsx}',
            './index.html',
        
          ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif']
      }
    },
  },
  plugins: [],
}