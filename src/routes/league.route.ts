import { Router, helpers } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import {
  GetLeagueController,
  GetSeasonController,
  GetMatchesController,
  GetLastMatchesController,
  GetNextMatchesController,
  GetTopScorersController,
  GetTopAssistsController,
  GetTopRedCardsController,
  GetTopYellowCardsController
} from "../controllers/league.controller.ts"

const router = new Router()

router.get("/leagues", GetLeagueController)

router.get("/leagues/season", GetSeasonController)

router.get("/leagues/matches", GetMatchesController)

router.get("/leagues/matches/last", GetLastMatchesController)

router.get("/leagues/matches/next", GetNextMatchesController)

router.get("/leagues/stats/scorers", GetTopScorersController)

router.get("/leagues/stats/assists", GetTopAssistsController)

router.get("/leagues/stats/redcards", GetTopRedCardsController)

router.get("/leagues/stats/yellowcards", GetTopYellowCardsController)

router.get("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true })
  ctx.response.body = `Hello, ${userId} :). This is ${Deno.env.get(
    "API_SERVICE_NAME"
  )}!`
})

export default router
