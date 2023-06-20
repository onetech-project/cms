import { combineReducers } from 'redux';
import { generalReducer } from './general';
import { authReducer } from './auth';

const reducers = combineReducers({
  generalReducer,
  authReducer
});

const appReducer = (state, action) => reducers(state, action);

export default appReducer;
