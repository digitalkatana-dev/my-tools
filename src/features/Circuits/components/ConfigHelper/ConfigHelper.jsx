import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Tooltip } from '@mui/material';
import {
  setView,
  clearForm,
  toggleUpdate,
} from '../../../../redux/slices/configSlice';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EditIcon from '@mui/icons-material/Edit';
import ConfigForm from './components/ConfigForm';
import ConfigReview from './components/ConfigReview';
import './helper.scss';

const ConfigHelper = () => {
  const { view } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(toggleUpdate(true));
    dispatch(setView('form'));
  };

  const handleClear = () => {
    if (view === 'review') {
      dispatch(setView('form'));
    }
    dispatch(clearForm());
  };

  return (
    <div id='config-helper'>
      <header>
        {view === 'review' && (
          <Tooltip title='Edit'>
            <IconButton onClick={handleEdit}>
              <EditIcon htmlColor='steelblue' />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title={view === 'review' ? 'Restart' : 'Clear'}>
          <IconButton onClick={handleClear}>
            <RestartAltIcon htmlColor='red' />
          </IconButton>
        </Tooltip>
      </header>
      {view === 'form' ? <ConfigForm /> : view === 'review' && <ConfigReview />}
    </div>
  );
};

export default ConfigHelper;
