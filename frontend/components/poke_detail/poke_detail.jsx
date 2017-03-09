import React from 'react';
// import PokemonIndexItem from '../pokemon/pokemon_index_item';

class PokeDetail extends React.Component {
  constructor(props){
    super(props);
    this.poke = this.props.poke[this.props.params.pokeId];
  }


  componentDidMount(){
    // debugger;
    this.props.requestPoke(this.poke);
  }

  render() {
    // const poke = this.poke;
    // debugger;
    if (this.poke) {
      return(
        <div>
          <img src={this.poke.image_url}></img>
          <h2>{this.poke.name}</h2>
          <ul>
            <li>Type: {this.poke.type}</li>
            <li>Attack: {this.poke.attack}</li>
            <li>Defense: {this.poke.defense}</li>
            <li>Moves: {this.poke.moves}</li>
            <li>Items: {this.poke.items}</li>
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default PokeDetail;
