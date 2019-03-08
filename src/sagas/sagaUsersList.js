import { 
  call, 
  put, 
  takeLatest 
} from "redux-saga/effects";

import fetchUsers from '../api/api';

export default function* watcherUsersList() {    
  yield takeLatest('FETCH_REQUEST_USERS_LIST', workerSaga);
};

function* workerSaga() {    
  try {
    const res = yield call(fetchUsers);
    yield put({ type: 'FETCH_SUCCESS_USERS_LIST', payload: res });

  } catch (error) {
    yield put({ type: 'FETCH_ERROR_USERS_LIST', payload: error });
  }
}
