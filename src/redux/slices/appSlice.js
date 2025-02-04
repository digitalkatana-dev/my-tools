import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();
const initialState = appAdapter.getInitialState({
	loading: false,
	theme: 'light',
	showHome: true,
	showGenerator: true,
	showForm: true,
	firstName: '',
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
		setShowHome: (state) => {
			state.showHome = !state.showHome;
		},
		setShowGenerator: (state) => {
			state.showGenerator = !state.showGenerator;
		},
		setShowForm: (state) => {
			state.showForm = !state.showForm;
		},
		setFirstName: (state, action) => {
			state.firstName = action.payload;
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
	setShowHome,
	setShowGenerator,
	setShowForm,
	setFirstName,
	setPhoneNumber,
	setPhoneExt,
	setBridgeNumber,
	setBridgeExt,
	setBridgePin,
	clearErrors,
} = appSlice.actions;

export default appSlice.reducer;
