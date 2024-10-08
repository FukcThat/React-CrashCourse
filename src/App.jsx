
import { useState } from 'react';
import './App.css'
import Circle from './components/Circle'

function App() {
const starts = [7,34,52,3,5]
  return (
    <>
      Hello World!
      {starts.map(start => {
        return <h4 key={start}><Circle start={start} /></h4>
      })}
    </>
  )
}

export default App
