/* Micro-desafío02 */

let peliculas = ['Turno de día',  '30 noches con mi ex',
  'Bestia',  'El monte',  'Top gun maverick',
  'Elvis', 'Thor: amor y trueno'];

function MasVista(pelicula){
    const peliculaMayuscula = pelicula.toUpperCase();
    const indice = peliculas.indexOf(pelicula);


      peliculas.splice(indice, 1);
      peliculas.unshift(peliculaMayuscula);


    return peliculas;
}

console.log(MasVista('Turno de día'))