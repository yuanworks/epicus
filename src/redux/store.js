import { createStore } from 'redux';
import rootReducer from './reducers';

// if this fails, it should fall back to resetting the store instead of failing: (try setting the store to undefined)
const persistedState = {}; //localStorage.getItem('StoreState') ? JSON.parse(localStorage.getItem('StoreState')) : {};

const store =  createStore(rootReducer);
/*createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
*/

// TODO: to add throttle
// save only desired features
/*
store.subscribe( () => {
  localStorage.setItem('StoreState', JSON.stringify(store.getState()));
});
*/

export default store;
