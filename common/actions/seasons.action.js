 
 const getAllSeasons = () => {

  return {
    
    type: 'GET_ALL_SEASONS',
    payload: league
  }
}

const getAllSeasonsByLeague = league => {

  return {

    type: 'GET_ALL_SEASONS_BY_LEAGUE',
    payload: league
  }
}

export default {

  getAllSeasons,
  getAllSeasonsByLeague
}