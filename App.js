// @flow
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './src/store/store';
import MainNavigator from './src/components/navigators/MainNavigator';

let persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </PersistGate>
    );
  }
}

export default App;
