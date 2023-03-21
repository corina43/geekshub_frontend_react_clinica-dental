import React from 'react';
import {  Routes, Route } from 'react-router-dom';




import { AccountPage } from '../account/AccountPage'
import { UsersPage } from '../admin/UsersPage'
import { AppointmentPage } from '../appointment/AppointmentPage'

import { HomePage } from '../home/HomePage'

import { Treatments } from '../Treatments/Treatments';
import { Register } from '../register/RegisterPage';
import { Login } from '../login/LoginPage';



export const BodyPages =() =>{
  return (
    <>
    
   <Routes>
   


      <Route  path ="/" element={<HomePage/>} />
      <Route  path ="/login" element={<Login/>} />
      <Route  path ="/register" element={<Register/>} />
      <Route  path ="/account" element={<AccountPage/>} />
      <Route  path ="/Treatments" element={<Treatments/>} />
      <Route  path ="/appointment" element={<AppointmentPage/>} />
      <Route  path ="/admin/users" element={<UsersPage/>} />
       <Route  path ="*" element={<HomePage/>}/> 

     
   </Routes>
   </>
  )
}

