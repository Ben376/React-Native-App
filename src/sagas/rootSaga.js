import { spawn, all } from 'redux-saga/effects';
import watcherUsersList from './sagaUsersList.js';
import watcherFavoritesList from './sagaFavoritesList.js';

export function* rootSaga() {
    yield all ([
        spawn(watcherUsersList),
        spawn(watcherFavoritesList),
    ])
};
