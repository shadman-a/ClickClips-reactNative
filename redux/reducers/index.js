import { combineReducers } from "redux";
import user from './user';
import barbers from './barbers';
import postUser from './postuser'



const rootReducer = combineReducers({
  user,
  barbers
});

export default rootReducer;
