import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Home} from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello world.</h1>
      <h2>Tis is my first component.</h2>
      <Home user="Edwin" lastname="Rosero"/>
    </div>
  )
}

export default App
