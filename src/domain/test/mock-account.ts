import { faker } from '@faker-js/faker'
import { AccountModel } from '../models/account-models'
import { AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid()
})