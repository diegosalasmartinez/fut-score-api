import { RouterContextType } from "../interfaces/context.interface.ts"
import { GetLeagueService } from "../services/league.service.ts"

export const GetLeagueController = async (ctx: RouterContextType) => {
  const service = new GetLeagueService()
  const response = await service.main()

  ctx.response.body = {
    data: response
  }
}
