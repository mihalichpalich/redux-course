import {combineReducers} from 'redux';
import CarsReducers from './car.js';

const allReducers = combineReducers({
  cars: CarsReducers
});

export default allReducers;