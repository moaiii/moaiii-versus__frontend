import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Redcuers
import reducers from './reducers'

// Middleware
import middleware from './middleware/index';

// Combine Reducers
var combinedReducers = combineReducers(reducers);

// Create STORE
/* eslint-disable no-underscore-dangle */

let store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, middleware)
);
/* eslint-enable */

export default store;