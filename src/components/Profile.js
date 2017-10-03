import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ profile }) => {

  return (
    <div className="row">
      <div className="col-lg-6 col-sm-12 card">
        <img src={profile.avatar_url} alt="avatar" style={{ width: '100%', paddingTop: '15px' }} />
        <div className="card-body">
          <h2 className="card-title">{profile.name}</h2>
          <p className="card-subtitle mb-2 text-muted">{profile.login}</p>
          <div style={{ margin: '24px 0' }}>          
          <p className="card-text">{profile.bio}</p>
          {profile.email && <i> {profile.email}</i>}
          {profile.location && <i> {profile.location}</i>}
            {/* <a href="#"><i className="fa fa-twitter">&nbsp;</i></a>
            <a href="#"><i className="fa fa-linkedin">&nbsp;</i></a>
            <a href="#"><i className="fa fa-facebook">&nbsp;</i></a> */}
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><a href={profile.html_url + '?tab=repositories'} target="_blank">{profile.public_repos} Public Repository</a></li>
          <li className="list-group-item"><a href={profile.html_url + '?tab=followers'} target="_blank">{profile.followers} Followers</a></li>
          <li className="list-group-item"><a href={profile.html_url + '?tab=following'} target="_blank">{profile.following} Following</a></li>
          <li className="list-group-item">Created {new Date(profile.created_at).toDateString()}</li>
        </ul>
        <div className="card-footer"><button href={profile.html_url}>Show page</button></div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profile;