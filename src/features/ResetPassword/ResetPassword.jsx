import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/material';
import {
	setPassword,
	resetWithToken,
	clearSuccess_User,
	clearErrors_User,
} from '../../redux/slices/userSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import './reset.scss';

const ResetPassword = () => {
	const { loading, password, success, errors } = useSelector(
		(state) => state.user
	);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const path = location.pathname.split('/')[2];

	const handleFocus = () => {
		dispatch(clearErrors_User());
	};

	const handleChange = (e) => {
		dispatch(setPassword(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			token: path,
			password,
		};

		dispatch(resetWithToken(data));
	};

	const handleSuccess = useCallback(() => {
		if (success) {
			setTimeout(() => {
				navigate('/');
			}, 5000);
			setTimeout(() => {
				dispatch(clearSuccess_User());
			}, 7000);
		}
	}, [success, dispatch, navigate]);

	useEffect(() => {
		handleSuccess();
	}, [handleSuccess]);

	return (
		<div id='reset'>
			<form onSubmit={handleSubmit}>
				<FormControl style={{ width: '55%' }}>
					<TextInput
						type='password'
						placeholder='Password'
						onChange={handleChange}
						onFocus={handleFocus}
						error={errors?.password}
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
				{errors?.token && (
					<p className='error-message'>
						<span>
							<ErrorOutlineIcon fontSize='small' />
						</span>
						{errors?.token}
					</p>
				)}
			</div>
		</div>
	);
};

export default ResetPassword;
