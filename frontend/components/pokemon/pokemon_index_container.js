import { connect } from 'react-redux';
import { receiveAllPokemon, requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';
import { selectAllPokemon } from '../../reducers/selectors';

// const mapStateToProps = state => {
//   debugger;
//   // console.log(pokemon);
//   return {
//     pokemon: selectAllPokemon(state)
//   };
// };

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveAllPokemon: (pokemon) => dispatch(receiveAllPokemon(pokemon)),
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
