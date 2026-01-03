import React from 'react'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <AppRoutes/>
    </div>
  )
}

export default App