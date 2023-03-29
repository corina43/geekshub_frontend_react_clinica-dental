
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorAppointment } from '../../services/apiCalls';
import { appointmentData, edit } from '../../containers/User/AppointmentSlice';
import { userData } from '../../containers/User/userSlice';
import './DoctorAppointments.css';

export const DoctorAppointments = () => {
  const dispatch = useDispatch();
  const appointment = useSelector(appointmentData);
  const user = useSelector(userData);

  useEffect(() => {
    if (user?.credentials?.token) {
      getDoctorAppointment(user.credentials.token)
        .then((message) => {
          dispatch(edit({ appointment: message }));
        })
        .catch((error) => console.log(error));
    }
  }, [dispatch, user]);

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">Lista de citas de los doctores</h1>

      {appointment?.appointment?.data.data[0]?.Appointments ? (
        <>
          {appointment.appointment.data.data[0].Appointments.map((data) => (
            <div className="appointment" key={data.id}>
              <p>Fecha y hora: {data.date_time}</p>
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
