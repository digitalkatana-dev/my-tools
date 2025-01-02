import { FormControl } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAppPin } from '../../redux/slices/securitySlice';
import { randomPassword, randomPin } from '../../util/helpers';
import './generator.scss';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SecurityDialog from './components/SecurityDialog';

const Generator = () => {
	const [pinLength, setPinLength] = useState('');
	const [pinOutput, setPinOutput] = useState('');
	const [passLength, setPassLength] = useState('');
	const [passOutput, setPassOutput] = useState('');
	const [showDialog, setShowDialog] = useState(false);

	const dispatch = useDispatch();

	const handleChange = (input, value) => {
		const actionMap = {
			pin: setPinLength,
			pass: setPassLength,
		};

		const action = actionMap[input];

		action && action(value);
	};

	const handlePassClick = () => {
		setShowDialog(true);
	};

	const handlePinClick = () => {
		dispatch(setAppPin(pinOutput));
		setPinLength('');
		setPinOutput('');
	};

	const handlePassSubmit = (e) => {
		e.preventDefault();
		setPassOutput(randomPassword(passLength));
	};

	const handlePinSubmit = (e) => {
		e.preventDefault();
		setPinOutput(randomPin(pinLength));
	};

	const handleCloseDialog = () => {
		setShowDialog(false);
		setPassLength('');
		setPassOutput('');
	};

	return (
		<div id='generator'>
			<div className='pass-gen'>
				<form onSubmit={handlePassSubmit}>
					<FormControl>
						<TextInput
							type='number'
							placeholder='Enter Password length'
							value={passLength}
							onChange={(e) => setPassLength(e.target.value)}
						/>
					</FormControl>
					<Button type='submit'>Generate</Button>
				</form>
				{passOutput && <h3 onClick={handlePassClick}>{passOutput}</h3>}
			</div>
			<div className='pin-gen'>
				<form onSubmit={handlePinSubmit}>
					<FormControl>
						<TextInput
							type='number'
							placeholder='Enter Pin Length'
							value={pinLength}
							onChange={(e) => handleChange('pin', e.target.value)}
						/>
					</FormControl>
					<Button type='submit'>Generate</Button>
				</form>
				{pinOutput && <h3 onClick={handlePinClick}>{pinOutput}</h3>}
			</div>
			<SecurityDialog
				showDialog={showDialog}
				passOutput={passOutput}
				onClose={handleCloseDialog}
			/>
		</div>
	);
};

export default Generator;
