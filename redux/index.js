import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fetchItems } from "./actions/item";
import { checkForToken } from "./actions/user";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchItems());
store.dispatch(checkForToken());
export default store;
