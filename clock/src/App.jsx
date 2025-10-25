import React, { useEffect, useState } from 'react'

const App = () => {
  const [clock,setClock]=useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    setInterval(()=>{
      setClock(new Date().toLocaleTimeString());
    },1000)
  },[])
  return (
    <div>

      <h1 className='heading'>Clock</h1>
      <h2 className='clock'>{clock}</h2>
    </div>
  )
}

export default App