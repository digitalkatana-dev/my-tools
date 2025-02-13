import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import toolsApi from '../../api/toolsApi';

export const login = createAsyncThunk(
	'projects/login',
	async (data, { rejectWithValue }) => {
		try {
			const res = await toolsApi.post('/login', data);
			const { success, userProfile, token } = res.data;
			localStorage.setItem('token', token);
			return { success, userProfile };
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const projectAdapter = createEntityAdapter();
const initialState = projectAdapter.getInitialState({
	loading: false,
	email: '',
	password: '',
	user: null,
	allProjects: null,
	selectedProject: null,
	success: null,
	errors: null,
});

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		clearSuccess: (state) => {
			state.success = null;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
		logout: (state) => {
			localStorage.removeItem('token');
			state.loading = false;
			state.email = '';
			state.password = '';
			state.user = null;
			state.allProjects = null;
			state.selectedProject = null;
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
				state.allProjects = action.payload.userProfile.projects;
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

export const { setEmail, setPassword, clearSuccess, clearErrors, logout } =
	projectSlice.actions;

export default projectSlice.reducer;
