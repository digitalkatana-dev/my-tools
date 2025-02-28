import React from 'react';
import { CircularProgress } from '@mui/material';
import './button.scss';

const Button = ({
	loading,
	fullWidth,
	btnClass,
	type,
	disabled,
	children,
	onClick,
}) => {
	const btnStyle = {
		width: fullWidth ? '100%' : 'unset',
	};

	return (
		<button
			className={btnClass ? `btn ${btnClass}` : 'btn'}
			style={btnStyle}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{loading ? <CircularProgress size={15} /> : <>{children.toUpperCase()}</>}
		</button>
	);
};

export default Button;
