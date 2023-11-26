// deno-lint-ignore-file
import { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { GetLeagueService } from "../services/league.service.ts"

export const GetLeagueController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.main()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'League not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetLeagueSeasonController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getSeason()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Season not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetLeagueStatsController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getStats()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Stats not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetLeagueMatchesController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getMatches()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Matches not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetLeagueLastMatchesController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.lastMatches()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Matches not found'
    }
    return
  }

  ctx.response.body = response
}


export const GetLeagueNextMatchesController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.nextMatches()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Matches not found'
    }
    return
  }

  ctx.response.body = response
}
