import React from 'react'
import DoctorsHeader from '../layouts/DoctorsHeader.js';
import '../../CSSFiles/DoctorsBody.css'
import SideProfile from '../layouts/SideProfile'
import DoctorsDashboard from '../layouts/DoctorsDashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from '../layouts/Profile'
import PatientsList from '../layouts/PatientsList'
import Inventory from '../layouts/Inventory'
import PatientsHistory from '../layouts/PatientsHistory'
 const DoctorsPage = ()=> {
  return (
    <>
       <DoctorsHeader/>
        <SideProfile/>
        <div className="doctorsBody">
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
    </>
  )
}
export default DoctorsPage;

{/*
profile update
check patients details
track ambulance
track inventory~Request Stock
add new record
update availability
*/}
