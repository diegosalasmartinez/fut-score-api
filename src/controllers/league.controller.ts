// deno-lint-ignore-file
import { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { GetLeagueService } from "../services/league.service.ts"

export const GetLeagueController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.main()

  if (response) {
    ctx.response.body = {
      data: response
    }
  } else {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'League not found'
    }
  }
}
