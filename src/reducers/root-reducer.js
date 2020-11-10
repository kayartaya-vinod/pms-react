import { combineReducers } from 'redux';
import personReducer from './persons-reducer';

// combine mulitple reducers (customerReducer, EmployeeReducer, CarsReducer, ..)
export default combineReducers({
    persons: personReducer
});