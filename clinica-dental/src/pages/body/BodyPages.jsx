import React from 'react';
import {  Routes, Route } from 'react-router-dom';




import { AccountPage } from '../account/AccountPage'
import { UsersPage } from '../admin/UsersPage'
import { AppointmentPage } from '../appointment/AppointmentPage'
import { AppointmentsPage } from '../appointments/AppointmentsPage'
import { HomePage } from '../home/HomePage'
import { LoginPage } from '../login/LoginPage'

import { RegisterPage } from '../register/RegisterPage'

export const BodyPages =() =>{
  return (
    <>
   <Routes>
   


      <Route  path ="/" element={<HomePage/>} />
      <Route  path ="/login" element={<LoginPage/>} />
      <Route  path ="/register" element={<RegisterPage/>} />
      <Route  path ="/account" element={<AccountPage/>} />
      <Route  path ="/Treatments" element={<AppointmentsPage/>} />
      <Route  path ="/appointment" element={<AppointmentPage/>} />
      <Route  path ="/admin/users" element={<UsersPage/>} />
      {/* <Route  path ="*" element={<NotFoundPage/>} /> */}

     
   </Routes>
   </>
  )
}

