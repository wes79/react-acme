import { combineReducers } from 'redux';
import EmployeesReducer from './reducer-employees';
import OpeningsReducer from './reducer-openings';

const rootReducer = combineReducers({
  employees: EmployeesReducer,
  openings: OpeningsReducer
});

export default rootReducer;
