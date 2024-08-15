import CounterContext from '@/store/count-context'
import { useContext, useState } from 'react'

export function UseContext() {
  const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{ count, setter: setCount }}>
      <Layer1 />
    </CounterContext.Provider>
  )
}

function Layer1() {
  const { count } = useContext(CounterContext)
  return (
    <div className="p-4 bg-error">
      <p>This Layer1</p>
      <p>Counter: {count}</p>
      <Layer2 />
    </div>
  )
}
function Layer2() {
  const { count } = useContext(CounterContext)
  return (
    <div className="p-4 bg-warning">
      <p>This Layer2</p>
      <p>Counter: {count}</p>
      <Layer3 />
    </div>
  )
}
function Layer3() {
  const { count, setter } = useContext(CounterContext)
  return (
    <div className="p-4 bg-success">
      <p>This Layer3</p>
      <p>Counter: {count}</p>
      <button className="rounded-lg bg-primary px-2 py-1" onClick={() => setter(count + 1)}>
        Add
      </button>
    </div>
  )
}
