import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchForm from '../../components/SearchForm';
import * as searchActions from '../../actions/searchActions';
export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: Object.assign({}, props.query),
      placeholder: 'Username',
      errors: {},
      saving: false
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  updateSearchQuery(event) {
    const field = event.target.name;
    let query = Object.assign({}, this.state.query);
    query[field] = event.target.value;
    return this.setState({ query: query });
  }

  doSearch(event) {
    event.preventDefault();

    this.setState({ saving: true });
    debugger;
    this.props.actions.loadProfile(this.state.query)
      .then((profile) => {
        console.log(profile);
        this.setState({ saving: false });

      })
      .catch(error => {
        throw (error);
      });
  }

  render() {
    return (
      <SearchForm
        onSave={this.doSearch}
        onChange={this.updateSearchQuery}
        query={this.state.query}
        placeholder={this.state.placeholder}
        errors={this.state.errors}
        saving={this.state.saving} />
    );
  }
}

HomePage.propTypes = {
  query: PropTypes.object,
  placeholder: PropTypes.string,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  let query = state.query ? state.query : { keyword: '', repo: '' };
  return {
    query: { keyword: query.keyword, repo: query.repo }
  };
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(searchActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);