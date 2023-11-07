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

  public async getStats() {
    try {
      const stats = await readFile("leagues/topscorers.json")
      return stats
    } catch (e) {
      console.error(e)
    }
  }
}
