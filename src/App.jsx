import { createContext, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[time,seTime]=useState()
  function icreesTime(){
    seTime(time+1);
  }
    function decreesTime(){
    seTime(time-1);
  }
    function reset(){
    seTime(0);
  }
  return(
    <>
<button onClick={icreesTime}>start</button>
<button onClick={decreesTime}>pause</button>
<button onClick={reset}>reset</button>
<p>{time}</p>
</>
  )
}


export default App
