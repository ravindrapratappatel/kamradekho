import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import room from "./room";
import data from "./data";
export default combineReducers({
  auth,
  message,
  room,
  data
});