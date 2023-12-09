import { ApiFootballService } from "../services/api-football.service.ts"
import { writeFile } from "../utils/file.ts"

console.log("Start scapring job")

class ScrapeService {
  private leagueId = 34
  private season = 2026
  private apiFootball = new ApiFootballService()

  async main() {
    await this.getLeague()
    await this.getSeason()
    await this.getCurrentRound()
    await this.getAllMatches()
    await this.getStats()
  }

  async getLeague() {
    const leagues = await this.apiFootball.main("leagues", {
      id: this.leagueId
    })
    const league = leagues?.[0]
    if (!league) throw new Error(`League not found: ${this.leagueId}`)

    await writeFile("leagues", "league.json", league)
    console.log("League saved")

    const lastSeason = league.seasons[league.seasons.length - 1]
    this.season = lastSeason.year
  }

  async getSeason() {
    const seasons = await this.apiFootball.main("standings", {
      league: this.leagueId,
      season: this.season
    })
    const season = seasons?.[0]
    if (!season)
      throw new Error(`Season not found: ${this.leagueId} - ${this.season}`)

    await writeFile("leagues", "season.json", season)
    console.log("Season saved")
  }

  async getCurrentRound() {
    const rounds = await this.apiFootball.main("fixtures/rounds", {
      league: this.leagueId,
      season: this.season,
      current: true
    })
    const round = rounds?.[0]
    if (!round)
      throw new Error(`Round not found: ${this.leagueId} - ${this.season}`)

    const parts = round.split("-")
    if (parts.length !== 2) throw new Error(`Invalid round: ${round}`)

    const data = {
      round: round,
      roundNumber: parts[1].trim()
    }
    await writeFile("leagues", "round.json", data)
    console.log("Round saved")
  }

  async getAllMatches() {
    const matches = await this.apiFootball.main("fixtures", {
      league: this.leagueId,
      season: this.season
    })
    if (!matches)
      throw new Error(`Matches not found: ${this.leagueId} - ${this.season}`)

    await writeFile("leagues", "matches.json", matches)
    console.log("Matches saved")
  }

  async getStats() {
    const topScorers = await this.apiFootball.main("players/topscorers", {
      league: this.leagueId,
      season: this.season
    })
    await writeFile("leagues", "topscorers.json", { data: topScorers })
    console.log("Top scorers saved")

    const topAssists = await this.apiFootball.main("players/topassists", {
      league: this.leagueId,
      season: this.season
    })
    await writeFile("leagues", "topassists.json", { data: topAssists })
    console.log("Top assists saved")

    const topRedCards = await this.apiFootball.main("players/topredcards", {
      league: this.leagueId,
      season: this.season
    })
    await writeFile("leagues", "topredcards.json", { data: topRedCards })
    console.log("Top red cards saved")

    const topYellowCards = await this.apiFootball.main("players/topyellowcards", {
      league: this.leagueId,
      season: this.season
    })
    await writeFile("leagues", "topyellowcards.json", { data: topYellowCards })
    console.log("Top yellow cards saved")
  }
}

const service = new ScrapeService()
await service.main()

console.log("Finish scraping job")
