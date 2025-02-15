import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { logout, setSelectedProject } from '../../redux/slices/projectSlice';
import Button from '../../components/Button';
import Auth from './components/Auth';
import List from './components/List';
import Checklist from './components/Checklist';
import './projects.scss';

const Projects = () => {
	const { user } = useSelector((state) => state.project);
	const [view, setView] = useState('list');
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		setView('list');
	};

	const handleView = (newView) => {
		setView(newView);
	};

	const handleBack = () => {
		dispatch(setSelectedProject(null));
		setView('list');
	};

	return (
		<div id='projects'>
			<div className='action-container'>
				{user && (
					<>
						{view === 'list' ? (
							<button className='logout' onClick={handleLogout} />
						) : (
							view === 'checklist' && (
								<Stack
									width='100%'
									direction='row'
									justifyContent='space-between'
									alignItems='center'
								>
									<button className='view-btn' onClick={handleBack} />
									<Button onClick={() => handleView('setup')}>Save</Button>
								</Stack>
							)
						)}
					</>
				)}
			</div>
			<div className='content-container'>
				{user ? (
					<>
						{view === 'list' ? (
							<List setView={setView} />
						) : (
							view === 'checklist' && <Checklist />
						)}
					</>
				) : (
					<Auth />
				)}
			</div>
		</div>
	);
};

export default Projects;
