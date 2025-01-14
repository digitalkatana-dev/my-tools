import React from 'react';
import './level-1.scss';

const Level1 = ({ identifier, subtitle, children }) => {
	return (
		<div className='level-1'>
			<span className='level-1-identifier'>{identifier}</span>
			<p className='section-subtitle'>{subtitle}</p>
			<p className='level-1-txt'>{children}</p>
		</div>
	);
};

export default Level1;
