import React from 'react';
import { connect } from 'react-redux';
import { receivePoke, requestPoke } from '../../actions/poke_detail_actions';
import PokeDetail from './poke_detail';

// const mapStateToProps = state => ({
//   poke: state.poke
// });

const mapStateToProps = state => {
    // debugger;
  return ({
    poke: state.pokemon
  });
};

const mapDispatchToProps = dispatch => ({
  requestPoke: poke => dispatch(requestPoke(poke)),
  receivePoke: poke => dispatch(receivePoke(poke))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetail);
