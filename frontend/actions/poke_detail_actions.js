import * as APIUtil from '../util/api_util';

export const RECEIVE_POKE = "RECEIVE_POKE";

export const receivePoke = poke => ({
  type: RECEIVE_POKE,
  poke
});


export const requestPoke = pokeId => dispatch => {
  return APIUtil.fetchPoke(pokeId)
    .then(poke => dispatch(receivePoke(poke)));
};
