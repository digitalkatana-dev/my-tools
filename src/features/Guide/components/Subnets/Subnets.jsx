import { useSelector } from 'react-redux';
import {
	slash_25,
	slash_26,
	slash_27,
	slash_28,
	slash_29,
	slash_30,
} from '../../../../util/data';
import MasterTable from './components/MasterTable';
import SubTable from './components/SubTable';
import './subnets.scss';

const Subnets = () => {
	const { slash } = useSelector((state) => state.app);

	let rowData;

	switch (slash) {
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

	return (
		<div id='subnets'>
			<div className='master-wrapper'>
				<MasterTable />
			</div>
			<div className='sub-wrapper'>
				<SubTable rowData={rowData} />
			</div>
		</div>
	);
};

export default Subnets;
