import React from 'react'
import DoctorsHeader from '../layouts/DoctorsHeader.js';
import '../../CSSFiles/DoctorsBody.css'
import SideProfile from '../layouts/SideProfile'
import DoctorsDashboard from '../layouts/DoctorsDashboard'
import { Routes, Route } from "react-router-dom"
import Profile from '../layouts/Profile'
import PatientsList from '../layouts/PatientsList'
import Inventory from '../layouts/Inventory'
import PatientsHistory from '../layouts/PatientsHistory'

const Admin = () => {
  return (
    <div>
      <DoctorsHeader/>
        <div className="doctorsBody">
          <SideProfile/>
          <div className="playgroundSection">
          <Routes> 
          <Route path="/" element={ <DoctorsDashboard/> } />
          <Route path="/profile" element={ <Profile/> } />
          <Route path="/patientsList" element={ <PatientsList/> } />
          <Route path="/inventory" element={ <Inventory/> } />
          <Route path="/patientsHistory" element={ <PatientsHistory/> } />
          </Routes>
          </div>
        </div>
    </div>
  )
}

export default Admin

// Inventory - update and peek
// Doctors
// Componders
//Add a doctor and compounder