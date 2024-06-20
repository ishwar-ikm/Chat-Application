import { useState } from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='p-4 h-screen flex justify-center items-center'>
      <Home />
    </section>
  )
}

export default App
