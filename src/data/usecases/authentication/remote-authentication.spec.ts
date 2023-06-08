import HttpClientSpy from "../../test/mock-http-client";
import RemoteAuthentication from "./remote-authentication";

type SutTypes = {
  sut: RemoteAuthentication,
  httpPostClientSpy: HttpClientSpy
}

const makeSut = (url: string = 'url'): SutTypes => {
  const httpPostClientSpy = new HttpClientSpy();

  // system under test - objeto que está sendo testado no momento.
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut, 
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'url2'

    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth();

    expect(httpPostClientSpy.url).toBe(url);
  })
})