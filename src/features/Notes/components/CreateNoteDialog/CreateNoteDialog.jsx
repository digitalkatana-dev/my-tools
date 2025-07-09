import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Stack,
	Typography,
} from '@mui/material';
import {
	toggleIsPublic,
	setTopic,
	setContent,
	createNote,
	clearNoteErrors,
} from '../../../../redux/slices/noteSlice';
import TextInput from '../../../../components/TextInput';
import Editor from '../Editor';
import Switch from '../../../../components/Switch';
import './noteDialog.scss';

const CreateNoteDialog = ({ showDialog, onClose }) => {
	const { theme } = useSelector((state) => state.app);
	const { activeUser } = useSelector((state) => state.user);
	const { isPublic, topic, content, errors } = useSelector(
		(state) => state.note
	);
	const dispatch = useDispatch();

	const handleFocus = () => {
		dispatch(clearNoteErrors());
	};

	const handleChange = (input, value) => {
		const actionMap = {
			public: toggleIsPublic,
			topic: setTopic,
			content: setContent,
		};

		const action = actionMap[input];

		action && dispatch(action(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			isPublic,
			topic,
			content,
			user: activeUser?._id,
		};

		dispatch(createNote(data));
	};

	return (
		<Dialog
			id='note-dialog'
			open={showDialog}
			onClose={onClose}
			maxWidth='sm'
			className={theme === 'dark' ? 'dark' : ''}
			fullWidth
		>
			<DialogTitle>Create New Note</DialogTitle>
			<DialogContent id='note-dialog-content'>
				<FormControl fullWidth>
					<Stack direction='row' alignItems='center' alignSelf='center'>
						<Typography>Private</Typography>
						<Switch
							checked={isPublic}
							onChange={(e) => handleChange('public', e.target.checked)}
						/>
						<Typography>Public</Typography>
					</Stack>
				</FormControl>
				<FormControl fullWidth>
					<TextInput
						placeholder='Topic'
						value={topic}
						onFocus={handleFocus}
						onChange={(e) => handleChange('topic', e.target.value)}
						error={errors?.topic}
					/>
				</FormControl>
				<FormControl fullWidth>
					<Editor
						value={content}
						onFocus={handleFocus}
						onChange={(value) => handleChange('content', value)}
						error={errors?.content}
					/>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit}>Submit</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateNoteDialog;
