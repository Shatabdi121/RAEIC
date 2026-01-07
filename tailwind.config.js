// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       animation: {
//         /* 🔁 Ping-pong marquee */
//         'marquee-rtl': 'marquee-rtl 12s ease-in-out infinite alternate',

//         /* floating animations */
//         'float-slow': 'float 12s ease-in-out infinite',
//         'float-medium': 'float 9s ease-in-out infinite',
//         'float-fast': 'float 6s ease-in-out infinite',
//         'float-slower': 'float 15s ease-in-out infinite',
//       },
//       keyframes: {
//         /* ✅ RIGHT → LEFT → RIGHT (NO STUCK) */
//         'marquee-rtl': {
//           '0%': { transform: 'translateX(70vw)' },   // right
//           '100%': { transform: 'translateX(-70vw)' } // left
//         },

//         float: {
//           '0%, 100%': {
//             transform: 'translateY(0px) rotate(0deg)',
//           },
//           '50%': {
//             transform: 'translateY(-30px) rotate(15deg)',
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      /* ================= KEYFRAMES ================= */
      keyframes: {
        /* Floating bubbles */
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-30px) rotate(15deg)",
          },
        },

        /* Carousel movement */
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      /* ================= ANIMATIONS ================= */
      animation: {
        /* Floating */
        "float-slow": "float 12s ease-in-out infinite",
        "float-medium": "float 9s ease-in-out infinite",
        "float-fast": "float 6s ease-in-out infinite",
        "float-slower": "float 15s ease-in-out infinite",

        /* Carousel */
        carousel: "carousel 35s linear infinite",
      },
    },
  },
  plugins: [],
};
