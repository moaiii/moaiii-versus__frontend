let initialState = {
  referees: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ALL_REFEREES__PENDING': {
      return Object.assign({}, initialState, {
        fetching: true
      })
    }
    break;
    case 'GET_ALL_REFEREES__ERROR': {
      return Object.assign({}, initialState, {
        fetching: false,
        error: action.payload
      })
    }
    break;
    case 'GET_ALL_REFEREES__FUFILLED': {
      return Object.assign({}, initialState, {
        referees: action.payload,
        fetching: false,
        fetched: true,
      })
    }
    break;

    default: 
      return state;
  }
}