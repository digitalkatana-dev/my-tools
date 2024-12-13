import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setWindows, setWarden } from '../../../../redux/slices/securitySlice';
import Button from '../../../../components/Button';

const SecurityDialog = ({ showDialog, passOutput, onClose }) => {
	const dispatch = useDispatch();

	const handleClick = (input) => {
		const actionMap = {
			win: setWindows,
			war: setWarden,
		};

		const action = actionMap[input];

		action && dispatch(action(btoa(passOutput)));
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
