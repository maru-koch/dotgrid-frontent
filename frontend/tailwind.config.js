/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
       fontFamily:{
        'poppins':['Poppins', 'San serif'],
        'mulish':['Mulish', 'San serif'],
        'openSans':['Open Sans', 'San serif']
      },
    extend: {
      colors:{
      'accentColor': {100:'#f4e7e6',100:'#F19753', 200:'#EC6333', 300:'#EC6640'},
     
      'background-color':{100:'#e3ecff', 200:'#F7F7FF', 300:'#EBF3FA',},
      'textColor':{100:'#424242'},
      'secondaryColor':'#104883',
      'mainColor': {100:'#462576', 200:'#211551'},
      'yellowColor':'#F6BB33',
      'headerColor':'#DEE3F7',
      'navColor': '#737a95',
      'primaryColor': '#4C3FCF',
      'tertiaryColor': '#70E0CD',
      'btnGradient':'linear-gradient(120deg,#4238af, #9c48f5)',
      }
    },
  },
  plugins: [],
}
