export function getPlayersByLeagueAndSeason(league, season) {
  return {
    type: 'GET_PLAYERS_BY_LEAGUE_AND_SEASON',
    payload: {league, season}
  }
}

export function getPlayersByTeamAndSeason(teamName, season) {
  return {
    type: 'GET_PLAYERS_BY_TEAM_AND_SEASON',
    payload: {teamName, season}
  }
}