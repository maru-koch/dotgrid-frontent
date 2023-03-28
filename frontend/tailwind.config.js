/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
      'orange-color': '#EC6640',
      'accent-color': '#F19753',
      'accent-2-color': '#EC6333',
      'accent-3-color': '#f4e7e6',
      'background-2-color':'#e3ecff',
      'panel-color':'#EBF3FA',
      'word-color': '#424242',
      'text-color':'grey',
      'secondary-color':'#104883',
      'main-color': '#211551',
      'main-2-color':'#462576',
      'yellow-color':'#F6BB33',
      'header-color':'#DEE3F7',
      'nav-color': '#737a95',
      'background-color': '#F7F7FF',
      'primary-color': '#4C3FCF',
      'secondary-2-color': '#B480ED',
      'tertiary-color': '#70E0CD',
      'btn-gradient':'linear-gradient(120deg,#4238af, #9c48f5)',
      }
    },
  },
  plugins: [],
}
