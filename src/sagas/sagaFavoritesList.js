import { 
	put, 
	takeLatest 
} from "redux-saga/effects";

export default function* watcherFavoritesList() {
  yield takeLatest('REQUEST_ADD_FAVORITES', workerFavorites);
}

function* workerFavorites(action) {
  try {
    yield put({ type: 'ADD_FAVORITES_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'ADD_FAVORITES_FAILED', payload: error });
  }
}
