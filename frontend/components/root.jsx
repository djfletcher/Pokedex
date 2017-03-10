import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import PokeDetailContainer from './poke_detail/poke_detail_container';
import ItemDetailContainer from './item_detail/item_detail_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={PokemonIndexContainer} >
        <Route path='pokemon/:pokeId' component={PokeDetailContainer} >
          <Route path='item/:itemId' component={ItemDetailContainer} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
