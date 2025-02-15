import React from 'react';
import { Checkbox, Stack } from '@mui/material';
import './checklistLevels.scss';

export const ChecklistLevel1 = ({
	identifier,
	checked,
	onChange,
	subtitle,
	children,
}) => {
	return (
		<div className='checklist-level-1'>
			{/* <Stack direction='row' alignItems='center'> */}
			<Checkbox checked={checked} onChange={onChange} />
			<span className={checked ? 'identifier done' : 'identifier'}>
				{identifier}
			</span>
			<p className={checked ? 'section-subtitle done' : 'section-subtitle'}>
				{subtitle}
			</p>
			<p className={checked ? 'level-1-txt done' : 'level-1-txt'}>{children}</p>
			{/* </Stack> */}
		</div>
	);
};
