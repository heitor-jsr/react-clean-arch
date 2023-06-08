import HttpPostClient from "data/protocols/http/http-post-client";
import RemoteAuthentication from "./remote-authentication";

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HttpClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'url';
    const httpPostClient = new HttpClientSpy();

    // system under test - objeto que está sendo testado no momento.
    const sut = new RemoteAuthentication(url, httpPostClient);

    await sut.auth();

    expect(httpPostClient.url).toBe(url);
  })
})