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
      getPatientAppointment(user.credentials.token)
    
        .then((message) => {
          console.log(message);
          dispatch(edit({appointment: message}))
          console.log(user.credentials.token);
          // console.log(getPatientAppointment);
          // console.log(message.getPatientAppointment);
     
        })
        .catch((error) => console.log(error));
    }
  }, [dispatch, user]);

  return (
    <div className="appointmentsPatient-container">
      <h3 className="appointments-title">Citas Pendientes</h3>
    
{appointment?.appointment?.data.data[0]?.Appointments ? (
        <>
          {appointment.appointment.data.data[0].Appointments.map((data) => (
            <div className="appointment" key={data.id}>
              <p>Fecha y hora: {data.date_time}</p>
              <div>{data?.Patient?.name}</div>
              
             
            </div>
          ))}
        </>
      ) : (
        <p>No tienes citas .</p>
      )}
    </div>
  );
};
