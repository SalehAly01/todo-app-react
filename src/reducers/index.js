import { combineReducers } from "redux";
import todos from "./todos";

const rootReducers = {
  todos: todos
};
export default combineReducers(rootReducers);
