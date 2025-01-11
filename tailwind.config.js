import flowbite from "flowbite-react/tailwind";

// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],

  theme: {
    extend: {
      colors: {
        customBlue: '#1565C0',
        customGray: '#474747', 
        customGray2: '#C4C4C4',
        
      },
      fontFamily: {
        mukta:['Mukta', 'serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
  

