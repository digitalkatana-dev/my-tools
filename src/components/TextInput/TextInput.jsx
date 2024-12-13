import { IconButton } from '@mui/material';
import { useState } from 'react';
import './textInput.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const TextInput = ({
	label,
	leftIcon,
	rightIcon,
	disabled,
	type,
	placeholder,
	value,
	onChange,
	onFocus,
}) => {
	const [show, setShow] = useState(false);

	return (
		<div className='text-input'>
			{label && <h6>{label}</h6>}
			<div className='input-container'>
				{leftIcon}
				<input
					disabled={disabled}
					type={show ? 'text' : type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onFocus={onFocus}
				/>
				{type === 'password' ? (
					<>
						<IconButton onClick={() => setShow(!show)}>
							{show ? (
								<VisibilityOffIcon className='hide' />
							) : (
								<VisibilityIcon className='hide' />
							)}
						</IconButton>
					</>
				) : (
					rightIcon
				)}
			</div>
		</div>
	);
};

export default TextInput;
