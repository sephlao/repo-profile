import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.profile, action) {
  switch (action.type) {
    case type.LOAD_PROFILE_SUCCESS:
      return action.profile;
    case type.LOAD_TRENDING_SUCCESS:
      return action.trending;
    default:
      return state;
  }
}
