import { createStore } from 'redux';
import rootReducer from './reducers';
import Immutable, { Map } from 'immutable';

// if this fails, it should fall back to resetting the store instead of failing: (try setting the store to undefined)
const persistedState = localStorage.getItem('StoreState') ? Immutable.fromJS(JSON.parse(localStorage.getItem('StoreState'))) : Map();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// TODO: to add throttle
// save only desired features
store.subscribe( () => {
  localStorage.setItem('StoreState', JSON.stringify( store.getState().toJS() ));
});

export default store;
