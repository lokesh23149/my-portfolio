/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//     fontFamily:{
//       'hero-font':'Winky Rough'
//     }
//   },
//   plugins: [],
// }
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease forwards',
      },
    },
    fontFamily: {
      'hero-font': ['Winky Rough', 'cursive'],
    },
  },
  plugins: [],
}