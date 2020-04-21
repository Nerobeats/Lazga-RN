import { FETCH_ITEMS, FETCH_TYPES } from "../actions/actionTypes";

const initialState = { items: [], types: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      const list = action.payload;
      return {
        ...state,
        items: list,
      };
    case FETCH_TYPES:
      const types = action.payload;
      return {
        ...state,
        types: types,
      };
    default:
      return state;
  }
};
export default reducer;