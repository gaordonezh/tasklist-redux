import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  task: taskReducer,
});

export default allReducers;
