/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      color:{
       'nav-color': '#linear-gradient(to right, #0f0f0f 0%, #0f0f0f 100%)',
       'text-color': '#d1d5db',
      }
    },
  },
  plugins: [],
}

