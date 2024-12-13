import { Chip, Divider, Paper, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/slices/appSlice';
import ThemeSwitch from '../../components/ThemeSwitch';
import './settings.scss';

const Settings = () => {
	const { theme } = useSelector((state) => state.app);
	const dispatch = useDispatch();

	const handleThemeSwitch = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		dispatch(setTheme(newTheme));
	};
	return (
		<div id='settings'>
			<Paper
				className={theme === 'dark' ? 'settings-paper dark' : 'settings-paper'}
				elevation={10}
			>
				<div className='greeting-container'>
					<h3 className='greeting'>Hi, Welcome back 👋</h3>
				</div>
				<Divider>
					<Chip label='Theme' size='small' className='divider-chip' />
				</Divider>
				<Stack direction='row' alignContent='center' alignSelf='center'>
					<Typography>Light</Typography>
					<ThemeSwitch
						checked={theme === 'light' ? false : true}
						onChange={handleThemeSwitch}
					/>
					<Typography>Dark</Typography>
				</Stack>
			</Paper>
		</div>
	);
};

export default Settings;
