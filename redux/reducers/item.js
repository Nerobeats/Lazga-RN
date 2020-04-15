import { FETCH_ITEMS } from "../actions/actionTypes";

/**
 * Dave's Rule: "Your initial state should be the same data type as your eventual state"
 *
 * If `items` is going to be an array, the initial state of items should be an empty array
 */
const initialState = { items: null };

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
