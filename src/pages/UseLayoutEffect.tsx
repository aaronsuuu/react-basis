import { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEffect() {
  const layout = useRef<HTMLDivElement>(null)

  const initWidth = 0
  const [width, setWidth] = useState(initWidth)

  useLayoutEffect(() => {
    if (layout.current) {
      setWidth(layout.current.getBoundingClientRect().width)
    }
  }, [])

  return (
    <div ref={layout} className="w-1/2 bg-error p-4">
      <p>這是 Parent Component</p>
      <p>這個 div 的寬度是: {layout.current?.getBoundingClientRect().width}</p>
      <div className="bg-warning p-4" style={{ width }}>
        <p>這個 div 的寬度是: {width}</p>
        <p>是用外層的 useRef 在 useLayoutEffect 在初期渲染就設定好的</p>
      </div>
    </div>
  )
}

export default UseLayoutEffect
