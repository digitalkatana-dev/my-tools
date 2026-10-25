import React from 'react';
import { sopOptions } from '../../../../util/data';
import './sop.scss';

const SOPs = () => {
  return (
    <div id='sop'>
      <div className='sop-list'>
        {sopOptions.map((sop, index) => (
          <a
            key={index}
            href={sop.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {sop.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SOPs;
