import React from 'react';
import './level-2.scss';

const Level2 = ({ identifier, children }) => {
	return (
		<div className='level-2'>
			<span className='level-2-identifier'>{identifier}</span>
			<p className='level-2-txt'>{children}</p>
		</div>
	);
};

export default Level2;
