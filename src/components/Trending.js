import React from 'react';
import PropTypes from 'prop-types';

const Trending = ({ trending }) => {
  return (
    <div className="row">
      Trending page {trending}
    </div>
  );
};

Trending.propTypes = {
  trending: PropTypes.object.isRequired,
};

export default Trending;
