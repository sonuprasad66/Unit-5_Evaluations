// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "../AppReducer/actionType";
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.GET_WATCHES_DATA_REQUEST:
      return {...state, isLoading: true};

    case types.GET_WATCHES_DATA_SUCCESS:
      return {...state, isError: false, isLoading: false, watches: payload};

    case types.GET_WATCHES_DATA_FAILURE:
      return {...state, isError: true, isLoading: false, watches: []};

    default:
      return state;
  }
};

export {reducer};
