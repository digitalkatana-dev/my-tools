import React from 'react';
import { useSelector } from 'react-redux';
import { FormControl } from '@mui/material';
import './select.scss';

const Select = ({
  style,
  fullWidth,
  label,
  value,
  onChange,
  onFocus,
  options,
  error,
}) => {
  const { theme } = useSelector((state) => state.app);

  const containerStyle = {
    marginTop: 0,
    marginBottom: 10,
    alignSelf: 'center',
    ...style,
  };

  return (
    <FormControl style={containerStyle} fullWidth={fullWidth} size='small'>
      <select
        id={label?.toLowerCase()}
        className={`select ${theme === 'dark' ? theme : ''}`}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      >
        <option className={`label ${theme === 'dark' ? theme : ''}`} value=''>
          {label}
        </option>
        {options?.map((option, idx) => (
          <option className='options' key={idx} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
      {error && <h6 className='error'>{error}</h6>}
    </FormControl>
  );
};

export default Select;
