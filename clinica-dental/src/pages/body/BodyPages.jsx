import React from 'react';
import {  Routes, Route } from 'react-router-dom';
// import { CardPatient } from '../../common/CardPatient/CardPatient';


import { DoctorAppointments } from '../AppointmentDoctores/AppointmentDoctores';





import { HomePage } from '../home/HomePage'
import { Login } from '../login/LoginPage';
import { Profile } from '../Profile/Profile';
import { Patient } from '../ProfilePatient/ProfilePatient';

import { Register } from '../register/RegisterPage';
import {Admin} from '../../pages/admin/Admin'


export const BodyPages =() =>{
  return (
    <>
    
   <Routes>
   


      <Route  path ="/" element={<HomePage/>} />
      <Route  path ="/login" element={<Login/>} />
      <Route  path ="/register" element={<Register />} />
      <Route  path ="/profile" element={<Profile/>} />
      <Route  path ="/Patient" element={<Patient/>} />
      {/* <Route  path ="/Logout" element={<Logout/>} />   */}
      <Route  path ="/appointmentDoctor" element={<DoctorAppointments/>} />
      <Route  path ="/admin" element={<Admin/>} /> 
      {/* <Route path = "/users" element={<Users />}/>  */}
      <Route  path ="*" element={<HomePage/>}/> 
     
     
   </Routes>
   </>
  )
}

