import { RouterContext } from "https://deno.land/x/oak@v11.1.0/mod.ts"

type Params = Record<string | number, string | undefined>;
type Query = Record<string, undefined>;

type RouterContextType = RouterContext<"/", Params, Query>;

export type { RouterContextType, Params, Query };