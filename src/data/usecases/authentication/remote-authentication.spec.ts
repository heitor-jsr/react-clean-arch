import { HttpClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpClientSpy()

  // system under test - objeto que está sendo testado no momento.
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()

    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
