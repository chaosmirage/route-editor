import { combineReducers } from 'redux';
import mapReducer from './mapReducer';
import pointsReducer from './pointsReducer';

export default combineReducers({
  map: mapReducer,
  points: pointsReducer,
});
