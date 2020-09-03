import * as types from '../actionTypes/barbers'

export function fetchBarbers() {
  return async dispatch => {
    dispatch({type: types.FETCH_BARBERS});
    try {
      let response = await fetch('http://localhost:3000/barbers');
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.FETCH_BARBERS_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.FETCH_BARBERS_FAILURE, error});
    }
  };
}