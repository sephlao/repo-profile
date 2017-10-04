import * as type from '../actions/actionTypes';
import initialState from './initialState';

export default function profileReducer(state = initialState.profile, action) {
  switch (action.type) {
    case type.LOAD_PROFILE_SUCCESS:
      return action.profile;
    default:
      return state;
  }
}
