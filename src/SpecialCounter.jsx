import React, { useEffect, useState } from 'react'

export default function SpecialCounter({start, changeByAmount, textAppearanceLimit = 100} ) {

    let [count, setCount] = useState(start)
    let [text, setText] = useState('')

    function incrementCount () {
        setCount(count + changeByAmount)
    }

    function decrementCount () {
        setCount(count - changeByAmount)
    }

    useEffect(() => {
        if (count > textAppearanceLimit) {
            setText("Congrats! You pushed a button a lot")
        } else {setText('')}
    }, [count])

  return (
    <>
      <div>Special Counter {text}</div>
      <div className="counter">
        <button onClick={decrementCount}>Take</button>
        <div>{count}</div>
        <button onClick={incrementCount}>Add</button>
      </div>
    </>
  )
}
