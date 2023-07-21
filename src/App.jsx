import React from 'react'
import Add from './components/Add'
import Divide from './components/Divide'
import Multiply from './components/Multiply'
import MyButton from './components/MyButton'

function App() {
  return (
    <div>
      <Add a={5} b={10} />
      <Divide a={5} b={10} />
      <Multiply a={5} b={10} />
      <MyButton a={5} b={10} />
    </div>
  )
}

export default App