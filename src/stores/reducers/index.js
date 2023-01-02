import { combineReducers } from 'redux';
import { generalReducer } from './general';

const reducers = combineReducers({
  generalReducer
});

const appReducer = (state, action) => reducers(state, action);

export default appReducer;
