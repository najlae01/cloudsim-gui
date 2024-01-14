import * as types from '../actions/action-types'

const initialState = {
  data: {
    dataCenter: {
      hosts: [],
    },
    broker: {},
  },
  isFetching: false,
}

const dataFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_FETCH_BEGIN: {
      return { ...state, isFetching: true }
    }
    case types.DATA_FETCH_SUCCESS: {
      return { isFetching: false, data: { ...state.data, ...action.payload } }
    }
    case types.DATA_FETCH_ERROR: {
      return { ...state, isFetching: false }
    }
    default:
      return state
  }
}

export default dataFetchReducer
