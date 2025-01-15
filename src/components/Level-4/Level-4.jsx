import React from 'react';
import './level-4.scss';

const Level4 = ({ identifier, children }) => {
	return (
		<div className='level-4'>
			<span className='level-4-identifier'>{identifier}</span>
			<p className='level-4-txt'>{children}</p>
		</div>
	);
};

export default Level4;
