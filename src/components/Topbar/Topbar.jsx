import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { logout } from '../../redux/slices/userSlice';
import LogoutIcon from '@mui/icons-material/Logout';
import './topbar.scss';

const Topbar = () => {
	const { theme } = useSelector((state) => state.app);
	const { activeUser } = useSelector((state) => state.user);
	const location = useLocation();
	const dispatch = useDispatch();
	const currentLocation = location.pathname.split('/')[1];

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div id='topbar' className={theme === 'dark' ? theme : ''}>
			<h3>
				{currentLocation === ''
					? 'HOME'
					: currentLocation === 'guide'
					? 'QRG'
					: currentLocation.toUpperCase()}
			</h3>
			{activeUser && (
				<IconButton id='logout-btn' onClick={handleLogout}>
					<LogoutIcon htmlColor='crimson' />
				</IconButton>
			)}
		</div>
	);
};

export default Topbar;
