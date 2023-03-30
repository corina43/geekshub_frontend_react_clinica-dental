
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorAppointment } from '../../services/apiCalls';
import { appointmentData, edit } from '../../containers/User/AppointmentSlice';
import { userData } from '../../containers/User/userSlice';
import './DoctorAppointments.css';

export const DoctorAppointments = () => {
  const [appointment, setAppointment] =useState([])
  const user = useSelector(userData);

  useEffect(() => {
    if (appointment.length === 0) {
      getDoctorAppointment(user.credentials.token)
        .then((message) => {
          setAppointment(message.data.data[0].Appointments)
        })
        .catch((error) => console.log(error));
    }
  }, [appointment]);
  return (
    <div className="appointments-container">
      <h1 className="appointments-title">Lista de citas de los doctores</h1>
      {appointment ? (
        <>
          {appointment.map((data) => (
            <div className="appointment" key={data.id}>
              <p>Fecha y hora: {data.date_time}</p>
              <div>{data?.Patient?.name}</div>
              
              {/* <p>Nombre del paciente: {data.patient.userName}</p> */}
              {/* <p>Apellidos del paciente: {data.patient.surname}</p> */}
              {/* <p>DNI del paciente: {data.data.patient.DNI}</p>  */}
            </div>
          ))}
        </>
      ) : (
        <p>No hay citas disponibles.</p>
      )}
    </div>
  );
};
