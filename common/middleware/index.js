
import games from './games.middleware';
import referees from './referees.middleware';
import stadiums from './stadiums.middleware';
import teams from './teams.middleware';
import leagues from './leagues.middleware';
import players from './players.middleware';
import seasons from './seasons.middleware';


const appMiddleware = store => next => action => {

  switch (action.type) {

    case 'GET_LEAGUES':

      leagues.getLeagues(store, action, next);
      break;
    default:
    
      next(action);
      break;
  }

  console.log('inside app middleware, action > ', store)
  // return next(action);
}

export default appMiddleware