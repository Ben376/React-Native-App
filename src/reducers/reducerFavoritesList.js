const initialState = {
  favoritesList: [],
  error: [],
};

const reducerFavoritesList = (state = initialState, action) => {   
    switch (action.type) {
			case 'REQUEST_ADD_FAVORITES' :
				return {
					...state,
				}
			case 'ADD_FAVORITES_SUCCESS': {
				return {
					...state,
					favoritesList: [...state.favoritesList, action.payload],
				};
			}
			case 'DELETE_FAVORITES_SUCCESS': {				
				return {
					...state,
					favoritesList: state.favoritesList.filter(user=> user.username !== action.payload),
				};
			}
			case 'ADD_FAVORITES_FAILED': {
				return {
					...state,
					error: action.error,
				};
			}
      default :
        return state;
    }
};

export default reducerFavoritesList;
