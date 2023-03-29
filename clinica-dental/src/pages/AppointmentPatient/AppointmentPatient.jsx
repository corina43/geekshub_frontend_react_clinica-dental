import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { appointmentData, edit } from '../../containers/User/AppointmentSlice';
import { getPatientAppointment  } from "../../services/apiCalls";



export const AppointmentPatient = () => {


  const dispatch = useDispatch();
  const appointment = useSelector(appointmentData);
  const user = useSelector(userData);



  useEffect(() => {
    if (user?.credentials?.token) {
      getPatientAppointment(user?.credentials?.token)
      
        .then((message) => {
          dispatch(edit({appointment: message}))
          console.log(result.getPatientAppointment);
     
        })
        .catch((error) => console.log(error));
    }
  }, [dispatch, user]);

  return (
    <div>
      <h3>Citas Pendientes</h3>
      {appointment.length > 0 ? (
        <ul>
          {appointment.map((data) => (
            <li key={data.id}>
              <p>Fecha: {data.data_time}</p>
              <p>Doctor: {data.doctor}</p>
            
            </li>
          ))}
        </ul>
      ) : (
        <p>No tiene citas pendientes</p>
      )}
    </div>
  );
};


