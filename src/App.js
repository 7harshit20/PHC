import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'
import AuthState from './context/auth/AuthState'
import Doctor from './components/pages/Doctor'

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/doctor' element={<Doctor />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  )
}

export default App
