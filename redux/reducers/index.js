import { combineReducers } from "redux";

// Reducers
import item from "./item";
import cart from "./cart";
import userReducer from "./user";
import errorReducer from "./errors";

export default combineReducers({
  item,
  cart,
  user: userReducer,
  errors: errorReducer,
});
