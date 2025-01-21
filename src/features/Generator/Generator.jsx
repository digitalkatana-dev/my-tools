import { FormControl, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAppPin } from '../../redux/slices/securitySlice';
import { randomPassword, randomPin } from '../../util/helpers';
import './generator.scss';
import Switch from '../../components/Switch';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import SecurityDialog from './components/SecurityDialog';

const Generator = () => {
	const [manualPass, setManualPass] = useState(false);
	const [manualPassInput, setManualPassInput] = useState('');
	const [manualPin, setManualPin] = useState(false);
	const [manualPinInput, setManualPinInput] = useState('');
	const [passLength, setPassLength] = useState('');
	const [passOutput, setPassOutput] = useState('');
	const [pinLength, setPinLength] = useState('');
	const [pinOutput, setPinOutput] = useState('');
	const [showDialog, setShowDialog] = useState(false);

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
			manPass: setManualPassInput,
			manPin: setManualPinInput,
			pass: setPassLength,
			pin: setPinLength,
		};

		const action = actionMap[input];

		action && action(value);
	};

	const handlePassClick = () => {
		setShowDialog(true);
	};

	const handlePinClick = () => {
		dispatch(setAppPin(pinOutput));
		setManualPinInput('');
		setPinLength('');
		setPinOutput('');
		setManualPin(false);
	};

	const handlePassSubmit = (e) => {
		e.preventDefault();
		setPassOutput(manualPass ? manualPassInput : randomPassword(passLength));
	};

	const handlePinSubmit = (e) => {
		e.preventDefault();
		setPinOutput(manualPin ? manualPinInput : randomPin(pinLength));
	};

	const handleCloseDialog = () => {
		setShowDialog(false);
		setManualPass(false);
		setManualPassInput('');
		setPassLength('');
		setPassOutput('');
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
						{manualPass ? (
							<TextInput
								placeholder='Enter Password'
								value={manualPassInput}
								onChange={(e) => handleChange('manPass', e.target.value)}
							/>
						) : (
							<TextInput
								type='number'
								placeholder='Enter Password length'
								value={passLength}
								onChange={(e) => handleChange('pass', e.target.value)}
							/>
						)}
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
						{manualPin ? (
							<TextInput
								placeholder='Enter Pin'
								value={manualPinInput}
								onChange={(e) => handleChange('manPin', e.target.value)}
							/>
						) : (
							<TextInput
								type='number'
								placeholder='Enter Pin Length'
								value={pinLength}
								onChange={(e) => handleChange('pin', e.target.value)}
							/>
						)}
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
