import HttpClientSpy from "../../test/mock-http-client";
import RemoteAuthentication from "./remote-authentication";

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'url';
    const httpPostClient = new HttpClientSpy();

    // system under test - objeto que está sendo testado no momento.
    const sut = new RemoteAuthentication(url, httpPostClient);

    await sut.auth();

    expect(httpPostClient.url).toBe(url);
  })
})