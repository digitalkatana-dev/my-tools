import React from 'react';
import './levels.scss';

export const Level1 = ({ identifier, subtitle, children }) => {
	return (
		<div className='level-1'>
			<span className='identifier'>{identifier}</span>
			<p className='section-subtitle'>{subtitle}</p>
			<p className='level-1-txt'>{children}</p>
		</div>
	);
};

export const Level2 = ({ identifier, children }) => {
	return (
		<div className='level-2'>
			<span className='identifier'>{identifier}</span>
			<p className='level-2-txt'>{children}</p>
		</div>
	);
};

export const Level3 = ({ identifier, component, children }) => {
	return (
		<div className='level-3'>
			<span className='identifier'>{identifier}</span>
			{component ? <>{children}</> : <p className='level-3-txt'>{children}</p>}
		</div>
	);
};

export const Level4 = ({ identifier, children }) => {
	return (
		<div className='level-4'>
			<span className='identifier'>{identifier}</span>
			<p className='level-4-txt'>{children}</p>
		</div>
	);
};

export const Level5 = ({ identifier, children }) => {
	return (
		<div className='level-5'>
			<span className='identifier'>{identifier}</span>
			<p className='level-5-txt'>{children}</p>
		</div>
	);
};
