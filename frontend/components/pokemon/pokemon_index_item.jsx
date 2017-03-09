import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = poke => (
  <li key={poke.id}>
    <Link to='pokemon/:pokemonId'>
      <h2>{poke.name}</h2>
      <img src={poke.image_url} />
    </Link>
  </li>
);

export default PokemonIndexItem;
