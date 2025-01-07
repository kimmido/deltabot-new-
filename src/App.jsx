import { useState } from 'react'
import MainPage from './pages/MainPage/MainPage'
import GlobalStyles from './assets/styles/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  )
}

export default App
