import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

// Reducers
import gamesReducer from './reducers/games.reducer';
import refereesReducer from './reducers/referees.reducer';
import stadiumsReducer from './reducers/stadiums.reducer';
import teamsReducer from './reducers/teams.reducer';
import leaguesReducer from './reducers/leagues.reducer';
import playersReducer from './reducers/players.reducer';
import seasonsReducer from './reducers/seasons.reducer';

// Middleware
import appMiddleware from './middleware';

// Combine Reducers
var reducers = combineReducers({
  gamesReducer,
  refereesReducer,
  stadiumsReducer,
  teamsReducer,
  leaguesReducer,
  playersReducer,
  seasonsReducer
});

// Create STORE
/* eslint-disable no-underscore-dangle */
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, appMiddleware)
);
/* eslint-enable */

export default store;