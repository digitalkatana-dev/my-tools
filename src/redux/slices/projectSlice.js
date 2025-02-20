import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import toolsApi from '../../api/toolsApi';

export const login = createAsyncThunk(
	'projects/login',
	async (data, { rejectWithValue, dispatch }) => {
		try {
			const res = await toolsApi.post('/login', data);
			const { success, userProfile, token } = res.data;
			localStorage.setItem('token', token);
			success && dispatch(getUserProjects(userProfile._id));
			return { success, userProfile };
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const getUserProjects = createAsyncThunk(
	'projects/get_user_projects',
	async (data, { rejectWithValue }) => {
		try {
			const res = await toolsApi.get(`/projects/user/${data}`);
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const addNewProject = createAsyncThunk(
	'projects/create_new',
	async (data, { rejectWithValue }) => {
		try {
			const res = await toolsApi.post('/projects', data);
			return res.data;
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
	projectType: 'voice',
	client: '',
	circuit: {},
	voice: {
		three_a: false,
		three_a_i: false,
		three_a_ii: false,
		three_b: false,
		four_a_i: false,
		four_a_ii: false,
	},
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
		setProjectType: (state, action) => {
			state.projectType = action.payload;
		},
		setClient: (state, action) => {
			state.client = action.payload;
		},
		setSelectedProject: (state, action) => {
			state.selectedProject = action.payload;
		},
		setVoice3A: (state) => {
			state.voice.three_a = !state.voice.three_a;
		},
		setVoice3Ai: (state) => {
			state.voice.three_a_i = !state.voice.three_a_i;
		},
		setVoice3Aii: (state) => {
			state.voice.three_a_ii = !state.voice.three_a_ii;
		},
		setVoice3B: (state) => {
			state.voice.three_b = !state.voice.three_b;
		},
		setVoice4Ai: (state) => {
			state.voice.four_a_i = !state.voice.four_a_i;
		},
		setVoice4Aii: (state) => {
			state.voice.four_a_ii = !state.voice.four_a_ii;
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
			state.projectType = 'voice';
			state.client = '';
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
				state.email = '';
				state.password = '';
				state.errors = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(getUserProjects.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(getUserProjects.fulfilled, (state, action) => {
				state.loading = false;
				state.allProjects = action.payload;
			})
			.addCase(getUserProjects.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(addNewProject.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(addNewProject.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload.success;
				state.allProjects = action.payload.userProjects;
				state.projectType = 'voice';
				state.client = '';
				state.errors = null;
			})
			.addCase(addNewProject.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const {
	setEmail,
	setPassword,
	setProjectType,
	setClient,
	setSelectedProject,
	setVoice3A,
	setVoice3Ai,
	setVoice3Aii,
	setVoice3B,
	setVoice4Ai,
	setVoice4Aii,
	clearSuccess,
	clearErrors,
	logout,
} = projectSlice.actions;

export default projectSlice.reducer;
