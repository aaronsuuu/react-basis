import { useState } from 'react'

export default function UseState() {
  const initState = 0
  const [counter, setCounter] = useState(initState)

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="text-xl font-bold text-secondary">Counter: {counter}</div>
      <div className="flex flex-row gap-2">
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => setCounter(counter + 1)}>
          Add
        </button>
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => setCounter(counter - 1)}>
          Subtract
        </button>
        <button className="rounded-lg bg-primary px-2 py-1" onClick={() => setCounter(initState)}>
          Reset
        </button>
      </div>
    </div>
  )
}
