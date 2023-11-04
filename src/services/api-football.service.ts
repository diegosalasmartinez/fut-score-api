import { getQueryParams } from "../utils/query.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";

export class ApiFootballService {
  private readonly baseURL: string
  private readonly apiKey: string
  private readonly apiHost: string

  constructor() {
    this.baseURL = Deno.env.get('API_FOOTBALL_BASE_URL') ?? ''
    this.apiKey = Deno.env.get('API_FOOTBALL_API_KEY') ?? ''
    this.apiHost = Deno.env.get('API_FOOTBALL_API_HOST') ?? ''
  }

  public async main(path: string, params?: object) {
    try {
      console.log('We are in ApiFootballService')
  
      const apiUrl = `${this.baseURL}/${path}`
      const queryParams = getQueryParams(params)
  
      const response = await fetch(`${apiUrl}?${queryParams}`, {
        headers: {
          'x-rapidapi-key': this.apiKey,
          'x-rapidapi-host': this.apiHost,
        },
      })

      if (!response.ok) throw new Error("Error in ApiFootballService")
  
      const data = await response.json()
      if (data) {
        return data.response
      } else {
        throw new Error("Error in ApiFootballService")
      }
    } catch(e) {
      console.error(e)
    }
  }
}
