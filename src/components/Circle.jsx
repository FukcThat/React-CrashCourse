import React, { useState } from 'react'

export default function Circle({start}) {
    let [count, setCount] = useState(start)

    function incrementCount () {
        setCount(++count)
    }

    function decrementCount () {
      setCount(--count)
    }
  return (
    <>
      <div className="counter">
      <button onClick={decrementCount}>Take</button>
        <div>{count}</div>
        <button onClick={incrementCount}>Add</button>
      </div>
    </>
  )
}
