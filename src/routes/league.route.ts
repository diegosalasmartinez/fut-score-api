import { Router, helpers } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import {
  GetLeagueController,
  GetLeagueSeasonController,
  GetLeagueStatsController,
  GetLeagueMatchesController,
  GetLeagueLastMatchesController,
  GetLeagueNextMatchesController
} from "../controllers/league.controller.ts"

const router = new Router()

router.get("/leagues", GetLeagueController)

router.get("/leagues/season", GetLeagueSeasonController)

router.get("/leagues/matches", GetLeagueMatchesController)

router.get("/leagues/matches/last", GetLeagueLastMatchesController)

router.get("/leagues/matches/next", GetLeagueNextMatchesController)

router.get("/leagues/stats", GetLeagueStatsController)

router.get("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true })
  ctx.response.body = `Hello, ${userId} :). This is ${Deno.env.get(
    "API_SERVICE_NAME"
  )}!`
})

export default router
