import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/projectSlice';
import Auth from './components/Auth';
import './projects.scss';

const Projects = () => {
	const { user } = useSelector((state) => state.project);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div id='projects'>
			<button className='logout' onClick={handleLogout} />
			{!user && <Auth />}
		</div>
	);
};

export default Projects;
