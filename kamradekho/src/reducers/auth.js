import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOADING,
  } from "../actions/type";
 
  const user = JSON.parse(localStorage.getItem("user"));
  const initialState = user
    ? { isLoggedIn: true, loading: false, user }
    : { isLoggedIn: false, loading: false,  user: null };
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case LOADING :
        return {
          ...state,
          loading: true
        }
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
          loading: false
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          loading: false
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          loading: false
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          loading: false
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }