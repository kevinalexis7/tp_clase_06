const peliculas = [
    'Turno de día',
    '30 noches con mi ex',
    'Bestia',
    'El monte',
    'Top gun maverick',
    'Elvis',
    'Thor: amor y trueno'
  ];

function convertirAMayusculasYReordenar(peliculaMasVendida) {
    const peliculaMayusculas = peliculaMasVendida.toUpperCase();
    const indice = peliculas.indexOf(peliculaMasVendida);
  
    
      peliculas.splice(indice, 1); // Eliminar la película original
      peliculas.unshift(peliculaMayusculas); // Agregar la película en mayúsculas al principio
    
  
    return peliculas;
  }
  const peliculasActualizadas = convertirAMayusculasYReordenar('Thor: amor y trueno');
  console.log("Películas actualizadas:", peliculasActualizadas);