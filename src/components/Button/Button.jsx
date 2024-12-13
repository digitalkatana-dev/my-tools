import React from 'react';
import './button.scss';

const Button = ({ btnClass, type, disabled, children, onClick }) => {
	return (
		<button
			className={btnClass ? `btn ${btnClass}` : 'btn'}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children.toUpperCase()}
		</button>
	);
};

export default Button;
