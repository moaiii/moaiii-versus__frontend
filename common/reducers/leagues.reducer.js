let initialState = {
  leagues: null,
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {

  switch(action.type) {
    case 'GET_LEAGUES__PENDING': {
      return Object.assign({}, initialState, {
        fetching: true
      })
    }
    break;
    case 'GET_LEAGUES__ERROR': {
      return Object.assign({}, initialState, {
        fetching: false,
        fetched: false,
        error: action.payload
      })
    }
    break;
    case 'GET_LEAGUES__FUFILLED': {
      return Object.assign({}, initialState, {
        leagues: action.payload,
        fetching: false,
        fetched: true
      })
    }
    break;

    default: 
      return state;
  }
}