//Write the ActionCreator functions here
import axios from "axios";
import * as types from "../AppReducer/actionType";

const getData = (params) => (dispatch) => {
  dispatch({type: types.GET_WATCHES_DATA_REQUEST});
  return axios
    .get(`http://localhost:8080/watches`, params)
    .then((res) => {
      dispatch({type: types.GET_WATCHES_DATA_SUCCESS, payload: res.data});
    })
    .catch((e) => {
      dispatch({type: types.GET_WATCHES_DATA_FAILURE, payload: e});
    });
};

export {getData};
