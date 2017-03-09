import { RECEIVE_POKE, receivePoke } from '../actions/poke_detail_actions';
import merge from 'lodash/merge';

const PokeDetailReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_POKE:
      return action.poke;
    default:
      return state;
  }

};

export default PokeDetailReducer;
