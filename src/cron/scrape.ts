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

  async getStats() {
    const topScorers = await this.apiFootball.main("players/topscorers", {
      league: this.leagueId,
      season: this.season
    })
    await writeFile("leagues", "topscorers.json", { data: topScorers })
    console.log("Top scorers saved")
  }
}

const service = new ScrapeService()
await service.main()

console.log("Finish scraping job")
