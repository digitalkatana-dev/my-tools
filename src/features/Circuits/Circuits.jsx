import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCircuitTabValue } from '../../redux/slices/circuitSlice';
import './circuits.scss';
import TabPanel from './components/TabPanel';
import ConfigList from './components/ConfigList';
import ConfigHelper from './components/ConfigHelper';
import Subnets from './components/Subnets';

const Circuits = () => {
  const { theme } = useSelector((state) => state.app);
  const { tabValue } = useSelector((state) => state.circuit);
  const dispatch = useDispatch();

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };

  const handleTabChange = (e, newValue) => {
    dispatch(setCircuitTabValue(newValue));
  };

  return (
    <div id='circuits'>
      <Box>
        <Tabs
          value={tabValue}
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
            label='Helper'
            {...a11yProps(1)}
            className={`label${theme === 'dark' ? ' dark' : ''}`}
          />
          <Tab
            label='Subnets'
            {...a11yProps(2)}
            className={`label${theme === 'dark' ? ' dark' : ''}`}
          />
        </Tabs>
      </Box>
      <div className='tab-data'>
        <TabPanel value={tabValue} index={0} children={<ConfigList />} />
        <TabPanel value={tabValue} index={1} children={<ConfigHelper />} />
        <TabPanel value={tabValue} index={2} children={<Subnets />} />
      </div>
    </div>
  );
};

export default Circuits;
