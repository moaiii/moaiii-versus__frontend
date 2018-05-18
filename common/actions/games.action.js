export function getGamesByTeamsAndSeason(teams, season) {
  return {
    action: 'GET_GAMES_BY_TEAMS_LEAGUE_AND_SEASON',
    payload: {teams, season}
  }
}