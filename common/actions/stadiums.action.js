export function getAllStadiums() {
  return {
    type: 'GET_ALL_STADIUMS',
    payload: {}
  }
}

export function getStadiumsByLeague(league) {
  return {
    type: 'GET_STADIUMS_BY_LEAGUE',
    payload: league
  }
}