import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setView } from '../../../../redux/slices/configSlice';

const ConfigHelper = () => {
  const { view } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const handleView = () => {
    const newView = view === 'form' ? 'review' : 'form';
    dispatch(setView(newView));
  };

  return (
    <div>
      <button onClick={handleView}>Click</button>
      {view === 'form' ? <h3>Form</h3> : view === 'review' && <h3>Review</h3>}
    </div>
  );
};

export default ConfigHelper;
