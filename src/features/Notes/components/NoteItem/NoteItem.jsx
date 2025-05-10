import React from 'react';
import { useDispatch } from 'react-redux';
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from '@mui/material';
import { deleteNote } from '../../../../redux/slices/userSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NoteItem = ({ data }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteNote(data?._id));
	};

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography component='span'>{data?.topic}</Typography>
			</AccordionSummary>
			<AccordionDetails>{data?.content}</AccordionDetails>
			<AccordionActions>
				<Button onClick={handleDelete}>Delete</Button>
			</AccordionActions>
		</Accordion>
	);
};

export default NoteItem;
