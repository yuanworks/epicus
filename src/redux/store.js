import { createStore } from 'redux';
import rootReducer from './reducers';

const persistedState = localStorage.getItem('StoreState') ? JSON.parse(localStorage.getItem('StoreState')) : {};

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// TODO: to add throttle
// save only desired features
store.subscribe( () => {
  localStorage.setItem('StoreState', JSON.stringify(store.getState()));
});

export default store;
