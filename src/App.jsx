
import { useState } from 'react';
import './App.css'
import Circle from './components/Circle'
import SpecialCounter from './SpecialCounter';

function App() {
const starts = [7,34]
  return (
    <>
      Hello World!

      {starts.map(start => {
        return <h4 key={start}><Circle start={start} /></h4>
      })}

      <SpecialCounter start={0} changeByAmount={5}/>
      <SpecialCounter start={0} changeByAmount={100} textAppearanceLimit={500}/>
    </>
  )
}

export default App
