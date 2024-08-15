import { useReducer } from 'react'

type CountState = {
  count: number
}

type CountAction = {
  type: 'increment' | 'decrement' | 'reset' | 'set'
  payload?: number
}

function countReducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    case 'set':
      if (!action.payload) throw new Error('payload is required')
      return { count: action.payload }
    default:
      throw new Error()
  }
}

function UseReducer() {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="text-xl text-secondary">Couter: {state.count}</div>
      <div className="flex flex-row gap-2">
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => dispatch({ type: 'increment' })}>
          Add
        </button>
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => dispatch({ type: 'decrement' })}>
          Subtract
        </button>
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => dispatch({ type: 'set', payload: 99 })}>
          Set to 99
        </button>
      </div>
      <div>
        <p className="text-xl text-secondary">Reducer State</p>
        <pre className="p-4 bg-primary">{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  )
}

export default UseReducer
