import * as type from './actionTypes';
import githubApi from '../api/githubApi'; // github/bitbucket api
import { ajaxCallBegin, ajaxCallFail } from './ajaxStatusActions';

export function loadProfileSuccess(profile) {
  return { type: type.LOAD_PROFILE_SUCCESS, profile};
}

export function loadProfile(params) {
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return githubApi.getProfile(params.keyword).then(profile => {
      dispatch(loadProfileSuccess(profile));
    }).catch(error => {
      dispatch(ajaxCallFail());
      throw(error);
    });
  };
}