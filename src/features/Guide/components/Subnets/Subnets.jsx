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
} from '@mui/material';
import {
	slash_24,
	slash_25,
	slash_26,
	slash_27,
	slash_28,
	slash_29,
	slash_30,
} from '../../../../util/data';
import { DIA, NNI, SDWAN, Wireless } from '../Misc/components/Templates';
import MasterTable from './components/MasterTable';
import SubTable from './components/SubTable';
import './subnets.scss';

const Subnets = () => {
	const { theme, slash } = useSelector((state) => state.app);
	const [ipType, setIPType] = useState('dia');
	let selectedTemplate;

	let rowData;

	switch (slash) {
		case '/24':
			rowData = slash_24;
			break;

		case '/25':
			rowData = slash_25;
			break;

		case '/26':
			rowData = slash_26;
			break;

		case '/27':
			rowData = slash_27;
			break;

		case '/28':
			rowData = slash_28;
			break;

		case '/29':
			rowData = slash_29;
			break;

		case '/30':
			rowData = slash_30;
			break;

		default:
			rowData = null;
			break;
	}

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
		<div id='subnets' className={theme === 'dark' && 'dark'}>
			<div className='main-container'>
				<div className='master-wrapper'>
					<MasterTable />
				</div>
				<div className='sub-wrapper'>
					<SubTable rowData={rowData} />
				</div>
			</div>
			<Divider>
				<Chip label='IP Template' size='small' className='divider-chip' />
			</Divider>
			<div className='template-container'>
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
				{selectedTemplate}
				<div className='example'>
					<img src='ip-example.png' alt='' />
				</div>
			</div>
		</div>
	);
};

export default Subnets;
