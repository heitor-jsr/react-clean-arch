import React from "react"
import { render, RenderResult } from '@testing-library/react'
import Login from "./Login"

// o teste deve ser independente dos hooks do react. por isso, deve-se evitar ao max
// importa-los e usar eles dentro dos arquivos de teste. isso garante que seu teste
// passe, independente do que você estiver utilizando para renderizar os seus componentes.

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)
  return {
    sut
  }
}

describe('Login component', () => {
  test('Should start with inital state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')

  })
})