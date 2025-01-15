import React from 'react';
import './level-3.scss';

const Level3 = ({ identifier, children }) => {
	return (
		<div className='level-3'>
			<span className='level-3-identifier'>{identifier}</span>
			<p className='level-3-txt'>{children}</p>
		</div>
	);
};

export default Level3;
