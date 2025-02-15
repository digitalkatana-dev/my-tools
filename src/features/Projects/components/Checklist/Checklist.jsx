import React from 'react';
import { useSelector } from 'react-redux';
import CircuitChecklist from './components/CircuitChecklist';
import VoiceChecklist from './components/VoiceChecklist';
import './checklist.scss';

const Checklist = () => {
	const { selectedProject } = useSelector((state) => state.project);

	return (
		<div id='checklist'>
			<div className='client-container'>
				<h3>{selectedProject?.client}</h3>
			</div>
			<div className='checklist-container'>
				{selectedProject?.projectType === 'voice' && <VoiceChecklist />}
				{selectedProject?.projectType === 'circuit' && <CircuitChecklist />}
			</div>
		</div>
	);
};

export default Checklist;
