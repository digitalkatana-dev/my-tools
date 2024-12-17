import React from 'react';
import './voice-order.scss';

const VoiceOrder = ({ goBack }) => {
	return (
		<div id='voice-order'>
			<h3 className='back-link' onClick={goBack}>
				Back
			</h3>
		</div>
	);
};

export default VoiceOrder;
