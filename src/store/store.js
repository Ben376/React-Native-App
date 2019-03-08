// @flow
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import indexReducer from '../reducers/index';
import { rootSaga } from '../sagas/rootSaga';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['reducerFavoritesList'],
};

const persistedReducer = persistReducer(persistConfig, indexReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
