import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const securityAdapter = createEntityAdapter();
const initialState = securityAdapter.getInitialState({
	loading: false,
	windows: '',
	warden: '',
	appPin: '',
	errors: null,
});

export const securitySlice = createSlice({
	name: 'security',
	initialState,
	reducers: {
		setWindows: (state, action) => {
			state.windows = action.payload;
		},
		setWarden: (state, action) => {
			state.warden = action.payload;
		},
		setAppPin: (state, action) => {
			state.appPin = action.payload;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
});

export const { setWindows, setWarden, setAppPin, setLength, clearErrors } =
	securitySlice.actions;

export default securitySlice.reducer;
