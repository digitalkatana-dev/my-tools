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
import ProjectReducer from './slices/projectSlice';

const appPersistConfig = {
	key: 'app',
	storage,
	whitelist: [
		'theme',
		'showHome',
		'showGenerator',
		'showForm',
		'firstName',
		'phoneNumber',
		'phoneExt',
		'bridgeNumber',
		'bridgeExt',
		'bridgePin',
	],
};

const userPersistConfig = {
	key: 'user',
	storage,
	whitelist: ['user'],
};

const securityPersistConfig = {
	key: 'security',
	storage,
	whitelist: ['windows', 'warden', 'appPin'],
};

const projectPersistConfig = {
	key: 'project',
	storage,
	whitelist: ['allProjects', 'selectedProject'],
};

export const store = configureStore({
	reducer: {
		app: persistReducer(appPersistConfig, appReducer),
		user: persistReducer(userPersistConfig, userReducer),
		security: persistReducer(securityPersistConfig, securityReducer),
		project: persistReducer(projectPersistConfig, ProjectReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
			},
		}),
});

export const persistor = persistStore(store);
