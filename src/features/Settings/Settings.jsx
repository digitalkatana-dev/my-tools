import { Chip, Divider, Paper, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	setTheme,
	setShowHome,
	setShowGenerator,
} from '../../redux/slices/appSlice';
import Switch from '../../components/Switch';
import './settings.scss';

const Settings = () => {
	const { theme, showHome, showGenerator, firstName } = useSelector(
		(state) => state.app
	);
	const dispatch = useDispatch();

	const handleThemeSwitch = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		dispatch(setTheme(newTheme));
	};

	const handleDisplay = (input) => {
		if (input === 'home') {
			dispatch(setShowHome());
		} else if (input === 'generator') {
			dispatch(setShowGenerator());
		}
	};

	return (
		<div id='settings'>
			<Paper
				className={theme === 'dark' ? 'settings-paper dark' : 'settings-paper'}
				elevation={10}
			>
				<div className='greeting-container'>
					<h3 className='greeting'>
						Hi,{firstName ? ` ${firstName}!  ` : ' '}Welcome Back! 👋
					</h3>
				</div>
				<Divider>
					<Chip label='Theme' size='small' className='divider-chip' />
				</Divider>
				<Stack direction='row' alignItems='center' alignSelf='center'>
					<Typography>Light</Typography>
					<Switch
						checked={theme === 'light' ? false : true}
						onChange={handleThemeSwitch}
					/>
					<Typography>Dark</Typography>
				</Stack>
				<Divider>
					<Chip label='Home' size='small' className='divider-chip' />
				</Divider>
				<Stack direction='row' alignItems='center' alignSelf='center'>
					<Typography>Hide</Typography>
					<Switch checked={showHome} onChange={() => handleDisplay('home')} />
					<Typography>Show</Typography>
				</Stack>
				<Divider>
					<Chip label='Generator' size='small' className='divider-chip' />
				</Divider>
				<Stack direction='row' alignItems='center' alignSelf='center'>
					<Typography>Hide</Typography>
					<Switch
						checked={showGenerator}
						onChange={() => handleDisplay('generator')}
					/>
					<Typography>Show</Typography>
				</Stack>
			</Paper>
		</div>
	);
};

export default Settings;
