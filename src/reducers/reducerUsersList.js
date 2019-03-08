const initialState = {
  usersList: [],
  error: [],
};

const reducerUsersList = (state = initialState, action) => {   
    switch (action.type) {
      case 'FETCH_REQUEST_USERS_LIST' :
        return {
          ...state,
        }
      case 'FETCH_SUCCESS_USERS_LIST' : 
        return {
          ...state,
          usersList: action.payload
        }
      case 'FETCH_ERROR_USERS_LIST' : 
        return {
          ...state,
          error: action.error,
        }
      default :
        return state;
    }
};

export default reducerUsersList;
