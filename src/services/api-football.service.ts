export class ApiFootballService {
  private readonly baseURL: string
  private readonly apiKey: string
  private readonly apiHost: string

  constructor() {
    this.baseURL = Deno.env.get('API_FOOTBALL_BASE_URL') ?? ''
    this.apiKey = Deno.env.get('API_FOOTBALL_API_KEY') ?? ''
    this.apiHost = Deno.env.get('API_FOOTBALL_API_HOST') ?? ''
  }

  public async main() {
    console.log('We are in ApiFootballService')

    const response = await fetch("URL_DEL_OTRO_SERVIDOR")
    const data = await response.json()
  }
}
