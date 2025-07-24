import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chip, Divider, FormControl, Stack } from '@mui/material';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import './misc.scss';

const Misc = () => {
	const { theme } = useSelector((state) => state.app);
	const [counter, setCounter] = useState('');
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
			let matches = [...input.matchAll(phoneRegex)] || [];
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
		<div id='misc' className={theme === 'dark' ? 'dark' : ''}>
			<Divider>
				<Chip label='Character Counter' size='small' className='divider-chip' />
			</Divider>
			<Stack>
				<FormControl style={{ alignSelf: 'center', width: '55%' }}>
					<TextInput
						placeholder='Enter text to count'
						value={counter}
						onChange={(e) => setCounter(e.target.value)}
						onFocus={(e) => setCounter('')}
					/>
				</FormControl>
				<h5>{counter.length}</h5>
			</Stack>
			<Divider>
				<Chip
					label='Cancellation Number Formatter'
					size='small'
					className='divider-chip'
				/>
			</Divider>
			<div id='num-formatter'>
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

export default Misc;
