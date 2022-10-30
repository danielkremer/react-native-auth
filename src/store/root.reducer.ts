import { combineReducers } from 'redux';
import authUser from './authUser/authUser.slice';
const rootReducer = combineReducers({
  authUser,
});

export default rootReducer;
