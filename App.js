import React from 'react';
import { StatusBar } from 'react-native';
import Navigator from './navigation/Navigator'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={'#AD1457'} />
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
