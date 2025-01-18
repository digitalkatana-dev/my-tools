import React from 'react';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import Tooltip from '../../../../../../components/Tooltip';
import './circuit.scss';
import Level1 from '../../../../../../components/Level-1';
import Level2 from '../../../../../../components/Level-2';
import Level3 from '../../../../../../components/Level-3';
import Level4 from '../../../../../../components/Level-4';
import Level5 from '../../../../../../components/Level-5';

const CircuitOrder = ({ goBack }) => {
	const { firstName } = useSelector((state) => state.app);

	return (
		<div id='circuit'>
			<h3 className='back-link' onClick={goBack}>
				Back
			</h3>
			<div className='title'>
				<h2>How to Process a Circuit Order</h2>
			</div>
		</div>
	);
};

export default CircuitOrder;
