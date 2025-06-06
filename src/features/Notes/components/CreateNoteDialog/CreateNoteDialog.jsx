import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
} from '@mui/material';
import {
	setTopic,
	setContent,
	createNote,
	clearNoteErrors,
} from '../../../../redux/slices/noteSlice';
import TextInput from '../../../../components/TextInput';
import Editor from '../Editor';
import './noteDialog.scss';

const CreateNoteDialog = ({ showDialog, onClose }) => {
	const { theme } = useSelector((state) => state.app);
	const { activeUser } = useSelector((state) => state.user);
	const { topic, content, errors } = useSelector((state) => state.note);
	const dispatch = useDispatch();

	const handleFocus = () => {
		dispatch(clearNoteErrors());
	};

	const handleChange = (input, value) => {
		const actionMap = {
			topic: setTopic,
			content: setContent,
		};

		const action = actionMap[input];

		action && dispatch(action(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
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
