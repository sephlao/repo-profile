import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ name, label, onChange, defaultOption, value, error, options }) => {

  value = value ? value : defaultOption;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {options.map(option => {
            return (<label className="radio-inline" key={option.value}>&nbsp;
                    <input type="radio"
                      name={name} value={option.value} onChange={onChange} 
                      checked={value === option.value}/>&nbsp;{option.text}
                    </label>);
          })}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default RadioInput;