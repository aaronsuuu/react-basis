import { createContext } from 'react'

type CountState = {
  count: number
  setter: (count: number) => void
}

const initialState: CountState = { count: 0, setter: () => {} }
const CounterContext = createContext(initialState)
export default CounterContext
