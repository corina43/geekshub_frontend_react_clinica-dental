import React from 'react';
import {  Routes, Route } from 'react-router-dom';
// import { CardPatient } from '../../common/CardPatient/CardPatient';


import { DoctorAppointments } from '../AppointmentDoctores/AppointmentDoctores';





import { HomePage } from '../home/HomePage'
import { Login } from '../login/LoginPage';
import { Patient } from '../ProfilePatient/ProfilePatient';


import {Admin} from '../../pages/admin/Admin'
import { CreatePatient } from '../appointments/AppointmentsPage';
import { Register } from '../register/RegisterPage';
import { UserCreateAppointment } from '../user/UserAppointment';


export const BodyPages =() =>{
  return (
    <>
    
   <Routes>
   


      <Route  path ="/" element={<HomePage/>} />
      <Route  path ="/login" element={<Login/>} />
      <Route  path ="/register" element={<Register />} />
      <Route  path ="/Patient" element={<Patient/>} />
      <Route  path ="/appointments" element={<CreatePatient/>} />   
      <Route  path ="/appointmentDoctor" element={<DoctorAppointments/>} />
      <Route  path ="/admin" element={<Admin/>} /> 
       <Route path = "/user" element={<UserCreateAppointment />}/>  
      <Route  path ="*" element={<HomePage/>}/> 
     
     
   </Routes>
   </>
  )
}

