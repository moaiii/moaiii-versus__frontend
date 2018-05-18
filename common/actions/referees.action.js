export function getAllReferees(league, season) {
  return {
    type: 'GET_ALL_REFEREES',
    payload: {league, season}
  }
}