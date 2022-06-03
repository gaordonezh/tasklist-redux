import taskReducer from "./taskReducer";
import modalReducer from "./modalReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  task: taskReducer,
  modal: modalReducer,
});

export default allReducers;
