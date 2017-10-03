import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';

const SearchForm = ({ query, placeholder ,onSave, onChange, saving, errors }) => {
  const repos = [{text: 'GitHub', value: 'github'},{text: 'BitBucket', value: 'bitbucket'}];
  return (
    <form onSubmit={onSave} disabled={saving}>

      <SelectInput
        name="repo"
        label="Repository *"
        value={query.repo}
        defaultOption="Select Repository"
        options={repos}
        onChange={onChange}
        error={errors.repo} />

      <TextInput
        name="keyword"
        label="Keyword *"
        value={query.keyword}
        placeholder={placeholder}
        onChange={onChange}
        error={errors.keyword} />

      {/* <input
        type="submit"
        disabled={saving}
        value={saving ? 'Searching...' : 'Search'}
        className="btn btn-primary"
        onClick={onSave} /> */}
    </form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default SearchForm;