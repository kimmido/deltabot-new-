import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPage />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
