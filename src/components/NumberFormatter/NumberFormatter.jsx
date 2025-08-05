import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chip, Divider, FormControl } from '@mui/material';
import TextInput from '../TextInput';
import Button from '../Button';
import './formatter.scss';

const NumberFormatter = () => {
	const { theme } = useSelector((state) => state.app);
	const [numbersToFormat, setNumbersToFormat] = useState('');
	const [formattedNumbers, setFormattedNumbers] = useState('');

	const handleFormat = () => {
		// const processed = numbersToFormat
		// 	.split(',')
		// 	.map((num) => num.trim())
		// 	.map((num) => num.replace(/\D/g, ''))
		// 	.filter((num) => /^\d{10}$/.test(num))
		// 	.map((num) => '1' + num);
		const processed = (input) => {
			const phoneRegex =
				/(?:\((\d{3})\)\s*\d{3}[-\s]?\d{4}|\d{3}-\d{3}-\d{4})/g;
			let matches = Set([...input.matchAll(phoneRegex)]) || [];
			let cleanedNumbers = matches.map((match) => {
				let digits = match[0].replace(/\D/g, '');
				return '1' + digits;
			});

			return cleanedNumbers.join(',');
		};
		// setFormattedNumbers(processed.join(', '));
		setFormattedNumbers(processed(numbersToFormat));
	};

	const handleClearNumbers = () => {
		setNumbersToFormat('');
		setFormattedNumbers('');
	};

	return (
		<div id='number-formatter' className={theme === 'dark' ? 'dark' : ''}>
			<Divider>
				<Chip label='Number Formatter' size='small' className='divider-chip' />
			</Divider>
			<div id='formatter-container'>
				<FormControl style={{ alignSelf: 'center', width: '55%' }}>
					<TextInput
						multiline
						rows={5}
						value={numbersToFormat}
						onChange={(e) => setNumbersToFormat(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<Button
						onClick={formattedNumbers ? handleClearNumbers : handleFormat}
					>
						{formattedNumbers ? 'Clear' : 'Format'}
					</Button>
				</FormControl>
			</div>
			<div className='formatted-numbers'>
				<p>{formattedNumbers}</p>
			</div>
		</div>
	);
};

export default NumberFormatter;
