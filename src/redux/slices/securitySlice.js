import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const securityAdapter = createEntityAdapter();
const initialState = securityAdapter.getInitialState({
	loading: false,
	passInput: '',
	passOutput: '',
	pinInput: '',
	pinOutput: '',
	errors: null,
});

export const securitySlice = createSlice({
	name: 'security',
	initialState,
	reducers: {
		setPassInput: (state, action) => {
			state.passInput = action.payload;
		},
		setPassOutput: (state, action) => {
			state.passOutput = action.payload;
		},
		setPinInput: (state, action) => {
			state.pinInput = action.payload;
		},
		setPinOutput: (state, action) => {
			state.pinOutput = action.payload;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
});

export const {
	setPassInput,
	setPassOutput,
	setPinInput,
	setPinOutput,
	clearErrors,
} = securitySlice.actions;

export default securitySlice.reducer;
