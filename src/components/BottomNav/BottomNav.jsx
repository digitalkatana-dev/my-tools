import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { isIOS, isSafari } from 'react-device-detect';
import './btmNav.scss';

const BottomNav = () => {
	const { theme, showHome, showGenerator } = useSelector((state) => state.app);
	const location = useLocation();
	const navigate = useNavigate();
	const currentLocation = location.pathname.split('/')[1];

	console.log('Location', currentLocation);

	const handleClick = (route) => {
		if (route) {
			navigate(`/${route}`);
		} else {
			navigate('/');
		}
	};

	return (
		<div id='bottom-nav' className={theme === 'dark' ? 'dark' : ''}>
			{showHome && (
				<IconButton
					className={currentLocation === '' ? 'nav-btn active' : 'nav-btn'}
					onClick={() => handleClick()}
				>
					<p className={isIOS || isSafari ? '' : 'noto-color-emoji-regular'}>
						🏠
					</p>
					<h6>Home</h6>
				</IconButton>
			)}
			{showGenerator && (
				<IconButton
					className={
						currentLocation === 'generator' ? 'nav-btn active' : 'nav-btn'
					}
					onClick={() => handleClick(showHome ? 'generator' : '')}
				>
					<p className={isIOS || isSafari ? '' : 'noto-color-emoji-regular'}>
						🔐
					</p>
					<h6>Generator</h6>
				</IconButton>
			)}
			<IconButton
				className={currentLocation === 'guides' ? 'nav-btn active' : 'nav-btn'}
				onClick={() => handleClick(showHome || showGenerator ? 'guides' : '')}
			>
				<p className={isIOS || isSafari ? '' : 'noto-color-emoji-regular'}>
					📖
				</p>
				<h6>QRG</h6>
			</IconButton>
			<IconButton
				className={
					currentLocation === 'settings' ? 'nav-btn active' : 'nav-btn'
				}
				onClick={() => handleClick('settings')}
			>
				<p className={isIOS || isSafari ? '' : 'noto-color-emoji-regular'}>
					⚙️
				</p>
				<h6>Settings</h6>
			</IconButton>
		</div>
	);
};

export default BottomNav;
