export function getAllSeasons() {
  return {
    type: 'GET_ALL_SEASONS',
    payload: league
  }
}

export function getAllSeasonsByLeague(league) {
  return {
    type: 'GET_ALL_SEASONS_BY_LEAGUE',
    payload: league
  }
}