/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      red: "#ff4949",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#fff",
      lightgreen: "#a0dbba",
      lightblue: "#a0b9db",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      slackside: ["Slackside One", "cursive"],
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      abhayalibre: ["Abhaya Libre", "serif"],
      avenir : ["Avenir", "sans-serif"],
      openSans : ["Open Sans", "sans-serif"],
      poppins : ["Poppins", "sans-serif"],
      raleway : ["Raleway", "sans-serif"],
      bebasNeue : ["Bebas Neue", "cursive"],
      calibre : ["Calibre", "sans-serif", "serif", "light", "thin", "regular", "medium", "bold", "black", "italic", "bold italic", "black italic"],
      timesNewRoman : ["Times New Roman", "serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      xs: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    width: {
      "50rem": "50rem",
      "70%": "70%",
      "28rem": "28rem",
      "64rem": "64rem",
      "56rem": "56rem",
      '1/2': '50%',
      "3rem": "3rem",
      "40rem": "40rem",
      "100%": "100%",
      "5rem": "5rem",
      "10rem": "10rem",
      "15rem": "15rem",
      "2rem": "2rem",
    },
    backgroundImage: {
      weather: "url('/src/images/backgroudimage.webp')",
      evening: "url('/src/images/micro_internships_banner_desktop_1920x1080.png')",
    },
    margin: {
      "30rem": "30rem",
      "24rem": "24rem",
      "5px": "5px",
      "1rem": "1rem",
      "5rem": "5rem",
      "15rem": "15rem",
      "17rem":"17rem",
      "10px": "10px",
      "50vh":"50vh",
      "50rem": "50rem",
      "2rem": "2rem",
      "1/2": "50%",
      "1/4": "25%",
      "3/4": "75%",
      "80%": "80%",
      "85%": "85%",
      
    },
    height: {
      "35rem": "35rem",
      "100vh": "100vh",
      "5rem": "5rem",
      "10rem": "10rem",
      "15rem": "15rem",
      "20rem": "20rem",
      screen: "100vh", //100vh means 100% of the viewport height. for width we can use 100vw, 
    },
  },

  plugins: [],
};