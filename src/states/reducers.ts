import { combineReducers } from 'redux';
import shoppingCarReducer from './shoppingCar/reducer';

const allReducers = combineReducers({
  shoppingCar: shoppingCarReducer,
});

export default allReducers;
