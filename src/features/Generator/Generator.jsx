import { FormControl, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/slices/userSlice';
import {
	setPassInput,
	setPassOutput,
	setPinInput,
	setPinOutput,
} from '../../redux/slices/securitySlice';
import { randomPassword, randomPin } from '../../util/helpers';
import './generator.scss';
import Switch from '../../components/Switch';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SecurityDialog from './components/SecurityDialog';

const Generator = () => {
	const [manualPass, setManualPass] = useState(false);
	const [manualPin, setManualPin] = useState(false);
	const [showDialog, setShowDialog] = useState(false);
	const { passInput, passOutput, pinInput, pinOutput } = useSelector(
		(state) => state.security
	);

	const dispatch = useDispatch();

	const handleSwitch = (input) => {
		if (input === 'pass') {
			setManualPass(!manualPass);
		} else if (input === 'pin') {
			setManualPin(!manualPin);
		}
	};

	const handleChange = (input, value) => {
		const actionMap = {
			pass: setPassInput,
			pin: setPinInput,
		};

		const action = actionMap[input];

		action && dispatch(action(value));
	};

	const handlePassClick = () => {
		setShowDialog(true);
	};

	const handlePinClick = () => {
		const data = {
			appPin: pinOutput,
		};

		dispatch(updateProfile(data));
		setManualPin(false);
	};

	const handlePassSubmit = (e) => {
		e.preventDefault();
		dispatch(setPassOutput(manualPass ? passInput : randomPassword(passInput)));
	};

	const handlePinSubmit = (e) => {
		e.preventDefault();
		dispatch(setPinOutput(manualPin ? pinInput : randomPin(pinInput)));
	};

	const handleCloseDialog = () => {
		setShowDialog(false);
		setManualPass(false);
		dispatch(setPassOutput(''));
	};

	return (
		<div id='generator'>
			<div className='pass-gen'>
				<Stack direction='row' alignItems='center' alignSelf='flex-end'>
					<Typography>Gen</Typography>
					<Switch checked={manualPass} onChange={() => handleSwitch('pass')} />
					<Typography>Manual</Typography>
				</Stack>
				<form onSubmit={handlePassSubmit}>
					<FormControl>
						<TextInput
							type={manualPass ? 'text' : 'number'}
							placeholder={
								manualPass ? 'Enter Password' : 'Enter Password Length'
							}
							value={passInput}
							onChange={(e) => handleChange('pass', e.target.value)}
						/>
					</FormControl>
					<Button type='submit'>{manualPass ? 'Submit' : 'Generate'}</Button>
				</form>
				{passOutput && <h3 onClick={handlePassClick}>{passOutput}</h3>}
			</div>
			<div className='pin-gen'>
				<Stack direction='row' alignItems='center' alignSelf='flex-end'>
					<Typography>Gen</Typography>
					<Switch checked={manualPin} onChange={() => handleSwitch('pin')} />
					<Typography>Manual</Typography>
				</Stack>
				<form onSubmit={handlePinSubmit}>
					<FormControl>
						<TextInput
							type={manualPin ? 'text' : 'number'}
							placeholder={manualPin ? 'Enter Pin' : 'Enter Pin Length'}
							value={pinInput}
							onChange={(e) => handleChange('pin', e.target.value)}
						/>
					</FormControl>
					<Button type='submit'>{manualPin ? 'Submit' : 'Generate'}</Button>
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
