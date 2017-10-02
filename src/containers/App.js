/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../containers/home/HomePage';
import Loading from '../components/common/Loader';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div className="container-fluid">
        <nav >
          <NavLink exact to="/" activeStyle={activeStyle}>Profile</NavLink>
          {' | '}
          <NavLink to="/trending" activeStyle={activeStyle}>Trending</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={HomePage} />
        </Switch>
        {this.props.loading && <Loading />}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);