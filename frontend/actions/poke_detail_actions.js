import * as APIUtil from '../util/api_util';

export const RECEIVE_POKE = "RECEIVE_POKE";

export const receivePoke = poke => ({
  type: RECEIVE_POKE,
  poke
});


export const requestPoke = poke => dispatch => {
  return APIUtil.fetchPoke(poke)
    .then(pokem => dispatch(receivePoke(pokem)));
};
