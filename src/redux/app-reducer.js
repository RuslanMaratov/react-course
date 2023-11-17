import { getAuthUserData } from "./auth-reducer";

let INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => (dispatch) => {
  let propmise = dispatch(getAuthUserData());
  propmise.then(() => dispatch(initializedSuccess()));
};

export default appReducer;
