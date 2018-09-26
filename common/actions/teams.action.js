
const getTeamsByLeague = league => {

  return {

    type: 'GET_TEAMS_BY_LEAGUE',
    payload: league
  }
}

const getTeamsByLeagueAndSeason = (league, season) => {

  return {

    type: 'GET_TEAMS_BY_LEAGUE_AND_SEASON',
    payload: {league, season}
  }
}

export default {

  getTeamsByLeague,
  getTeamsByLeagueAndSeason
}