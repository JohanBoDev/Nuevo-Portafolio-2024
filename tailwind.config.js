module.exports = {
  content: [
    './*.html',       // Esto incluye todos los archivos HTML en la raíz del proyecto
    './*.js',         // Esto incluye todos los archivos JS en la raíz del proyecto
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1250px',  // Cambia el tamaño de 'xl' a 1200px
        'custom-lg': '1400px', // Agrega un nuevo breakpoint personalizado
      },
    },
  },
  plugins: [],
}
