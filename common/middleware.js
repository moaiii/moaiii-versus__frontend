import * as gamesMiddleware from './middleware/games.middleware';
import * as refereesMiddleware from './middleware/referees.middleware';
import * as stadiumsMiddleware from './middleware/stadiums.middleware';
import * as teamsMiddleware from './middleware/teams.middleware';
import * as leaguesMiddleware from './middleware/leagues.middleware';
import * as playersMiddleware from './middleware/players.middleware';
import * as seasonsMiddleware from './middleware/seasons.middleware';

const appMiddleware = store => next => action => {
  next(action);
  console.log('inside app middleware, action > ', action)
  // if(action.type === 'GET_LEAGUES') {
    leaguesMiddleware.getLeagues(store, action, next);

  // } else {
  //   next(action);
  // }

}

export default appMiddleware;