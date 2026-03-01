import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Aluminisearch from './pages/Aluminisearch'
import Contact from './pages/Contact'
import Connect from './pages/Connect'
import Gallary from './pages/Gallary'
import Brownbackground from './components/Brownbackground'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<Aluminisearch />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/gallery' element={<Gallary />} />
      </Routes>
      <Brownbackground  />
    </div>
  )
}

export default App
