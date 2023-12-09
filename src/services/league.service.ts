import { readFile } from "../utils/file.ts"

export class GetLeagueService {
  public async main() {
    try {
      const league = await readFile("leagues/league.json")
      return league
    } catch (e) {
      console.error(e)
    }
  }

  public async getSeason() {
    try {
      const season = await readFile("leagues/season.json")
      return season
    } catch (e) {
      console.error(e)
    }
  }

  public async getTopScorers() {
    try {
      const stats = await readFile("leagues/topscorers.json")
      return stats
    } catch (e) {
      console.error(e)
    }
  }

  public async getTopAssists() {
    try {
      const stats = await readFile("leagues/topassists.json")
      return stats
    } catch (e) {
      console.error(e)
    }
  }

  public async getTopRedCards() {
    try {
      const stats = await readFile("leagues/topredcards.json")
      return stats
    } catch (e) {
      console.error(e)
    }
  }

  public async getTopYellowCards() {
    try {
      const stats = await readFile("leagues/topyellowcards.json")
      return stats
    } catch (e) {
      console.error(e)
    }
  }

  public async getMatches() {
    try {
      const matches = await readFile("leagues/matches.json")

      const matchesGrouped = matches.reduce((acc: any, match: any) => {
        const round = match.league.round
        if (!acc[round]) {
          acc[round] = []
        }
        acc[round].push(match)
        return acc
      }, {})

      return Object.values(matchesGrouped)
    } catch (e) {
      console.error(e)
    }
  }

  public async lastMatches() {
    try {
      const round = await readFile("leagues/round.json")
      const roundNumber = parseInt(round.roundNumber)
      const lastRound = `${round.round.split("-")[0].trim()} - ${
        roundNumber - 1
      }`

      const matches = await readFile("leagues/matches.json")
      return matches.filter((match: any) => match.league.round === lastRound)
    } catch (e) {
      console.error(e)
    }
  }

  public async nextMatches() {
    try {
      const round = await readFile("leagues/round.json")

      const matches = await readFile("leagues/matches.json")
      return matches.filter((match: any) => match.league.round === round.round)
    } catch (e) {
      console.error(e)
    }
  }
}
