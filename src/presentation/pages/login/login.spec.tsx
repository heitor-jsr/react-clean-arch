import React from "react"
import { render } from '@testing-library/react'
import Login from "./Login"

describe('Login component', () => {
  test('Login', () => {
    render(<Login />)
  })
})