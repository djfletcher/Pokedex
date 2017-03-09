import React from 'react';

const PokemonIndexItem = poke => (
  <li key={poke.id}>
    <h2>{poke.name}</h2>
    <img src={poke.image_url} />
  </li>
);

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonList = this.props.pokemon.map(poke => PokemonIndexItem(poke));
    return <ul>{pokemonList}</ul>;
  }
}

export default PokemonIndex;
