import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = poke => {
  const path = `pokemon/${poke.id}`;
  return (
    <li key={poke.id}>
    <Link to={path}>
      <img width="28px" src={poke.image_url} />
       {poke.name}
    </Link>
  </li>
  );
};

export default PokemonIndexItem;
