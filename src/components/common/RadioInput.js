import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ name, onChange, defaultOption, value, error, options }) => {

  value = value ? value : defaultOption;
  return (
    <div className="form-group">
      <div className="field btn-group" data-toggle="buttons">
        {options.map(option => {
          return (<label className={`btn btn-primary cursor-pointer ${value === option.value ? "active-repo-radio" : ""}`}
            key={option.value} htmlFor={option.value}>
            <input type="radio"
              name={name}
              id={option.value}
              checked={value === option.value}
              onChange={onChange}
              value={option.value} /> {option.text}
          </label>);
        })}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default RadioInput;
