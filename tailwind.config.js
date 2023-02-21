/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       colors: {
            'gray-919EAB':'#919EAB',
            'tituloPrimario':'#212B36',
            'tituloSecundario':'#637381',
            'white': '#ffffff',
            'scrollbar':'#00AB55',
            'iconMenucolor':'#637381',
            'bg':'#F0F0F0',
            'verde':'#30CB30',
            'hover-verde':'#2EBD2E',
            'botonBack':'#C2C2C2'
          },
          spacing:{
            '80px':'50px',
            '23px':'320px',
            '6pxx':'19px'
            
          }
    },

  },
  plugins: [],
}
