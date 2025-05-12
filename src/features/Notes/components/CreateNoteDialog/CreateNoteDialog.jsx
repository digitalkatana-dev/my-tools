import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import {
	createNote,
	clearErrors_User,
} from '../../../../redux/slices/userSlice';
import TextInput from '../../../../components/TextInput';

const CreateNoteDialog = ({ showDialog, onClose }) => {
	const { theme } = useSelector((state) => state.app);
	const { activeUser, success, errors } = useSelector((state) => state.user);
	const [topic, setTopic] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();

	const handleFocus = () => {
		dispatch(clearErrors_User());
	};

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
		<Dialog
			open={showDialog}
			onClose={onClose}
			maxWidth='sm'
			className={theme === 'dark' ? 'dark' : ''}
			fullWidth
		>
			<DialogTitle>Create New Note</DialogTitle>
			<DialogContent>
				<TextInput
					placeholder='Topic'
					value={topic}
					onFocus={handleFocus}
					onChange={(e) => handleChange('topic', e.target.value)}
					error={errors?.topic}
				/>
				<TextInput
					multiline
					rows={10}
					placeholder='Enter Note'
					value={content}
					onFocus={handleFocus}
					onChange={(e) => handleChange('content', e.target.value)}
					error={errors?.content}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleSubmit}>Submit</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateNoteDialog;
