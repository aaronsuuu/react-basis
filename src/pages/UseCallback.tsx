import { memo, useCallback, useEffect, useState } from 'react'

function UseCallback() {
  const initValue = 0
  const [count, setCount] = useState(initValue)

  // INFO 利用 timer 來強制 Parent Component 重新 render
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // INFO 使用 useCallback 的話會因為count沒有變動來避免 Child Component 重新 render
  const add = useCallback(() => {
    console.log('count add 1')
    setCount(count + 1)
  }, [count])

  // INFO 沒有使用 useCallback 的函式會因為每次 render 都會重新生成，而導致 Child Component 重新 render
  //   const add = () => {
  //     console.log('count add 1')
  //     setCount(count + 1)
  //   }

  return (
    <div className="p-4 bg-error">
      <p className="text-secondary text-lg">I am Parent Component</p>
      <div className="text-secondary text-lg">Timer: {timer}</div>
      <div className="text-secondary text-lg">Count: {count}</div>
      <div className="p-4">
        <ChildComponent onClick={add} />
      </div>
    </div>
  )
}

type ChildProps = {
  onClick: () => void
}

const ChildComponent = memo(({ onClick }: ChildProps) => {
  console.log('ChildComponent is rendering...')
  return (
    <div className="p-4 bg-warning">
      <p className="text-secondary"> I am Child Component</p>
      <button className="px-2 py-1 bg-primary rounded-lg" onClick={onClick}>
        Add
      </button>
    </div>
  )
})

export default UseCallback
