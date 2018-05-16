let initialState = {
  counter: 5
};

export default (state = initialState, action) => {

  switch(action.type) {
    case 'INCREMENT_COUNTER': {
      return Object.assign({}, initialState, {
        counter: state.counter++
      })
    }

    default: 
      return state;
  }
}