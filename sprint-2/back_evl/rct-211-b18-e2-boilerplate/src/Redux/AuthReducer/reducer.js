// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "../AuthReducer/actionTypes";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {...state, isLoading: true};

    case types.LOGIN_SUCCESS:
      return {...state, isError: false, isLoading: true, isAuth: true};

    case types.LOGIN_FAILURE:
      return {...state, isError: true, isLoading: false, isAuth: false};

    default:
      return state;
  }
};

export {reducer};
