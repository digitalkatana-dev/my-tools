import React from 'react';
import { Checkbox } from '@mui/material';
import './levels.scss';

const Levels = ({
	level,
	checklist,
	identifier,
	checked,
	onChange,
	subtitle,
	component,
	children,
}) => {
	const textContent = (
		<p
			className={`${subtitle ? 'section-subtitle' : 'level-txt'} ${
				checked ? 'done' : ''
			}`}
		>
			<span className={`identifier ${checked ? 'done' : ''}`}>
				{identifier}
			</span>
			{children}
		</p>
	);
	return (
		<div className={`level-${level} ${checklist ? 'checklist' : ''}`}>
			{checklist && (
				<Checkbox
					className='checkbox'
					size='small'
					checked={checked}
					onChange={onChange}
				/>
			)}
			{component ? [children] : [textContent]}
		</div>
	);
};

export default Levels;
