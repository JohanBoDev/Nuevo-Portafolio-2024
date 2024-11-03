module.exports = {
  content: [
    './*.html',      
    './*.js',     
    "./node_modules/flowbite/**/*.js"
  ],
        
  theme: {
    extend: {
      screens: {
        'xl': '1250px',  // Cambia el tamaño de 'xl' a 1200px
        'custom-lg': '1400px', // Agrega un nuevo breakpoint personalizado
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
