import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorAppointment } from '../../services/apiCalls';

const DoctorAppointments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorAppointment());
  }, [dispatch]);

  const appointments = useSelector((state) => state.doctor.appointments);

  return (
    <div>
      <h1>Lista de citas de los doctores</h1>
      {appointments.map((doctor) => (
        <div key={doctor.id}>
          <h2>{doctor.name}</h2>
          <ul>
            {doctor.Appointments.map((appointment) => (
              <li key={appointment.id}>
                <p>collegiate_member: {appointment.collegiate_member}</p>
                <p>name: {appointment.Patient.name}</p>
                <p>surname: {appointment.surname}</p>
                <p>DNI: {appointment.Patient.DNI}</p>
                <p>phone_number: {appointment.Patient.phone_number}</p>
                <p>contract_at: {appointment.Patient.contract_at}</p>
                <p>contract_until: {appointment.Patient.contract_until}</p>
                <p>user_id: {appointment.Patient.user_id}</p>

              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DoctorAppointments;