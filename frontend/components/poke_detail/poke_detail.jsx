import React from 'react';
// import PokemonIndexItem from '../pokemon/pokemon_index_item';

class PokeDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPoke(this.props.params.pokeId);
  }

  render() {
    if (this.props.poke.moves) {
      return(
        <div>
          <img src={this.props.poke.image_url}></img>
          <h2>{this.props.poke.name}</h2>
          <ul>
            <li>Type: {this.props.poke.poke_type}</li>
            <li>Attack: {this.props.poke.attack}</li>
            <li>Defense: {this.props.poke.defense}</li>
            <li>Moves: {this.props.poke.moves.join(', ')}</li>
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PokeDetail;
