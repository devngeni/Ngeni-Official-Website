import { combineReducers } from "redux";
import TestReducer from "./TestReducers";

let reducers = combineReducers({
  Test: TestReducer,
});

export default reducers;