import React from 'react';
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NoteItem = ({ data }) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography component='span'>Topic</Typography>
			</AccordionSummary>
			<AccordionDetails>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				malesuada lacus ex, sit amet blandit leo lobortis eget.
			</AccordionDetails>
			<AccordionActions>
				<span>Delete</span>
			</AccordionActions>
		</Accordion>
	);
};

export default NoteItem;
