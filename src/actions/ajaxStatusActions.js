import * as types from './actionTypes';

export function ajaxCallBegin() {
  return {type: types.AJAX_CALL_BEGIN};
}

export function ajaxCallFail() {
  return {type: types.AJAX_CALL_FAIL};
}