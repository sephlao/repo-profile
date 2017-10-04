import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, onChange, placeholder, value, error, onSave }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <div className="field">
        <div className="input-group">
          <input className="form-control"
            id="search-area"
            value={value}
            name={name}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            autoFocus={!value}
            autoComplete="off" />
          <div className="input-group-addon cursor-pointer"
            onClick={onSave}>
            <i className="fa fa-search">&nbsp;</i>
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
