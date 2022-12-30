import { combineReducers } from "redux";
import top_feeds from "./top_feeds";
import post from "./post";

const reducers = combineReducers({
  top_feeds,
  post,
});

export default reducers;
