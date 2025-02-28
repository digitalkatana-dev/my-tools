import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { setView, setSelectedProject } from '../../redux/slices/projectSlice';
import Button from '../../components/Button';
import List from './components/List';
import Checklist from './components/Checklist';
import './projects.scss';

const Projects = () => {
	const { view } = useSelector((state) => state.project);
	const dispatch = useDispatch();

	const handleView = (newView) => {
		dispatch(setView(newView));
	};

	const handleBack = () => {
		dispatch(setSelectedProject(null));
		dispatch(setView('list'));
	};

	return (
		<div id='projects'>
			<div className='action-container'>
				{view === 'checklist' && (
					<Stack
						width='100%'
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<button className='view-btn' onClick={handleBack} />
						<Button onClick={() => handleView('setup')}>Save</Button>
					</Stack>
				)}
			</div>
			<div className='content-container'>
				{view === 'list' ? (
					<List setView={handleView} />
				) : (
					view === 'checklist' && <Checklist />
				)}
			</div>
		</div>
	);
};

export default Projects;
