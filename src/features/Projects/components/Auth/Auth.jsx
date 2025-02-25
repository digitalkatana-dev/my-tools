import { FormControl } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	setEmail,
	setPassword,
	login,
} from '../../../../redux/slices/userSlice';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import './auth.scss';

const Auth = () => {
	const { email, password } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleChange = (input, value) => {
		const actionMap = {
			email: setEmail,
			pass: setPassword,
		};

		const action = actionMap[input];

		action && dispatch(action(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const authData = {
			email,
			password,
		};

		dispatch(login(authData));
	};

	return (
		<div id='auth'>
			<form onSubmit={handleSubmit}>
				<FormControl style={{ width: '55%' }}>
					<TextInput
						placeholder='Email'
						value={email}
						onChange={(e) => handleChange('email', e.target.value)}
					/>
				</FormControl>
				<FormControl style={{ width: '55%' }}>
					<TextInput
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => handleChange('pass', e.target.value)}
					/>
				</FormControl>
				<FormControl style={{ width: '55%' }}>
					<Button type='submit'>Submit</Button>
				</FormControl>
			</form>
		</div>
	);
};

export default Auth;
