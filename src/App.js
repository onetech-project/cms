import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './stores';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation';
import { Loader } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
