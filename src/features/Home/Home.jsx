import { Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setShowForm,
	setFirstName,
	setPhoneNumber,
	setPhoneExt,
	setBridgeNumber,
	setBridgeExt,
	setBridgePin,
} from '../../redux/slices/appSlice';
import { phoneFormatter } from '../../util/helpers';
import './home.scss';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Home = () => {
	const {
		showForm,
		firstName,
		phoneNumber,
		phoneExt,
		bridgeNumber,
		bridgeExt,
		bridgePin,
	} = useSelector((state) => state.app);
	const { windows, warden, appPin } = useSelector((state) => state.security);
	const [show, setShow] = useState(false);
	const [nameInput, setNameInput] = useState('');
	const [phoneInput, setPhoneInput] = useState('');
	const [phoneExtInput, setPhoneExtInput] = useState('');
	const [bridgeInput, setBridgeInput] = useState('');
	const [bridgeExtInput, setBridgeExtInput] = useState('');
	const [bridgePinInput, setBridgePinInput] = useState('');
	const dispatch = useDispatch();

	const handleReveal = () => {
		setShow(!show);
	};

	const handleClear = () => {
		dispatch(setFirstName(''));
		dispatch(setPhoneNumber(''));
		dispatch(setPhoneExt(''));
		dispatch(setBridgeNumber(''));
		dispatch(setBridgeExt(''));
		dispatch(setBridgePin(''));
		dispatch(setShowForm());
	};

	const handleChange = (input, value) => {
		const actionMap = {
			name: setNameInput,
			phone: setPhoneInput,
			phoneExt: setPhoneExtInput,
			bridge: setBridgeInput,
			bridgeExt: setBridgeExtInput,
			bridgePin: setBridgePinInput,
		};

		const action = actionMap[input];

		action && action(value);
	};

	const clearForm = () => {
		setNameInput('');
		setPhoneInput('');
		setPhoneExtInput('');
		setBridgeInput('');
		setBridgeExtInput('');
		setBridgePinInput('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setPhoneNumber(phoneInput));
		dispatch(setPhoneExt(phoneExtInput));
		dispatch(setBridgeNumber(bridgeInput));
		dispatch(setBridgeExt(bridgeExtInput));
		dispatch(setBridgePin(bridgePinInput));
		dispatch(setShowForm());
		clearForm();
	};

	return (
		<div id='home'>
			<button className='reveal-btn' onClick={handleReveal} />
			<button className='clear-btn' onClick={handleClear} />
			{firstName && (
				<Typography variant='h5' sx={{ mb: 2, textAlign: 'center' }}>
					Hello {firstName}, Welcome back! 👋
				</Typography>
			)}
			{showForm ? (
				<form onSubmit={handleSubmit}>
					<TextInput
						// label='Phone Number'
						placeholder='Enter First Name'
						value={nameInput}
						onChange={(e) => handleChange('name', e.target.value)}
					/>
					<TextInput
						// label='Phone Number'
						placeholder='Enter Phone Number'
						value={phoneInput}
						onChange={(e) => handleChange('phone', e.target.value)}
					/>
					<TextInput
						// label='Phone Ext'
						placeholder='Enter Ext'
						value={phoneExtInput}
						onChange={(e) => handleChange('phoneExt', e.target.value)}
					/>
					<TextInput
						// label='Conference Bridge'
						placeholder='Enter Bridge Number'
						value={bridgeInput}
						onChange={(e) => handleChange('bridge', e.target.value)}
					/>
					<TextInput
						// label='Conference Bridge Ext'
						placeholder='Enter Bridge Ext'
						value={bridgeExtInput}
						onChange={(e) => handleChange('bridgeExt', e.target.value)}
					/>
					<TextInput
						// label='Conference Bridge Pin'
						placeholder='Enter Bridge Pin'
						value={bridgePinInput}
						onChange={(e) => handleChange('bridgePin', e.target.value)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			) : (
				<div className='my-info'>
					<h2>My Information</h2>
					<h3>
						Desk: {phoneFormatter(phoneNumber)} Ext: {phoneExt}
					</h3>
					<h3>
						Bridge: {phoneFormatter(bridgeNumber)} Ext: {bridgeExt} Pin:{' '}
						{bridgePin}
					</h3>
				</div>
			)}
			{show && (
				<div className='hidden-data'>
					<h3>Windows:</h3>
					{windows && <h4>{atob(windows)}</h4>}
					<h3>BitWarden:</h3>
					{warden && <h4>{atob(warden)}</h4>}
					<h3>App Pin:</h3>
					{appPin && <h4>{appPin}</h4>}
				</div>
			)}
		</div>
	);
};

export default Home;
