import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { deleteConfig } from '../../redux/slices/circuitSlice';
import Button from '../Button';
import './dialog.scss';

const DeleteDialog = ({ open, onClose, data }) => {
  const { circuitSuccess } = useSelector((state) => state.circuit);
  const dispatch = useDispatch();

  const handleDeleteConfig = () => {
    const { client, ...others } = data;
    dispatch(deleteConfig(others));
  };

  const handleDeleteSuccess = useCallback(() => {
    if (circuitSuccess === 'Config deleted successfully!') onClose();
  }, [circuitSuccess, onClose]);

  useEffect(() => {
    handleDeleteSuccess();
  }, [handleDeleteSuccess]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth='xs'>
      <DialogTitle>Delete Config</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are about to permanetly delete the config for {data?.client}. This
          cannot be undone. Are you sure you want to continue?
        </DialogContentText>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleDeleteConfig}>Delete</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
