import { combineReducers } from "redux";
import user from './user';
import barbers from './barbers';

const rootReducer = combineReducers({
  user,
  barbers
});

export default rootReducer;
