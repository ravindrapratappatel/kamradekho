import {LOCATION_REQUEST, LOCATION_REQUEST_FAIL, LOCATION_REQUEST_SUCCESS } from "../actions/type";
const initialState = {
  loading : true,
  locations : []
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOCATION_REQUEST :
    return {...state, loading: true}  
    case LOCATION_REQUEST_SUCCESS:
    return {...state, locations : payload, loading: false};
    case LOCATION_REQUEST_FAIL:
      return {...state, loading: false }
    default:
      return state;
  }
}