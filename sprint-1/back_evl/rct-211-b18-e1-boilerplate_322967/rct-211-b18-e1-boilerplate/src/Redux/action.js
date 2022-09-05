// Write the action object creators in this file

// import {GET_PROFILE_DETAILS_REQUEST} from "./actionTypes"
// import {GET_PROFILE_DETAILS_SUCCESS} from "./actionTypes"
// import {GET_PROFILE_DETAILS_FAILURE} from "./actionTypes"

import * as types from "./actionTypes";

export const handleRequest = () => {
  return {type: types.GET_PROFILE_DETAILS_REQUEST};
};

export const handleSuccess = (payload) => {
  return {type: types.GET_PROFILE_DETAILS_SUCCESS,payload:payload};
};

export const handleFail = () => {
  return {type: types.GET_PROFILE_DETAILS_FAILURE};
};
