import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	Chip,
	Divider,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
} from '@mui/material';
import { DIA, NNI, SDWAN, Wireless } from './components/Templates';
import TextInput from '../../../../components/TextInput';
import Button from '../../../../components/Button';
import './misc.scss';

const Misc = () => {
	const { theme } = useSelector((state) => state.app);
	const [counter, setCounter] = useState('');
	const [ipType, setIPType] = useState('dia');
	const [numbersToFormat, setNumbersToFormat] = useState('');
	const [formattedNumbers, setFormattedNumbers] = useState('');
	let selectedTemplate;

	const handleFormat = () => {
		// const processed = numbersToFormat
		// 	.split(',')
		// 	.map((num) => num.trim())
		// 	.map((num) => num.replace(/\D/g, ''))
		// 	.filter((num) => /^\d{10}$/.test(num))
		// 	.map((num) => '1' + num);
		const processed = (input) => {
			const phoneRegex = /\b(?:\((\d{3})\)|(\d{3}))[-\s]?(\d{3})-(\d{4})\b/g;
			let matches = [...input.matchAll(phoneRegex)];
			let cleanedNumbers = matches.map((match) => {
				let areaCode = match[1] || match[2];
				let number = areaCode + match[3] + match[4];
				return '1' + number;
			});

			return cleanedNumbers.join(',');
		};
		// setFormattedNumbers(processed.join(', '));
		setFormattedNumbers(processed(numbersToFormat));
	};

	switch (ipType) {
		case 'dia':
			selectedTemplate = <DIA />;
			break;

		case 'nni':
			selectedTemplate = <NNI />;
			break;

		case 'sdwan':
			selectedTemplate = <SDWAN />;
			break;

		case 'wireless':
			selectedTemplate = <Wireless />;
			break;

		default:
			break;
	}

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
				<Chip label='IP Template' size='small' className='divider-chip' />
			</Divider>
			<div>
				<FormControl>
					<FormLabel className='radio-label'>IP Type</FormLabel>
					<RadioGroup
						row
						value={ipType}
						onChange={(e) => setIPType(e.target.value)}
					>
						<FormControlLabel value='dia' control={<Radio />} label='DIA' />
						<FormControlLabel value='nni' control={<Radio />} label='NNI' />
						<FormControlLabel value='sdwan' control={<Radio />} label='SDWAN' />
						<FormControlLabel
							value='wireless'
							control={<Radio />}
							label='Wireless'
						/>
					</RadioGroup>
				</FormControl>
			</div>
			{selectedTemplate}
			<div className='example'>
				<img src='ip-example.png' alt='' />
			</div>
			<Divider>
				<Chip
					label='Cancellation Number Converter'
					size='small'
					className='divider-chip'
				/>
			</Divider>
			<div id='num-formatter'>
				<FormControl style={{ alignSelf: 'center', width: '55%' }}>
					<TextInput
						multiline
						rows={5}
						onChange={(e) => setNumbersToFormat(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<Button onClick={handleFormat}>Format</Button>
				</FormControl>
			</div>
			<p>{formattedNumbers}</p>
		</div>
	);
};

export default Misc;
