import * as gamesMiddleware from './middleware/games.middleware';
import * as refereesMiddleware from './middleware/referees.middleware';
import * as stadiumsMiddleware from './middleware/stadiums.middleware';
import * as teamsMiddleware from './middleware/teams.middleware';
import * as leaguesMiddleware from './middleware/leagues.middleware';
import * as playersMiddleware from './middleware/players.middleware';
import * as seasonsMiddleware from './middleware/seasons.middleware';

const appMiddleware = store => next => action => {
  // check if the `payload` property is a promise, and, if so, wait for it to resolve
  if (action.payload && typeof action.payload.then === 'function') {
    action.payload.then(
      res => { action.payload = res; next(action); },
      err => { action.error = err; next(action); });
  } else {
    // no-op if the `payload` property is not a promise
    next(action);
  }
}

export default appMiddleware;