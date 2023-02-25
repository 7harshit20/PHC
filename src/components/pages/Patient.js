import React, { useContext, useEffect } from 'react'
import PatientsHeader from '../layouts/PatientsHeader.js';
import '../../CSSFiles/DoctorsBody.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import PatientsHistory from '../layouts/PatientsHistory'
import PatientsProfile from '../layouts/PatientsProfile'
import DoctorsSchedule from '../layouts/DoctorsSchedule'
import PatientsSP from '../layouts/PatientsSP.js';
import AuthContext from '../../context/auth/AuthContext.js';


const PatientPage = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenicated } = authContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenicated) {
      navigate('/');
    }
  }, [isAuthenicated, navigate])
  return (
    <>
      <PatientsHeader />
      <PatientsSP />
      <div className="doctorsBody">
        <div className="playgroundSection">
          <Routes>
            <Route path="/" element={<PatientsHistory />} />
            <Route path="/doctorsSchedule" element={<DoctorsSchedule />} />
            <Route path="/profile" element={<PatientsProfile />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default PatientPage;