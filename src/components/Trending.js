import React from 'react';
import PropTypes from 'prop-types';

const Trending = ({ trending }) => {
  let list = trending.items.map((value, idx) => {
    return (
      <div href="javascript:;" className="list-group-item" key={idx}>
        <div className="row">
          <div className="col-sm-1">
            <img className="repo-img" src={value.owner.avatar_url} />
          </div>
          <div className="col-sm-9">
            <span className="repo-full-name">
              <a href={'https://github.com/' + value.owner.login} target="_blank" className="repo-owner">{value.owner.login} </a>
              /
              <a href={value.html_url} target="_blank" className="repo-name"> {value.name} <i className="fa fa-external-link"/></a>
            </span>
            <br />
            <span className="repo-desc">{value.description}</span>
          </div>
          <div className="col-sm-2 repo-counts">
            <p>{value.stargazers_count} <i className="fa fa-star" /></p>
            <p>{value.forks_count} <i className="fa fa-code-fork" /></p>
            <p>{value.open_issues} <i className="fa fa-exclamation-circle" /></p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="row trending">
      <div className="col-lg-12 col-sm-12 trending--list">
        {list}
      </div>
    </div>
  );
};

Trending.propTypes = {
  trending: PropTypes.object.isRequired,
};

export default Trending;
