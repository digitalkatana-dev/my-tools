import { Container } from '@mui/material';
import './main.scss';
import Topbar from '../../components/Topbar';
import BottomNav from '../../components/BottomNav';

const MainLayout = ({ children }) => {
	return (
		<Container id='layout' maxWidth='xs'>
			<Topbar />
			<div className='content'>{children}</div>
			<BottomNav />
		</Container>
	);
};

export default MainLayout;
