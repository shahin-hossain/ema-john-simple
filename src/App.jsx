import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Shop from './component/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Shop></Shop>
    </>
  )
}

export default App
