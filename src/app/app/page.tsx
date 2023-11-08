"use client"

import React, { useState } from 'react'





const AppPage =  () => {

  const [count, setCount] = useState(0)




  return (
    <>
      <h1>App</h1>

      <p>counter: {count}</p>

    <button onClick={()=> setCount(value => value + 1)}>inrease</button>
    </>
  )
}

export default AppPage