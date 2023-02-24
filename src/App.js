import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'
import AuthState from './context/auth/AuthState'
import Doctor from './components/pages/Doctor'
import Admin from './components/pages/Admin'
import Patient from './components/pages/Patient'

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/doctor*' element={<Doctor />} />
          <Route exact path='/admin*' element={<Admin/>} />
          <Route exact path='/patient*' element={<Patient/>} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </AuthState>
  )
}

export default App
