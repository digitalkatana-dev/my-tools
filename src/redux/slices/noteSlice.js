import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { getProfile } from './userSlice';
import toolsApi from '../../api/toolsApi';

export const createNote = createAsyncThunk(
	'note/create_note',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const res = await toolsApi.post('/notes', data);
			const { success } = res.data;
			success && dispatch(getProfile());
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const updateNote = createAsyncThunk(
	'note/update_note',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const res = await toolsApi.put(`/notes/${data._id}`, data);
			const { success } = res.data;
			success && dispatch(getProfile());
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const deleteNote = createAsyncThunk(
	'note/delete_note',
	async (data, { dispatch, rejectWithValue }) => {
		try {
			const res = await toolsApi.delete(`/notes/${data}`);
			const { success } = res.data;
			success && dispatch(getProfile());
			return res.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const noteAdapter = createEntityAdapter();
const initialState = noteAdapter.getInitialState({
	loading: false,
	topic: '',
	content: '',
	success: null,
	errors: null,
});

export const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		setTopic: (state, action) => {
			state.topic = action.payload;
		},
		setContent: (state, action) => {
			state.content = action.payload;
		},
		populateNote: (state, action) => {
			state.topic = action.payload.topic;
			state.content = action.payload.content;
		},
		clearNoteSuccess: (state) => {
			state.success = null;
		},
		clearNoteErrors: (state) => {
			state.errors = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createNote.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(createNote.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload.success;
				state.topic = '';
				state.content = '';
				state.errors = null;
			})
			.addCase(createNote.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(updateNote.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(updateNote.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload.success;
				state.topic = '';
				state.content = '';
				state.errors = null;
			})
			.addCase(updateNote.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			})
			.addCase(deleteNote.pending, (state) => {
				state.loading = true;
				state.errors = null;
			})
			.addCase(deleteNote.fulfilled, (state, action) => {
				state.loading = false;
				state.success = action.payload.success;
				state.errors = null;
			})
			.addCase(deleteNote.rejected, (state, action) => {
				state.loading = false;
				state.errors = action.payload;
			});
	},
});

export const {
	setTopic,
	setContent,
	populateNote,
	clearNoteSuccess,
	clearNoteErrors,
} = noteSlice.actions;

export default noteSlice.reducer;
