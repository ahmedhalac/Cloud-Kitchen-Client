import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import restRed from "./restaurant";

export default combineReducers({
  auth,
  message,
  restRed,
});
