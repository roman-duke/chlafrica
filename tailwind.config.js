/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora'],
      },
      screens: {
        sm: { max: "700px" },
        md: "700px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        brand : {
          DEFAULT: "#F3BA2A",
          earth_yellow: "#DCA957",
          accent: "#302D8C",
          accent_two: "#F3F2F8"
        },
        custom: {
          'white': "#fff",
          'gray': "#F3F3F3",
          'light-gray': "#FFFFFC",
        },
      },
      backgroundImage: {
        'pattern-1': "url('/src/assets/images/tribal_pattern_I.jpeg')",
        'pattern-2': "url('/src/assets/images/tribal_pattern_II.jpeg')",
        'pattern-3': "url('/src/assets/images/eye_pattern.jpeg')",
        'pattern-4': "url('/src/assets/images/concentric_pattern.jpeg')",
        'pattern-5': "url('/src/assets/images/goldeye_pattern.jpeg')",
        'dotted-pattern': "url('/src/assets/images/dotted_pattern.jpeg')",
        'img': "url('/src/assets/icons/bg.svg')",
        'about-img': "url('/src/assets/images/chlafrica_about_us.jpg')",
        'expressions-intro-bg': "url('/src/assets/images/expressions-intro-bg.jpg')",
      },
      backgroundSize: {
        '18': '18px'
      },
      backgroundPosition: {
        right: 'calc(100% - 8px)'
      },
      blur: {
        xs: '2px'
      }
    },
  },
  variants : {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [],
};
