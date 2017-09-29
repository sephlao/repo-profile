import * as type from './actionTypes';
import githubApi from '../api/githubApi'; // github/bitbucket api
import { ajaxCallBegin, ajaxCallFail } from './ajaxStatusActions';

export function loadProfileSuccess(profile) {
  return { type: type.LOAD_PROFILE_SUCCESS, profile};
}

export function loadProfile(params) {
  console.log(params);
  debugger;
  return function(dispatch){
    dispatch(ajaxCallBegin());
    return githubApi.getProfile(params.keyword).then(profile => {
      console.log(profile);
      dispatch(loadProfileSuccess(profile));
    }).catch(error => {
      dispatch(ajaxCallFail());
      throw(error);
    });
  };
}