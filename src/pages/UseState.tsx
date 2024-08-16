import { useState } from 'react'

export default function UseState() {
  const initState = 0
  const [counter, setCounter] = useState(initState)

  return (
    <div className="flex flex-col gap-2 divide-y ">
      <div className="p-2 w-1/2">
        <p>
          <span className="text-secondary text-xl">useState</span>{' '}
          會建立一個陣列，第一個元素是目前的狀態值，第二個元素是一個函式，用來更新狀態值，並且在更新狀態值後會觸發重新渲染
        </p>
      </div>
      <div className="p-2 text-xl font-bold text-secondary">Counter: {counter}</div>
      <div className="p-2 flex flex-row gap-2">
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
