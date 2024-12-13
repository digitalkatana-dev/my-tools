import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	theme: 'light',
	showForm: true,
	phoneNumber: '',
	phoneExt: '',
	bridgeNumber: '',
	bridgeExt: '',
	bridgePin: '',
	errors: null,
});

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		setShowForm: (state) => {
			state.showForm = !state.showForm;
		},
		setPhoneNumber: (state, action) => {
			state.phoneNumber = action.payload;
		},
		setPhoneExt: (state, action) => {
			state.phoneExt = action.payload;
		},
		setBridgeNumber: (state, action) => {
			state.bridgeNumber = action.payload;
		},
		setBridgeExt: (state, action) => {
			state.bridgeExt = action.payload;
		},
		setBridgePin: (state, action) => {
			state.bridgePin = action.payload;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
});

export const {
	setTheme,
	setShowForm,
	setPhoneNumber,
	setPhoneExt,
	setBridgeNumber,
	setBridgeExt,
	setBridgePin,
	clearErrors,
} = appSlice.actions;

export default appSlice.reducer;
