import React from 'react';
// import DetallePelicula from '../components/DetallePelicula/DetallePelicula';

const UnaPeli = ({match}) => {

  const id = match.params.id;
  // con el id tengo que hacer un fetch? para encontrar las diferentes propiedades del id (title, rating, etc)

  return (
    <div>
      <h2> Hola mundo </h2>
    </div>
  )
}

export default UnaPeli;