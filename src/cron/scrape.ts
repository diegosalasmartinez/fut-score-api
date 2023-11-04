import { ApiFootballService } from "../services/api-football.service.ts";
import { writeFile } from "../utils/file.ts";

console.log('I am the scrape cron job')

const LEAGUE_ID = 34

const getLeague = async () => {
    const apiFootball = new ApiFootballService()
    const result = await apiFootball.main('leagues', { id: LEAGUE_ID })

    if (result && result.length > 0) {
        await writeFile('leagues', 'league.json', result[0])
    }
}

await getLeague()

console.log('Job finished')
