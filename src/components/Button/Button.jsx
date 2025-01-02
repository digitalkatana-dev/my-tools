import React from 'react';
import './button.scss';

const Button = ({ fullWidth, btnClass, type, disabled, children, onClick }) => {
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
			{children.toUpperCase()}
		</button>
	);
};

export default Button;
