import React, { useState } from 'react'

export default function Circle({start}) {
    let [count, setCount] = useState(start)

    function incrementCound () {
        setCount(++count)
    }
  return (
    <>
        <div>{count}</div>
        <button onClick={incrementCound}>Add</button>
    </>
  )
}
