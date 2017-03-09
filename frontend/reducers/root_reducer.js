import { combineReducers } from 'redux';
import PokemonReducer from './pokemon_reducer';
import PokeDetailReducer from './poke_detail_reducer';

export default combineReducers({
  pokemon: PokemonReducer,
  poke: PokeDetailReducer
});
