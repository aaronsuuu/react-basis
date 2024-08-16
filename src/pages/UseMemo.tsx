import { useMemo, useState } from 'react'

function UseMemo() {
  const initTrangle = { base: 30, height: 15 }
  const [trangle, setTrangle] = useState(initTrangle)

  const area = useMemo(() => {
    return (trangle.base * trangle.height) / 2
  }, [trangle])

  return (
    <div className="flex flex-col gap-2 divide-y">
      <div className="p-2">
        <span className="text-xl text-secondary rounded-lg">useMemo</span>
        <p>用於自動響應的計算, 並且只有在依賴的值改變時才會重新計算</p>
      </div>
      <div className="p-2">
        <pre className="p-2 ">Trangle: {JSON.stringify(trangle, null, 2)}</pre>
        <p className="text-xl font-bold text-secondary">三角形面積: {area}</p>
        <div className="flex gap-2">
          <button
            className="rounded-lg bg-primary px-2 py-1"
            onClick={() => setTrangle((state) => ({ ...state, base: state.base + 5 }))}
          >
            Base + 5
          </button>
          <button
            className="rounded-lg bg-primary px-2 py-1"
            onClick={() => setTrangle((state) => ({ ...state, height: state.height + 5 }))}
          >
            Height + 5
          </button>
          <button className="rounded-lg bg-primary px-2 py-1" onClick={() => setTrangle(initTrangle)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseMemo
