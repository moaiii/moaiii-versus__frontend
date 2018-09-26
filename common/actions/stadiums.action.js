
const getAllStadiums = () => {

  return {

    type: 'GET_ALL_STADIUMS',
    payload: {}
  }
}

const getStadiumsByLeague = league => {

  return {

    type: 'GET_STADIUMS_BY_LEAGUE',
    payload: league
  }
}

export default {

  getAllStadiums,
  getStadiumsByLeague
}