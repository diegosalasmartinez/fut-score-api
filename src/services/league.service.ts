import { readFile, writeFile } from "../utils/file.ts"
import { ApiFootballService } from "./api-football.service.ts";

export class GetLeagueService {
  private readonly leagueId: number = 34

  public async main() {
    try {
      const league = await readFile("leagues/league.json")
      return league
    } catch (_) {
      return this.getLeague()
    }
  }

  private async getLeague() {
    const apiFootball = new ApiFootballService()
    const result = await apiFootball.main('leagues', { id: this.leagueId })

    if (result && result.length > 0) {
      await writeFile('leagues/league.json', result[0])
  
      return result[0]
    }
  }
}
