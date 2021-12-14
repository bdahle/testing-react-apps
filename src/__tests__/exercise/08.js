// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

test('exposes the count and increment/decrement functions', () => {
  let result
  function TestComponent() {
    result = useCounter()
    return null
  }
  render(<TestComponent />)

  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})

test('allows customisation of the initial count', () => {
  const results = {}
  function TestComponent(props) {
    Object.assign(results, useCounter(props))
    return null
  }
  render(<TestComponent initialCount={1} />)
  expect(results.count).toBe(1)
})

test('allows customisation of the step', () => {
  const results = {}
  function TestComponent(props) {
    Object.assign(results, useCounter(props))
    return null
  }
  render(<TestComponent step={2} />)
  act(() => results.increment())
  expect(results.count).toBe(2)
})
/* eslint no-unused-vars:0 */
