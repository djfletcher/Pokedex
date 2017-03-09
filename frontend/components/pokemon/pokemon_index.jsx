import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemonList = this.props.pokemon.map(poke => PokemonIndexItem(poke));
    return (
      <section>
        <ul>{pokemonList}</ul>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonIndex;
