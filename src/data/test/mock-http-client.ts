import { HttpPostParams, HttpPostClient } from "../protocols/http/http-post-client"

export default class HttpClientSpy implements HttpPostClient {
  url?: string
  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}