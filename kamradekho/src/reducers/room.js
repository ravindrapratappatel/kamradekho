import { ROOM_REQUEST, ROOM_REQUEST_FAIL, ROOM_REQUEST_SUCCESS, SET_CLICKED_ROOM} from "../actions/type";
const initialState = {
  loading : true,
  room : [],
  selectedRoom : {}
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ROOM_REQUEST :
    return {...state, loading: true}  
    case ROOM_REQUEST_SUCCESS:
    return {...state, room : payload, loading: false};
    case ROOM_REQUEST_FAIL:
      return {...state, loading: false }
    case SET_CLICKED_ROOM : 
    return {...state, selectedRoom: payload}  
    default:
      return state;
  }
}