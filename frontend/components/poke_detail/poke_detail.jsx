import React from 'react';
import ItemDetailContainer from '../item_detail/item_detail_container';
import { Link } from 'react-router';


class PokeDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestPoke(this.props.params.pokeId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.pokeId !== this.props.params.pokeId) {
      this.props.requestPoke(nextProps.params.pokeId);
    }
  }

  render() {
    if (this.props.poke.items) {
      const itemImages = this.props.poke.items.map((item) => {
        let path = `pokemon/${item.pokemon_id}/item/${item.id}`;
        return (
          <li key={item.id}>
            <Link to={path}>
              <img width="28px" src={item.image_url} />
            </Link>
          </li>
        );
    });

      return(
        <div>
          <img src={this.props.poke.image_url}></img>
          <h2>{this.props.poke.name}</h2>
          <ul>
            <li>Type: {this.props.poke.poke_type}</li>
            <li>Attack: {this.props.poke.attack}</li>
            <li>Defense: {this.props.poke.defense}</li>
            <li>Moves: {this.props.poke.moves.join(', ')}</li>
            <ul>{itemImages}</ul>
            {this.props.children}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default PokeDetail;
