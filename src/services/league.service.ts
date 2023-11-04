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
}
