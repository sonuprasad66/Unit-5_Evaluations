//Write the ActionCreator functions here
import axios from "axios";
import * as types from "../AuthReducer/actionTypes";

const login = (payload) => (dispatch) => {
  dispatch({type: types.LOGIN_REQUEST});
  return axios
    .post(`https://reqres.in/api/login`, payload)
    .then((res) => {
      return dispatch({type: types.LOGIN_SUCCESS, payload: res.data.token});
    })
    .catch((e) => {
      dispatch({type: types.LOGIN_FAILURE, payload: e});
    });
};

export {login};
