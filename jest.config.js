module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    //sempre que o jest encotnrar um arquivo scss ele vai tentar renderizar o seu códig. ao testa-lo
    //para impedir isso, usamos o cod. abaixo, com a extensao do identity-obj-proxy, o que faz com que o jest
    //use a lib acima toda a vez que encotnrar um arquivo desses, convertendo o cod scss em um test double/dummy a ser testado pelo jest previnindo que ele tente testar os códigos scss, impedindo que esses arquivos interfiram no nosso teste
    '\\scss$': 'identity-obj-proxy'
  }
}
