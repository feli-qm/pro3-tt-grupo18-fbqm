import React from 'react';

const UnaPeli = ({match}) => {

  const id = match.params.id;

  console.log(id);
  

  return (
    <div>
      <h2>hola mundo</h2>
    </div>
  )
}

export default UnaPeli;