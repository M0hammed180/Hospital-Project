import { createStore, combineReducers } from "redux";
import reducer from "../Reducers/reducer";
import login from "../Reducers/login";

const rootReducer = combineReducers({
  reducer,
  login
});

const store = createStore(rootReducer);

export default store;