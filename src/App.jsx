import { useState } from 'react'
import Bar_Nav from './components/barraNave'
import './App.css'
import DepartamentoTitulo from './components/departTitle'
import FondoDep from './components/fondoDep'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Bar_Nav />
      < DepartamentoTitulo />
      <FondoDep />
    </>
  )
}

export default App
