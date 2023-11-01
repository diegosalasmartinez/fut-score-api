import { readFile } from "../utils/file.ts"

export class GetLeagueService {
  private readonly leagueId: number = 34

  public async main() {
    try {
      const league = await readFile("leagues/league.json")
      return league
    } catch (e) {
      console.log(e)
      //   return this.getLeague()
    }
  }

  //   private async getLeague() {
  //     const apiFootball = new ApiFootballService()
  //     const result = await apiFootball.main('leagues', { id: this.leagueId })
  //     await writeFile('src/database/leagues/league2.json', result)
  //     return result
  //   }
}
