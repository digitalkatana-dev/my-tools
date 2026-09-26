import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';
import securityReducer from './slices/securitySlice';
import circuitReducer from './slices/circuitSlice';
import noteReducer from './slices/noteSlice';

const appPersistConfig = {
  key: 'app',
  storage,
  whitelist: ['theme', 'showHome', 'showGenerator'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['activeUser'],
};

const circuitPersistConfig = {
  key: 'circuit',
  storage,
};

export const store = configureStore({
  reducer: {
    app: persistReducer(appPersistConfig, appReducer),
    user: persistReducer(userPersistConfig, userReducer),
    security: securityReducer,
    note: noteReducer,
    circuit: persistReducer(circuitPersistConfig, circuitReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(store);
