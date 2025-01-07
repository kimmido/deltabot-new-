import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import GlobalStyles from './assets/styles/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
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
