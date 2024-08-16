import { forwardRef, useImperativeHandle, useRef } from 'react'

function UseImperativeHandle() {
  const childRef = useRef<ChildRef>(null)

  const handleClick = () => {
    childRef.current && childRef.current.focus()
  }

  const handleClear = () => {
    childRef.current && childRef.current.clear()
  }

  return (
    <div>
      <button className="m-2 p-2 bg-primary text-white" onClick={handleClick}>
        Focus
      </button>
      <button className="m-2 p-2 bg-primary text-white" onClick={handleClear}>
        Clear
      </button>
      <ChildComponent ref={childRef} />
    </div>
  )
}
export default UseImperativeHandle

type ChildRef = {
  focus: () => void
  clear: () => void
}

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * 用 useImperativeHandle 可以決定當父層用 ref 綁定這個子層元件時,
   * 可以提供什麼方法給父層呼叫, 而不用暴露全部
   * 但是必須要配合 forwardRef 來使用
   *  */
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current && inputRef.current.focus()
      },
      clear: () => {
        inputRef.current && (inputRef.current.value = '')
      },
    }
  })

  return (
    <>
      <input className="bg-primary" type="text" ref={inputRef} />
    </>
  )
})
