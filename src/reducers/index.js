import { combineReducers } from "redux";

import state from "./reducer";
import filter from "./filter";

export default combineReducers({
  state,
  filter
});
