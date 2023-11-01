import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

import routes from './src/routes/index.ts'

const app = new Application()
const port = parseInt(Deno.env.get('PORT') ?? '8000')

app.use(routes.leagues.routes())
app.use(routes.leagues.allowedMethods())

app.addEventListener('listen', () => {
  console.log(`Listening on: ${port}`);
});

await app.listen({ port })
