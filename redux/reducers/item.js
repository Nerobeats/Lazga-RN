import { FETCH_ITEMS } from "../actions/actionTypes";

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      const list = action.payload;
      return {
        ...state,
        items: list,
      };
    default:
      return state;
  }
};
export default reducer;
