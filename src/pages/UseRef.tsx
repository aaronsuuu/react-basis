import { useEffect, useRef } from 'react'

function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <div>
      <label className="px-4 py-1 ">
        <span>Input:</span>
        <input className="m-1 border-primary border" type="text" ref={inputRef} />
      </label>
    </div>
  )
}

export default UseRef
