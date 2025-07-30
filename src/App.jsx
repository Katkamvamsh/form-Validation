import { useState } from 'react'

import './App.css'

import Registration from './components/FormValidation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registration/>
    </>
  )
}

export default App
