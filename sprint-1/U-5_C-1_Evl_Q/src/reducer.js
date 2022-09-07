//import the action types here from the actionTypes.js to be used in the reducer function

//Complete the reducer function here
import {type} from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";
import {initialState} from "./initialState";

const reducer = (oldstate = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...oldstate,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      return {...oldstate, isAuth: true, token: payload};

    case types.LOGIN_FAILURE:
      return {...oldstate, isError: true, email: "", password: ""};

    case types.EMAIL:
      return {...oldstate, email: payload};

    case types.PASSWORD:
      return {...oldstate, password: payload};

    default:
      return oldstate;
  }
};

export {reducer};
