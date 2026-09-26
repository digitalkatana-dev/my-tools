import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import {
  setCircuitTabValue,
  setView,
  toggleUpdate,
  populateForm,
} from '../../../../redux/slices/circuitSlice';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteDialog from '../../../../components/DeleteDialog';
import './list.scss';

const ConfigList = () => {
  const { activeUser } = useSelector((state) => state.user);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const dispatch = useDispatch();

  const handleLoadConfig = (config) => {
    dispatch(toggleUpdate(true));
    dispatch(populateForm(config));
    dispatch(setView('form'));
    dispatch(setCircuitTabValue(1));
  };

  const handleDeleteClick = (config) => {
    const data = {
      configId: config._id,
      client: config.clientName,
      activeUser: activeUser?._id,
    };
    setDeleteData(data);
    setDialogOpen(!dialogOpen);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setDeleteData(null);
  };

  return (
    <div id='config-list'>
      {activeUser?.configs?.map((config, idx) => (
        <Stack key={idx} direction='row' alignItems='center' gap='7px'>
          <p className='config-link' onClick={() => handleLoadConfig(config)}>
            {`${config.clientName}-${config.city}-${config.circuitType.toUpperCase()}`}
          </p>
          <CancelIcon
            className='del-btn'
            onClick={() => handleDeleteClick(config)}
          />
        </Stack>
      ))}
      <DeleteDialog open={dialogOpen} onClose={handleClose} data={deleteData} />
    </div>
  );
};

export default ConfigList;
