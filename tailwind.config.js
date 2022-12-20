/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05182c',
        light_primary: '#3F3D56',
        info: '#FED766',
        success: '#50FFB1',
        danger: '#F28482',
        peace: '#FFFFFF',
        water: '#5FBFF9',
        write: '#8892B0'
      },
    },
  },
  plugins: [],
}
