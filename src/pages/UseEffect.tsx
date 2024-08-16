import { useEffect, useState } from 'react'

function UseEffect() {
  const initState = 0
  const [counter, setCounter] = useState(initState)

  const [logs, setLogs] = useState<string[]>([])
  function addLog(log: string) {
    const _log = `${log}, ${new Date().toLocaleTimeString()}`
    setLogs((prevLogs) => [...prevLogs, _log])
  }

  /**
   * 這裡的 useEffect 在沒有任何監看或是監看 logs 時會造成無限執行的問題
   * 因為每次執行完後都會觸發 addLog, 進而改變 logs 的狀態
   * logs 的狀態改變後會觸發重新渲染, 進而觸發 useEffect
   * 觸發 useEffect 後又會觸發 addLog...
   * 然後就沒完沒了了
   */
  //   useEffect(() => {
  //     addLog('useEffect is running...')

  //     return () => {
  //       addLog('useEffect cleanup is running...')
  //     }
  //   })

  useEffect(() => {
    addLog('useEffect 只會在 counter 改變時執行')

    return () => {
      addLog('清除 counter 改變時執行的 useEffect')
    }
  }, [counter])

  return (
    <div className="flex flex-col gap-2 divide-y">
      <div className="w-1/2 p-4">
        <p>
          <span className="text-secondary text-xl">useEffect</span>
          傳入的函式會在渲染後執行，並且在下次渲染前執行清除函式，第二個參數是一個陣列，用途：
        </p>
        <ul className="ml-8 list-decimal">
          <li>如果沒有被傳入則每次渲染都會執行</li>
          <li>如果是空陣列則只會在初次渲染後執行</li>
          <li>如果有值則只有在值改變時才會執行</li>
        </ul>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-xl text-secondary">打開 Console, 你會看到 useEffect 執行後 print 的內容</h1>
        <div className="text-xl text-secondary">Couter: {counter}</div>
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
        <div className="w-8/12 max-h-[500px] overflow-auto border-surface border rounded-lg">
          <div className="p-4">
            {logs.map((log, index) => {
              return (
                <div className="text-lg text-surface" key={index}>
                  {index}: {log}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
