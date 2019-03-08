const initialState = {
  searchValue: '',
};

const reducerSearchBar = (state = initialState, action) => {   
    switch (action.type) {
      case 'SEARCH_BAR_VALUE_TYPED':
        return {
          ...state,
          searchValue: action.payload,
        }
      default :
        return state;
    }
};

export default reducerSearchBar;
