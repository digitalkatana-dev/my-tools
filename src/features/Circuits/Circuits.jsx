import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './circuits.scss';
import TabPanel from './components/TabPanel';
import ConfigHelper from './components/ConfigHelper';
import Subnets from './components/Subnets';

const Circuits = () => {
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
    <div id='circuits'>
      <Box>
        <Tabs
          value={value}
          onChange={handleTabChange}
          variant='fullWidth'
          textColor='secondary'
          indicatorColor='secondary'
        >
          <Tab
            label='Configs'
            {...a11yProps(0)}
            className={`label${theme === 'dark' ? ' dark' : ''}`}
          />
          <Tab
            label='Subnets'
            {...a11yProps(1)}
            className={`label${theme === 'dark' ? ' dark' : ''}`}
          />
        </Tabs>
      </Box>
      <div className='tab-data'>
        <TabPanel value={value} index={0} children={<ConfigHelper />} />
        <TabPanel value={value} index={1} children={<Subnets />} />
      </div>
    </div>
  );
};

export default Circuits;
