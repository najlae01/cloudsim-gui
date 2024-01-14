import * as types from './action-types';

export function fetchData() {
  return {
    type: types.DATA_FETCH_BEGIN,
  };
}

export function fetchError() {
  return {
    type: types.DATA_FETCH_ERROR,
  };
}

export function receiveData(data) {
  return {
    type: types.DATA_FETCH_SUCCESS,
    payload: data
  };
}
