import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
