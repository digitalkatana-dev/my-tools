import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { logout } from './userSlice';
import toolsApi from '../../api/toolsApi';

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
	view: 'list',
	projectType: 'voice',
	client: '',
	circuit: {},
	voice: {
		three_a_i: false,
		three_a_ii: false,
		three_a_iii: false,
		four_a_i: false,
		four_a_ii: false,
		four_b_i: false,
		four_b_ii_1: false,
		four_b_ii_2: false,
		four_b_iii: false,
		four_b_iv_1: false,
		four_b_iv_2: false,
		four_b_iv_3: false,
		four_b_iv_4: false,
		four_c_i: false,
		four_c_ii: false,
		four_c_iii: false,
		four_c_iv: false,
		four_c_v_1: false,
		four_c_v_2: false,
		four_c_v_3: false,
		four_c_vi: false,
		four_d_i: false,
		four_d_ii_1: false,
		four_d_ii_2: false,
		four_d_ii_3: false,
		four_d_ii_4: false,
		four_d_ii_5: false,
	},
	allProjects: null,
	selectedProject: null,
	success: null,
	errors: null,
});

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		setView: (state, action) => {
			state.view = action.payload;
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
		setVoice3Ai: (state) => {
			state.voice.three_a_i = !state.voice.three_a_i;
		},
		setVoice3Aii: (state) => {
			state.voice.three_a_ii = !state.voice.three_a_ii;
		},
		setVoice3Aiii: (state) => {
			state.voice.three_a_iii = !state.voice.three_a_iii;
		},
		setVoice4Ai: (state) => {
			state.voice.four_a_i = !state.voice.four_a_i;
		},
		setVoice4Aii: (state) => {
			state.voice.four_a_ii = !state.voice.four_a_ii;
		},
		setVoice4Bi: (state) => {
			state.voice.four_b_i = !state.voice.four_b_i;
		},
		setVoice4Bii1: (state) => {
			state.voice.four_b_ii_1 = !state.voice.four_b_ii_1;
		},
		setVoice4Bii2: (state) => {
			state.voice.four_b_ii_2 = !state.voice.four_b_ii_2;
		},
		setVoice4Biii: (state) => {
			state.voice.four_b_iii = !state.voice.four_b_iii;
		},
		setVoice4Biv1: (state) => {
			state.voice.four_b_iv_1 = !state.voice.four_b_iv_1;
		},
		setVoice4Biv2: (state) => {
			state.voice.four_b_iv_2 = !state.voice.four_b_iv_2;
		},
		setVoice4Biv3: (state) => {
			state.voice.four_b_iv_3 = !state.voice.four_b_iv_3;
		},
		setVoice4Biv4: (state) => {
			state.voice.four_b_iv_4 = !state.voice.four_b_iv_4;
		},
		setVoice4Ci: (state) => {
			state.voice.four_c_i = !state.voice.four_c_i;
		},
		setVoice4Cii: (state) => {
			state.voice.four_c_ii = !state.voice.four_c_ii;
		},
		setVoice4Ciii: (state) => {
			state.voice.four_c_iii = !state.voice.four_c_iii;
		},
		setVoice4Civ: (state) => {
			state.voice.four_c_iv = !state.voice.four_c_iv;
		},
		setVoice4Cv1: (state) => {
			state.voice.four_c_v_1 = !state.voice.four_c_v_1;
		},
		setVoice4Cv2: (state) => {
			state.voice.four_c_v_2 = !state.voice.four_c_v_2;
		},
		setVoice4Cv3: (state) => {
			state.voice.four_c_v_3 = !state.voice.four_c_v_3;
		},
		setVoice4Cvi: (state) => {
			state.voice.four_c_vi = !state.voice.four_c_vi;
		},
		setVoice4Di: (state) => {
			state.voice.four_d_i = !state.voice.four_d_i;
		},
		setVoice4Dii1: (state) => {
			state.voice.four_d_ii_1 = !state.voice.four_d_ii_1;
		},
		setVoice4Dii2: (state) => {
			state.voice.four_d_ii_2 = !state.voice.four_d_ii_2;
		},
		setVoice4Dii3: (state) => {
			state.voice.four_d_ii_3 = !state.voice.four_d_ii_3;
		},
		setVoice4Dii4: (state) => {
			state.voice.four_d_ii_4 = !state.voice.four_d_ii_4;
		},
		setVoice4Dii5: (state) => {
			state.voice.four_d_ii_5 = !state.voice.four_d_ii_5;
		},
		clearSuccess: (state) => {
			state.success = null;
		},
		clearErrors: (state) => {
			state.errors = null;
		},
	},
	extraReducers: (builder) => {
		builder
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
			})
			.addCase(logout, (state) => {
				state.loading = false;
				state.view = 'list';
				state.projectType = 'voice';
				state.client = '';
				state.allProjects = null;
				state.selectedProject = null;
				state.success = null;
				state.errors = null;
			});
	},
});

export const {
	setView,
	setProjectType,
	setClient,
	setSelectedProject,
	setVoice3Ai,
	setVoice3Aii,
	setVoice3Aiii,
	setVoice4Ai,
	setVoice4Aii,
	setVoice4Bi,
	setVoice4Bii1,
	setVoice4Bii2,
	setVoice4Biii,
	setVoice4Biv1,
	setVoice4Biv2,
	setVoice4Biv3,
	setVoice4Biv4,
	setVoice4Ci,
	setVoice4Cii,
	setVoice4Ciii,
	setVoice4Civ,
	setVoice4Cv1,
	setVoice4Cv2,
	setVoice4Cv3,
	setVoice4Cvi,
	setVoice4Di,
	setVoice4Dii1,
	setVoice4Dii2,
	setVoice4Dii3,
	setVoice4Dii4,
	setVoice4Dii5,
	clearSuccess,
	clearErrors,
} = projectSlice.actions;

export default projectSlice.reducer;
