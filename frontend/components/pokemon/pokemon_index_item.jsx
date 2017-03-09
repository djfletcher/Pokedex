import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = poke => {
  const path = `pokemon/${poke.id}`;
  return (
    <li key={poke.id}>
    <Link to={path}>
      <h2>{poke.name}</h2>
      <img src={poke.image_url} />
    </Link>
  </li>
  );
};

export default PokemonIndexItem;
