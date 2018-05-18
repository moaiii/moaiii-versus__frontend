let initialState = {
  teams: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_TEAMS_BY_LEAGUE__PENDING': {
      return Object.assign({}, initialState, {
        fetching: true
      })
    }
    break;
    case 'GET_TEAMS_BY_LEAGUE__ERROR': {
      return Object.assign({}, initialState, {
        fetching: false,
        fetched: false,
        error: action.payload
      })
    }
    break;
    case 'GET_TEAMS_BY_LEAGUE__FUFILLED': {
      return Object.assign({}, initialState, {
        teams: action.payload,
        fetching: false,
        fetched: true
      })
    }
    break;
    case 'GET_TEAMS_BY_LEAGUE_AND_SEASON__PENDING': {
      return Object.assign({}, initialState, {
        fetching: true
      })
    }
    break;
    case 'GET_TEAMS_BY_LEAGUE_AND_SEASON__ERROR': {
      return Object.assign({}, initialState, {
        fetching: false,
        fetched: false,
        error: action.payload
      })
    }
    break;
    case 'GET_TEAMS_BY_LEAGUE_AND_SEASON__FUFILLED': {
      return Object.assign({}, initialState, {
        teams: action.payload,
        fetching: false,
        fetched: true
      })
    }
    break;

    default: 
      return state;
  }
}