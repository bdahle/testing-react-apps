// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

const UseCounterComponent = () => {
  const {count, increment, decrement} = useCounter()

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div data-testid="counter">{count}</div>
    </>
  )
}

test('exposes the count and increment/decrement functions', () => {
  render(<UseCounterComponent></UseCounterComponent>)

  const increment = screen.getByText(/increment/i)
  const decrement = screen.getByText(/decrement/i)
  const count = screen.getByTestId(/counter/i)

  expect(count).toHaveTextContent(0)
  userEvent.click(increment)
  expect(count).toHaveTextContent(1)
  userEvent.click(decrement)
  userEvent.click(decrement)
  expect(count).toHaveTextContent(-1)
})

/* eslint no-unused-vars:0 */
