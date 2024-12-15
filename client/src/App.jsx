import React, { useState } from 'react'
import Counter from './components/Counter'
import ChangeCounter from './components/ChangeCounter'


const App = () => {

  return (
    <div>
      <h1>| Redux |</h1>
      <Counter  />
      <ChangeCounter  />
    </div>
  )
}

export default App