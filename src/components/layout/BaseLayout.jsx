// App level imports
import { useEffect, useState } from 'react'
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'
// import Footer from './footer/Footer'

const Layout = ({ children }) => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <>
      <HeaderNavigationBar />
      <section className="p-navHeight bg-black">{children}</section>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
