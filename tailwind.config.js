/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-100": "#0466c8",
        "main-200": "#0353a4",
        "main-300": "#023e7d",
        "main-500": "#0a2463",
        "second-100": "#ffd60a",
        "second-200": "#ffc300",
        "second-500": "#ffd100",
        "green-100": "#80b918",
        "green-200": "#55a630",
        "white-100": "#edf6f9",
        "white-200": "#fdffb6",
        "white-200": "#e9ecef",
        "black-100": "#000000",
        "black-200": "#242423",
        "black-300": "#333533",
      },
      content: {
        "pic18": "url(/gallery/Picture5.jpg)",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      animation: {
        animation: {
          first: "moveVertical 30s ease infinite",
          second: "moveVertical 30s reverse infinite",
        }
      }
    },
  },
  plugins: [],
}

