import React from "react"
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from "./Login"
import { Validation } from "@/presentation/protocols/validation"

// o teste deve ser independente dos hooks do react. por isso, deve-se evitar ao max
// importa-los e usar eles dentro dos arquivos de teste. isso garante que seu teste
// passe, independente do que você estiver utilizando para renderizar os seus componentes.

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  input: object
  validate(input: object): string {
    this.input = input
    return this.errorMessage
  }

}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Login component', () => {
  afterEach(cleanup)

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

  test('Should call validation with correct email value', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email@example.com' } })
    expect(validationSpy.input).toEqual({
      email: 'any_email@example.com'
    })
  })

  test('Should call validation with correct password value', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: '12345678' } })
    expect(validationSpy.input).toEqual({
      password: '12345678'
    })
  })


})