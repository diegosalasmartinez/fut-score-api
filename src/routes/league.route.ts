import { Router, helpers } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { GetLeagueController } from "../controllers/league.controller.ts"

const router = new Router()

router.get("/leagues", GetLeagueController)

router.get("/users/:userId", (ctx) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = `Hello, ${userId} :). This is ${Deno.env.get('API_SERVICE_NAME')}!`
})

export default router
