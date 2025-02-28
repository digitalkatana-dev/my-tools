import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	theme: 'light',
	showHome: true,
	showGenerator: true,
	slash: '',
	errors: null,
});

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		populateUserData: (state, action) => {
			state.theme = action.payload.theme;
			state.showHome = action.payload.showHome;
			state.showGenerator = action.payload.showGenerator;
		},
		setSlash: (state, action) => {
			state.slash = action.payload;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
});

export const { populateUserData, setSlash, clearErrors } = appSlice.actions;

export default appSlice.reducer;
