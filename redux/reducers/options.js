import { SET_COLOR, SET_SIZE } from "../actions/actionTypes";

const initialState = { color: "#ffffff", size: 1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case SET_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
