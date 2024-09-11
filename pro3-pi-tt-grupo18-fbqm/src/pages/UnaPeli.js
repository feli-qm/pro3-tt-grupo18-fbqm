import React from 'react';
// import DetallePelicula from '../components/DetallePelicula/DetallePelicula';

const UnaPeli = ({match}) => {

  const id = match.params.id;

  console.log(id);
  

  return (
    <div>
      <h2> Hola mundo </h2>
    </div>
  )
}

export default UnaPeli;