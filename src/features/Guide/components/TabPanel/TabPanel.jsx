import React from 'react';
import './panel.scss';

const TabPanel = ({ value, index, children, ...other }) => {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`tabpanel-${index}`}
			className='panel'
			{...other}
		>
			{value === index && <>{children}</>}
		</div>
	);
};

export default TabPanel;
