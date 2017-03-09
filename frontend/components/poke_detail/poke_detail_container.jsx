import React from 'react';
import { connect } from 'react-redux';
import { receivePoke, requestPoke } from '../../actions/poke_detail_actions';
import PokeDetail from './poke_detail';

const mapStateToProps = ({ poke }) => ({ poke });

const mapDispatchToProps = dispatch => ({
  requestPoke: poke => dispatch(requestPoke(poke)),
  receivePoke: poke => dispatch(receivePoke(poke))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetail);
