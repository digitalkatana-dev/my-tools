import React from 'react';
import { useSelector } from 'react-redux';
import ConfigForm from './components/ConfigForm';
import ConfigReview from './components/ConfigReview';
import './helper.scss';

const ConfigHelper = () => {
  const { view } = useSelector((state) => state.circuit);

  return (
    <div id='config-helper'>
      {view === 'form' ? <ConfigForm /> : view === 'review' && <ConfigReview />}
    </div>
  );
};

export default ConfigHelper;
