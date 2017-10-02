import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeIsSuccess(type) {
  return type.substring(type.length - 7).toUpperCase() == 'SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type === types.AJAX_CALL_BEGIN) {
    return state + 1;
  } else if (action.type === types.AJAX_CALL_FAIL ||
    actionTypeIsSuccess(action.type)) {
    return state - 1;
  }

  return state;
}