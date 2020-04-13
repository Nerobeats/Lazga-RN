import { combineReducers } from "redux";

// Reducers
import item from "./item";
import cart from "./cart";

export default combineReducers({
    item,
    cart,
});
