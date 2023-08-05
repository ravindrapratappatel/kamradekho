import {LOCATION_REQUEST, LOCATION_REQUEST_FAIL, LOCATION_REQUEST_SUCCESS  } from "./type";
import DataService from "../services/data.service";

export const getlocation = () => async (dispatch) => {
    dispatch({
      type : LOCATION_REQUEST
    })
    await DataService.getlocations().then((res)=>{
      console.log(res)
      dispatch({
        type: LOCATION_REQUEST_SUCCESS,
        payload : res.data
      })
    }).catch((err)=>{
      dispatch({
        type: LOCATION_REQUEST_FAIL
      })
    })
   }