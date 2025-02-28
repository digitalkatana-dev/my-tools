import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	theme: 'light',
	showHome: true,
	showGenerator: true,
	showForm: true,
	slash: '',
	errors: null,
});

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setShowHome: (state) => {
			state.showHome = !state.showHome;
		},
		setShowGenerator: (state) => {
			state.showGenerator = !state.showGenerator;
		},
		setShowForm: (state) => {
			state.showForm = !state.showForm;
		},
		setSlash: (state, action) => {
			state.slash = action.payload;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
});

export const {
	setTheme,
	setShowHome,
	setShowGenerator,
	setShowForm,
	setSlash,
	clearErrors,
} = appSlice.actions;

export default appSlice.reducer;
