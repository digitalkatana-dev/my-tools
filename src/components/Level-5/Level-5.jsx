import React from 'react';
import './level-5.scss';

const Level5 = ({ identifier, children }) => {
	return (
		<div className='level-5'>
			<span className='level-5-identifier'>{identifier}</span>
			<p className='level-5-txt'>{children}</p>
		</div>
	);
};

export default Level5;
