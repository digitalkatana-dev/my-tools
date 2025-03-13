import { FormControl, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setFirstName,
	setPhoneNumber,
	setPhoneExt,
	setBridgeNumber,
	setBridgeExt,
	setBridgePin,
	updateProfile,
} from '../../redux/slices/userSlice';
import { phoneFormatter } from '../../util/helpers';
import './home.scss';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Home = () => {
	const {
		firstName,
		phoneNumber,
		phoneExt,
		bridgeNumber,
		bridgeExt,
		bridgePin,
		activeUser,
	} = useSelector((state) => state.user);
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const handleReveal = () => {
		setShow(!show);
	};

	const handleClear = () => {
		const data = {
			showForm: true,
		};
		dispatch(updateProfile(data));
	};

	const handleChange = (input, value) => {
		const actionMap = {
			name: setFirstName,
			phone: setPhoneNumber,
			phoneExt: setPhoneExt,
			bridge: setBridgeNumber,
			bridgeExt: setBridgeExt,
			bridgePin: setBridgePin,
		};

		const action = actionMap[input];

		action && dispatch(action(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			...(firstName && { firstName }),
			...(phoneNumber && { phoneNumber }),
			...(phoneExt && { phoneExt }),
			...(bridgeNumber && { bridgeNumber }),
			...(bridgeExt && { bridgeExt }),
			...(bridgePin && { bridgePin }),
			showForm: false,
		};
		dispatch(updateProfile(data));
	};

	return (
		<div id='home'>
			<button className='reveal-btn' onClick={handleReveal} />
			<button className='clear-btn' onClick={handleClear} />
			<Typography variant='h5' className='greeting'>
				Hello {activeUser?.firstName}, Welcome back! 👋
			</Typography>
			{activeUser?.showForm ? (
				<form onSubmit={handleSubmit}>
					<FormControl>
						<TextInput
							// label='Phone Number'
							placeholder='Enter First Name'
							value={firstName}
							onChange={(e) => handleChange('name', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<TextInput
							// label='Phone Number'
							placeholder='Enter Phone Number'
							value={phoneNumber}
							onChange={(e) => handleChange('phone', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<TextInput
							// label='Phone Ext'
							placeholder='Enter Ext'
							value={phoneExt}
							onChange={(e) => handleChange('phoneExt', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<TextInput
							// label='Conference Bridge'
							placeholder='Enter Bridge Number'
							value={bridgeNumber}
							onChange={(e) => handleChange('bridge', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<TextInput
							// label='Conference Bridge Ext'
							placeholder='Enter Bridge Ext'
							value={bridgeExt}
							onChange={(e) => handleChange('bridgeExt', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<TextInput
							// label='Conference Bridge Pin'
							placeholder='Enter Bridge Pin'
							value={bridgePin}
							onChange={(e) => handleChange('bridgePin', e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<Button type='submit'>Submit</Button>
					</FormControl>
				</form>
			) : (
				<div className='my-info'>
					<h2>My Information</h2>
					<h3>
						Desk: {phoneFormatter(activeUser?.phoneNumber)} Ext:{' '}
						{activeUser?.phoneExt}
					</h3>
					<h3>
						Bridge: {phoneFormatter(activeUser?.bridgeNumber)} Ext:{' '}
						{activeUser?.bridgeExt} Pin: {activeUser?.bridgePin}
					</h3>*
				</div>
			)}
			{show && (
				<div className='hidden-data'>
					<h3>Windows:</h3>
					{activeUser?.windows && <h4>{atob(activeUser?.windows)}</h4>}
					<h3>BitWarden:</h3>
					{activeUser?.warden && <h4>{atob(activeUser?.warden)}</h4>}
					<h3>App Pin:</h3>
					{activeUser?.appPin && <h4>{activeUser?.appPin}</h4>}
				</div>
			)}
		</div>
	);
};

export default Home;
