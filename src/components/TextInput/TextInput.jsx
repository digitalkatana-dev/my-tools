import { useState } from 'react';
import './textInput.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const TextInput = ({
	fullWidth,
	style,
	containerClass,
	label,
	leftIcon,
	rightIcon,
	disabled,
	type,
	multiline,
	rows,
	placeholder,
	value,
	onChange,
	onFocus,
	error,
}) => {
	const [show, setShow] = useState(false);

	const inputStyle = {
		width: fullWidth ? '100%' : '',
		...style,
	};

	return (
		<div className='text-input' style={inputStyle}>
			{label && <label>{label}</label>}
			<div
				className={
					containerClass
						? `input-container ${containerClass}`
						: 'input-container'
				}
			>
				{leftIcon}
				{multiline ? (
					<textarea
						disabled={disabled}
						placeholder={placeholder}
						rows={rows}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
					/>
				) : (
					<input
						disabled={disabled}
						type={show ? 'text' : type}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
					/>
				)}
				{type === 'password' ? (
					<>
						{show ? (
							<VisibilityOffIcon
								className='hide'
								onClick={() => setShow(!show)}
							/>
						) : (
							<VisibilityIcon className='hide' onClick={() => setShow(!show)} />
						)}
					</>
				) : (
					rightIcon
				)}
			</div>
			{error && <h6 className='error'>{error}</h6>}
		</div>
	);
};

export default TextInput;
