import React from 'react';
import {  Routes, Route } from 'react-router-dom';




import { AccountPage } from '../account/AccountPage'
import { UsersPage } from '../admin/UsersPage'
import { AppointmentPage } from '../appointment/AppointmentPage'

import { HomePage } from '../home/HomePage'
import { Login } from '../login/LoginPage';
import Profile from '../Profile/Profile';
import { Register } from '../register/RegisterPage';



export const BodyPages =() =>{
  return (
    <>
    
   <Routes>
   


      <Route  path ="/" element={<HomePage/>} />
      <Route  path ="/login" element={<Login/>} />
      <Route  path ="/register" element={<Register />} />
      <Route  path ="/profile" element={<Profile/>} />
      {/* <Route  path ="/Logout" element={<Logout/>} /> */}
      <Route  path ="/appointment" element={<AppointmentPage/>} />
      <Route  path ="/admin/users" element={<UsersPage/>} />
       <Route  path ="*" element={<HomePage/>}/> 

     
   </Routes>
   </>
  )
}

