import { ROOM_REQUEST, ROOM_REQUEST_FAIL, ROOM_REQUEST_SUCCESS, SET_CLICKED_ROOM} from "./type";
import UserService from "../services/room.service";

export const getrooms = () => async (dispatch) => {
  dispatch({
    type : ROOM_REQUEST
  })
  await UserService.getrooms().then((res)=>{
    console.log(res)
    dispatch({
      type: ROOM_REQUEST_SUCCESS,
      payload : res.data
    })
  }).catch((err)=>{
    dispatch({
      type: ROOM_REQUEST_FAIL
    })
  })
 }

 export const getroomsbylocation = (location) => async (dispatch) => {
  dispatch({
    type : ROOM_REQUEST
  })
  await UserService.getroomsbylocation(location).then((res)=>{
    console.log(res)
    dispatch({
      type: ROOM_REQUEST_SUCCESS,
      payload : res.data
    })
  }).catch((err)=>{
    dispatch({
      type: ROOM_REQUEST_FAIL
    })
  })
 }

export const setroom = (data) => ({
  type: SET_CLICKED_ROOM,
  payload: data,
});