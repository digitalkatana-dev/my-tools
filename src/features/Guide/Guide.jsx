import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './guide.scss';
import TabPanel from './components/TabPanel';
import SOPs from './components/SOPs';
import Plans from './components/Plans';
import Subnets from './components/Subnets';
import Misc from './components/Misc';

const Guide = () => {
	const { theme } = useSelector((state) => state.app);
	const [value, setValue] = useState(0);

	const a11yProps = (index) => {
		return {
			id: `tab-${index}`,
			'aria-controls': `tabpanel-${index}`,
		};
	};

	const handleTabChange = (e, newValue) => {
		setValue(newValue);
	};

	return (
		<div id='guides'>
			<Box>
				<Tabs
					value={value}
					onChange={handleTabChange}
					variant='fullWidth'
					textColor='secondary'
					indicatorColor='secondary'
				>
					<Tab
						label='SOPs'
						{...a11yProps(0)}
						className={theme === 'dark' ? 'label dark' : 'label'}
					/>
					<Tab
						label='Plans'
						{...a11yProps(1)}
						className={theme === 'dark' ? 'label dark' : 'label'}
					/>
					<Tab
						label='Subnets'
						{...a11yProps(2)}
						className={theme === 'dark' ? 'label dark' : 'label'}
					/>
					<Tab
						label='Misc'
						{...a11yProps(3)}
						className={theme === 'dark' ? 'label dark' : 'label'}
					/>
				</Tabs>
			</Box>
			<div className='tab-data'>
				<TabPanel value={value} index={0} children={<SOPs />} />
				<TabPanel value={value} index={1} children={<Plans />} />
				<TabPanel value={value} index={2} children={<Subnets />} />
				<TabPanel value={value} index={3} children={<Misc />} />
			</div>
		</div>
	);
};

export default Guide;
