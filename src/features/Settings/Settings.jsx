import { Chip, Divider, Paper, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/slices/userSlice';
import Switch from '../../components/Switch';
import './settings.scss';

const Settings = () => {
	const { theme, showHome, showGenerator } = useSelector((state) => state.app);
	const { activeUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleThemeSwitch = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		const data = {
			theme: newTheme,
		};
		dispatch(updateProfile(data));
	};

	const handleDisplay = (input) => {
		if (input === 'home') {
			const data = {
				showHome: !showHome,
			};
			dispatch(updateProfile(data));
		} else if (input === 'generator') {
			const data = {
				showGenerator: !showGenerator,
			};
			dispatch(updateProfile(data));
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
						Hi,{activeUser?.firstName ? ` ${activeUser?.firstName}!  ` : ' '}
						Welcome Back! 👋
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
