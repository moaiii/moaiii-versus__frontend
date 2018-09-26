
import games from './games.middleware';
import referees from './referees.middleware';
import stadiums from './stadiums.middleware';
import teams from './teams.middleware';
import leagues from './leagues.middleware';
import players from './players.middleware';
import seasons from './seasons.middleware';


const appMiddleware = store => next => action => {
  next(action);
  console.log('inside app middleware, action > ', action)
  // if(action.type === 'GET_LEAGUES') {
    leaguesMiddleware.getLeagues(store, action, next);

  // } else {
  //   next(action);
  // }

}

export default appMiddleware