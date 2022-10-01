import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contactsSlice';
import authSlice from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist';

const persistAuthConfig = getPersistConfig({
  key: 'token',
  storage: storage,
  whitelist: ['userData.token'],
  rootReducer: authSlice,
});

const rootReduser = combineReducers({
  phonebook: contactsSlice,
  auth: persistReducer(persistAuthConfig, authSlice),
});

const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { store, persistor };
