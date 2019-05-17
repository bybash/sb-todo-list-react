import { combineReducers } from "redux";

import ListReducers from "./ListReducers";


const reducers = combineReducers({
  list: ListReducers,
});

export default reducers;
