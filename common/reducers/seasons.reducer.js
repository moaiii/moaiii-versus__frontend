let initialState = {
  seasons: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ALL_SEASONS__PENDING': {
      return Object.assign({}, initialState, {
        fetching: true
      })
    }
    break;
    case 'GET_ALL_SEASONS__ERROR': {
      return Object.assign({}, initialState, {
        fetching: false,
        fetched: false,
        error: action.payload
      })
    }
    break;
    case 'GET_ALL_SEASONS__FUFILLED': {
      return Object.assign({}, initialState, {
        seasons: action.payload,
        fetching: false,
        fetched: true
      })
    }
    break;
    case 'GET_ALL_SEASONS_BY_LEAGUE__PENDING': {
      return Object.assign({}, initialState, {
        fetching: true
      })
    }
    break;
    case 'GET_ALL_SEASONS_BY_LEAGUE__ERROR': {
      return Object.assign({}, initialState, {
        fetching: false,
        fetched: false,
        error: action.payload
      })
    }
    break;
    case 'GET_ALL_SEASONS_BY_LEAGUE__FUFILLED': {
      return Object.assign({}, initialState, {
        seasons: action.payload,
        fetching: false,
        fetched: true
      })
    }
    break;

    default: 
      return state;
  }
}