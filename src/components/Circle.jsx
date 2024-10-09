import React, { useState } from 'react'

export default function Circle({start}) {
    let [count, setCount] = useState(start)

    function incrementCount () {
        setCount(++count)
    }
  return (
    <>
        <div>{count}</div>
        <button onClick={incrementCount}>Add</button>
    </>
  )
}
