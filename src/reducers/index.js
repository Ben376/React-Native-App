// @flow

import { combineReducers } from 'redux';
import reducerUsersList from './reducerUsersList';
import reducerSearchBar from './reducerSearchBar';
import reducerFavoritesList from './reducerFavoritesList';


const state = combineReducers({
  reducerUsersList,
  reducerSearchBar,
  reducerFavoritesList,
});

export default state;
