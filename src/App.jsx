import { Outlet } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </>
  )
}

export default App
