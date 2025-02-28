import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../../redux/slices/userSlice';
import Button from '../../../../components/Button';

const SecurityDialog = ({ showDialog, passOutput, onClose }) => {
	const dispatch = useDispatch();

	const handleClick = (input) => {
		const data = {
			...(input === 'win' && { windows: btoa(passOutput) }),
			...(input === 'war' && { warden: btoa(passOutput) }),
		};
		dispatch(updateProfile(data));
		onClose();
	};

	return (
		<Dialog open={showDialog} onClose={onClose} maxWidth='sm' fullWidth>
			<DialogTitle>Security</DialogTitle>
			<DialogContent>
				<DialogContentText>Choose</DialogContentText>
			</DialogContent>
			<DialogActions style={{ justifyContent: 'space-evenly' }}>
				<Button btnClass='dialog-btn' onClick={() => handleClick('win')}>
					Save As Windows
				</Button>
				<Button btnClass='dialog-btn' onClick={() => handleClick('war')}>
					Save As Warden
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SecurityDialog;
