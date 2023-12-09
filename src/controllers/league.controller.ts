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

export const GetSeasonController = async (ctx: RouterContext<any>) => {
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

export const GetTopScorersController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getTopScorers()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Top scorers not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetTopAssistsController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getTopAssists()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Top assists not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetTopRedCardsController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getTopRedCards()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Top red cards not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetTopYellowCardsController = async (ctx: RouterContext<any>) => {
  const service = new GetLeagueService()
  const response = await service.getTopYellowCards()

  if (!response) {
    ctx.response.status = 404
    ctx.response.body = {
      message: 'Top yellow cards not found'
    }
    return
  }

  ctx.response.body = response
}

export const GetMatchesController = async (ctx: RouterContext<any>) => {
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

export const GetLastMatchesController = async (ctx: RouterContext<any>) => {
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


export const GetNextMatchesController = async (ctx: RouterContext<any>) => {
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
