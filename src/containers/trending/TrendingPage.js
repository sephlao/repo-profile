import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchForm from '../../components/SearchForm';
import Trending from '../../components/Trending';
import * as searchActions from '../../actions/searchActions';
export class TrendingPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      query: Object.assign({}, props.query),
      placeholder: 'Technology',
      errors: {},
      saving: false,
    };

    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.renderTrending = this.renderTrending.bind(this);
  }

  updateSearchQuery(event) {
    const field = event.target.name;
    let query = Object.assign({}, this.state.query);
    query[field] = event.target.value;
    return this.setState({ query });
  }

  doSearch(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.loadTrending(this.state.query)
      .then(() => { this.setState({ saving: false }); })
      .catch(error => {
        alert(error);
        this.setState({ saving: false });
      });
  }

  renderTrending() {
    const { trending } = this.props;
    return <Trending trending={trending}/>;
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <SearchForm
            onSave={this.doSearch}
            onChange={this.updateSearchQuery}
            query={this.state.query}
            placeholder={this.state.placeholder}
            errors={this.state.errors}
            saving={this.state.saving} />
        </div>
        {!this.props.loading && this.renderTrending()}
      </div>
    );
  }
}

TrendingPage.propTypes = {
  query: PropTypes.object,
  trending: PropTypes.object,
  placeholder: PropTypes.string,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  let query = state.query ? state.query : { keyword: '', repo: '' };
  let trending = state.search ? state.search : {};
  return {
    query: { keyword: query.keyword, repo: query.repo },
    trending,
    loading: state.ajaxCallsInProgress > 0
  };
}


function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(searchActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage);
