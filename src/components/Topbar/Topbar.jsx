import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './topbar.scss';

const Topbar = () => {
	const { theme } = useSelector((state) => state.app);
	const location = useLocation();
	const currentLocation = location.pathname.split('/')[1];

	return (
		<div id='topbar' className={theme === 'dark' ? theme : ''}>
			<h3>
				{currentLocation === ''
					? 'HOME'
					: currentLocation === 'guide'
					? 'QRG'
					: currentLocation.toUpperCase()}
			</h3>
		</div>
	);
};

export default Topbar;
