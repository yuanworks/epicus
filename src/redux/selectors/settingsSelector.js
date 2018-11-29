import { createSelector } from 'reselect';
import * as Selectors from './index';

const reducer = state => Selectors.selectSettings(state);

export const getTheme = createSelector(
  reducer,
  reducer => reducer.get('theme'),
);

/*
export const getTheme = store => {
  return store.get('theme');
}
*/
