import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl } from '@mui/material';
import {
	setEmail,
	generatePasswordToken,
	clearSuccess_User,
	clearErrors_User,
} from '../../redux/slices/userSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import './forgot.scss';

const FrogotPassword = () => {
	const { loading, email, success, errors } = useSelector(
		(state) => state.user
	);
	const dispatch = useDispatch();

	const handleFocus = () => {
		dispatch(clearErrors_User());
	};

	const handleChange = (e) => {
		dispatch(setEmail(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			email,
		};
		dispatch(generatePasswordToken(data));
	};

	const handleSuccess = useCallback(() => {
		success &&
			setTimeout(() => {
				dispatch(clearSuccess_User());
			}, 7000);
	}, [success, dispatch]);

	useEffect(() => {
		handleSuccess();
	}, [handleSuccess]);

	return (
		<div id='forgot'>
			<form onSubmit={handleSubmit}>
				<FormControl style={{ width: '55%' }}>
					<TextInput
						placeholder='Email'
						value={email}
						onChange={handleChange}
						onFocus={handleFocus}
						error={errors?.email}
					/>
				</FormControl>
				<FormControl style={{ width: '55%' }}>
					<Button loading={loading} type='submit'>
						Submit
					</Button>
				</FormControl>
			</form>
			<div className='response-container'>
				{success && (
					<p className='success-message'>
						<span>
							<CheckCircleOutlineIcon fontSize='small' />
						</span>
						{success}
					</p>
				)}
				{errors?.users && (
					<p className='error-message'>
						<span>
							<ErrorOutlineIcon fontSize='small' />
						</span>
						{errors?.users}
					</p>
				)}
			</div>
		</div>
	);
};

export default FrogotPassword;
