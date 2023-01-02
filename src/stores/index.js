import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers';
import { encryptTransform } from 'redux-persist-transform-encrypt';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['generalReducer'],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_KEY_STORE,
      onError: function (error) {
        console.log(error);
      }
    })
  ]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);
