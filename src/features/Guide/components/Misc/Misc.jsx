import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chip, Divider, FormControl, Stack } from '@mui/material';
import TextInput from '../../../../components/TextInput';
import NumberFormatter from '../../../../components/NumberFormatter';
import './misc.scss';

const Misc = () => {
	const { theme } = useSelector((state) => state.app);
	const [counter, setCounter] = useState('');

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
			<NumberFormatter />
		</div>
	);
};

export default Misc;
