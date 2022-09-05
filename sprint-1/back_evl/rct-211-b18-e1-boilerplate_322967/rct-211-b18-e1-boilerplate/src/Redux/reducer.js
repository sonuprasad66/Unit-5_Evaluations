import * as types from "./actionTypes";

const initialState = {
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, actions) => {
  switch (actions.type) {
    case types.GET_PROFILE_DETAILS_REQUEST:
      return {...oldState, isLoading: true};

    case types.GET_PROFILE_DETAILS_SUCCESS:
      return {...oldState, isLoading: false, profileData: actions.payload};

    case types.GET_PROFILE_DETAILS_FAILURE:
      return {...oldState, isError: true};
  }

  return oldState;
};

export {reducer};
