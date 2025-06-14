import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	FormControl,
	Typography,
} from '@mui/material';
import {
	populateNote,
	setTopic,
	setContent,
	updateNote,
	deleteNote,
	clearNoteErrors,
} from '../../../../redux/slices/noteSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextInput from '../../../../components/TextInput';
import Editor from '../Editor';

const NoteItem = ({ data }) => {
	const { topic, content, errors } = useSelector((state) => state.note);
	const [edit, setEdit] = useState(false);
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

	const handleEditClick = () => {
		dispatch(populateNote(data));
		setEdit(true);
	};

	const handleCancel = () => {
		setEdit(false);
		dispatch(setTopic(''));
		dispatch(setContent(''));
	};

	const handleUpdateClick = () => {
		const updateData = {
			_id: data?._id,
			...(data?.topic !== topic && { topic }),
			...(data?.content !== content && { content }),
		};

		dispatch(updateNote(updateData));
		setEdit(false);
	};

	const handleDelete = () => {
		dispatch(deleteNote(data?._id));
	};

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				{edit ? (
					<FormControl fullWidth>
						<TextInput
							inputClass='edit-input'
							placeholder='Topic'
							value={topic}
							onFocus={handleFocus}
							onChange={(e) => handleChange('topic', e.target.value)}
							error={errors?.topic}
						/>
					</FormControl>
				) : (
					<Typography component='span'>{data?.topic}</Typography>
				)}
			</AccordionSummary>
			<AccordionDetails>
				{edit ? (
					<FormControl fullWidth>
						<Editor
							value={content}
							onFocus={handleFocus}
							onChange={(value) => handleChange('content', value)}
							error={errors?.content}
						/>
					</FormControl>
				) : (
					<div
						className='note-content'
						dangerouslySetInnerHTML={{ __html: data?.content }}
					/>
				)}
			</AccordionDetails>
			<AccordionActions>
				{edit ? (
					<>
						<Button color='error' onClick={handleCancel}>
							Cancel
						</Button>
						<Button onClick={handleUpdateClick}>Update</Button>
					</>
				) : (
					<>
						<Button onClick={handleEditClick}>Edit</Button>
						<Button onClick={handleDelete}>Delete</Button>
					</>
				)}
			</AccordionActions>
		</Accordion>
	);
};

export default NoteItem;
