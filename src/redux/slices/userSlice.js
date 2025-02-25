import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { getUserProjects } from './projectSlice';
import toolsApi from '../../api/toolsApi';

export const login = createAsyncThunk(
	'user/login',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const res = await toolsApi.post('/login', data);
			const { success, userProfile, token } = res.data;
			console.log(res.data);
			localStorage.setItem('token', token);
			success && dispatch(getUserProjects(userProfile._id));
			return { success, userProfile };
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const userAdapter = createEntityAdapter();
const initialState = userAdapter.getInitialState({
	loading: false,
	email: '',
	password: '',
	user: null,
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
			state.user = null;
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
				state.user = action.payload.userProfile;
				state.email = '';
				state.password = '';
				state.errors = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const {
	setEmail,
	setPassword,
	clearSuccess_User,
	clearErrors_User,
	logout,
} = userSlice.actions;

export default userSlice.reducer;
