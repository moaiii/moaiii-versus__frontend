import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// Reducers
import testReducer from './reducers/test.reducer';

// Combine Reducers
var reducers = combineReducers({
  testReducer,
});

// Create STORE
let store = createStore(
  reducers,
  applyMiddleware(logger)
);

export default store;