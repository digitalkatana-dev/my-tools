import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { logout } from '../../redux/slices/userSlice';
import {
  setView,
  clearForm,
  toggleUpdate,
} from '../../redux/slices/circuitSlice';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import './topbar.scss';

const Topbar = () => {
  const { theme } = useSelector((state) => state.app);
  const { activeUser } = useSelector((state) => state.user);
  const { tabValue, view } = useSelector((state) => state.circuit);
  const location = useLocation();
  const dispatch = useDispatch();
  const currentLocation = location.pathname.split('/')[1];

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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div id='topbar' className={theme === 'dark' ? theme : ''}>
      <h3>
        {currentLocation === ''
          ? 'HOME'
          : currentLocation === 'guide'
            ? 'QRG'
            : currentLocation.toUpperCase()}
      </h3>
      {activeUser && (
        <div id='btn-container'>
          {currentLocation === 'circuits' && tabValue === 0 && (
            <>
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
            </>
          )}
          <Tooltip title='Logout'>
            <IconButton onClick={handleLogout}>
              <LogoutIcon htmlColor='crimson' />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default Topbar;
