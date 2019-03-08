export const FETCH_REQUEST_USERS_LIST = 'FETCH_REQUEST_USERS_LIST';
export const FETCH_SUCCESS_USERS_LIST = 'FETCH_SUCCESS_USERS_LIST';
export const FETCH_ERROR_USERS_LIST = 'FETCH_ERROR_USERS_LIST';

export const SEARCH_BAR_VALUE_TYPED = 'SEARCH_BAR_VALUE_TYPED';

export const REQUEST_ADD_FAVORITES = 'REQUEST_ADD_FAVORITES';
export const DELETE_FAVORITES_SUCCESS = 'DELETE_FAVORITES_SUCCESS';

export const actionUsersList = payload => {    
  return {
    type: FETCH_REQUEST_USERS_LIST,
    payload,
  }
};

export const actionSearchBar = payload => {    
  return {
    type: SEARCH_BAR_VALUE_TYPED,
    payload,
  }
};

export const actionFavoritesList = payload => {      
  return {
    type: REQUEST_ADD_FAVORITES,
    payload,
  }
};

export const actionDeleteFavorites = payload => {      
  return {
    type: DELETE_FAVORITES_SUCCESS,
    payload,
  }
};
