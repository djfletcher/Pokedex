import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';


export default () => createStore(
  RootReducer,
  {},
  applyMiddleware(thunk)
);
