import { faker } from "@faker-js/faker";
import { HttpPostParams } from ".";

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {}
})