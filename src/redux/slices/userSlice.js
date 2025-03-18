import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { populateUserData } from './appSlice';
import { getUserProjects } from './projectSlice';
import {
	setPassInput,
	setPassOutput,
	setPinInput,
	setPinOutput,
} from './securitySlice';
import toolsApi from '../../api/toolsApi';

export const login = createAsyncThunk(
	'user/login',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const res = await toolsApi.post('/login', data);
			const { success, userProfile, token } = res.data;
			console.log(res.data);
			localStorage.setItem('token', token);
			if (success) {
				dispatch(getUserProjects(userProfile._id));
				dispatch(populateUserData(userProfile));
			}
			return { success, userProfile };
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const updateProfile = createAsyncThunk(
	'profile/update',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const res = await toolsApi.put('/profiles', data);
			const { success, updatedProfile } = res.data;
			if (success) {
				dispatch(setPassInput(''));
				dispatch(setPassOutput(''));
				dispatch(setPinInput(''));
				dispatch(setPinOutput(''));
				dispatch(populateUserData(updatedProfile));
			}
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const generatePasswordToken = createAsyncThunk(
	'user/generate_token',
	async (data, { rejectWithValue }) => {
		try {
			const res = await toolsApi.post('/users/password-token', data);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const resetWithToken = createAsyncThunk(
	'user/reset_with_token',
	async (data, { rejectWithValue }) => {
		try {
			const res = await toolsApi.post('/users/reset-password', data);
			return res.data;
		} catch (err) {
			console.log(err);
			return rejectWithValue(err.response.data);
		}
	}
);

export const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
	loading: false,
	email: '',
	password: '',
	firstName: '',
	phoneNumber: '',
	phoneExt: '',
	bridgeNumber: '',
	bridgeExt: '',
	bridgePin: '',
	activeUser: null,
	success: null,
	errors: null,
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
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
		clearSuccess_User: (state) => {
			state.success = null;
		},
		clearErrors_User: (state) => {
			state.errors = null;
		},
		logout: (state) => {
			localStorage.removeItem('token');
			state.loading = false;
			state.email = '';
			state.password = '';
			state.firstName = '';
			state.phoneNumber = '';
			state.phoneExt = '';
			state.bridgeNumber = '';
			state.bridgeExt = '';
			state.bridgePin = '';
			state.activeUser = null;
			state.success = null;
			state.errors = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload.success;
				state.activeUser = action.payload.userProfile;
				state.email = '';
				state.password = '';
				state.errors = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(updateProfile.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload.success;
				state.activeUser = action.payload.updatedProfile;
				state.firstName = '';
				state.phoneNumber = '';
				state.phoneExt = '';
				state.bridgeNumber = '';
				state.bridgeExt = '';
				state.bridgePin = '';
				state.errors = null;
			})
			.addCase(updateProfile.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(generatePasswordToken.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(generatePasswordToken.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload;
				state.email = '';
			})
			.addCase(generatePasswordToken.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(resetWithToken.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(resetWithToken.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload;
				state.password = '';
			})
			.addCase(resetWithToken.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const {
	setEmail,
	setPassword,
	setFirstName,
	setPhoneNumber,
	setPhoneExt,
	setBridgeNumber,
	setBridgeExt,
	setBridgePin,
	clearSuccess_User,
	clearErrors_User,
	logout,
} = userSlice.actions;

export default userSlice.reducer;
