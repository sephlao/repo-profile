import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function trendingReducer(state = initialState.trending, action) {
  switch (action.type) {
    case type.LOAD_TRENDING_SUCCESS:
      return action.trending;
    default:
      return state;
  }
}
