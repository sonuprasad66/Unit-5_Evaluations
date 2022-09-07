//create action creator functions here, using the action types from actionTypes.js;

import * as types from "./actionTypes";

export const handleEmail = (payload) => {
  return {type: types.EMAIL, payload};
};

export const handlePassword = (payload) => {
  return {type: types.PASSWORD, payload};
};

export const handleRequest = () => {
  return {type: types.LOGIN_REQUEST};
};

export const handleSuccess = (payload) => {
  return {type: types.LOGIN_SUCCESS, payload};
};

export const handleFail = () => {
  return {type: types.LOGIN_FAILURE};
};
