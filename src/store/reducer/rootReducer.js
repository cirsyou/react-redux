// 组合reducer
import { combineReducers } from 'redux';
import addReducer from './addReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  addReducer: addReducer,
  homeReducer
})