import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { createNote } from '../../../../redux/slices/userSlice';
import TextInput from '../../../../components/TextInput';

const CreateNoteDialog = ({ showDialog, onClose }) => {
	const { activeUser, success } = useSelector((state) => state.user);
	const [topic, setTopic] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();

	const handleChange = (input, value) => {
		const actionMap = {
			topic: setTopic,
			content: setContent,
		};

		const action = actionMap[input];

		action && action(value);
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

	const handleSuccess = useCallback(() => {
		if (success) {
			setTopic('');
			setContent('');
		}
	}, [success]);

	useEffect(() => {
		handleSuccess();
	}, [handleSuccess]);

	return (
		<Dialog open={showDialog} onClose={onClose} maxWidth='sm' fullWidth>
			<DialogTitle>Create New Note</DialogTitle>
			<DialogContent>
				<TextInput
					placeholder='Topic'
					value={topic}
					onChange={(e) => handleChange('topic', e.target.value)}
				/>
				<TextInput
					multiline
					rows={10}
					placeholder='Enter Note'
					value={content}
					onChange={(e) => handleChange('content', e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit}>Submit</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateNoteDialog;
