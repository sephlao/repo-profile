import React from 'react';
import PropTypes from 'prop-types';

const Trending = ({ trending }) => {
  let item = trending.items;
  let list = item.map((value, idx) => {
    return (
      // <li key={idx}>
      //   <img src={value.owner.avatar_url}/>
      //   <p>Name {value.name}</p>
      //   <p>Full Name {value.full_name}</p>
      //   <p>Description {value.description}</p>
      //   <p>Visit at <a href={value.html_url}>repo</a></p>
      //   <p>Stars {value.stargazers_count}</p>
      //   <p>Watchers {value.watchers_count}</p>
      //   <p>Issues {value.open_issues}</p>
      // </li>
      <a href="#" className="list-group-item" key={idx}>
        <img src={value.owner.avatar_url} />
      </a>
    );
  });
  return (
    <div className="row" className="trending">
      <div className="col-lg-12 col-sm-12" className="trending--list">
        {list}
      </div>
    </div>
  );
};

Trending.propTypes = {
  trending: PropTypes.object.isRequired,
};

export default Trending;
