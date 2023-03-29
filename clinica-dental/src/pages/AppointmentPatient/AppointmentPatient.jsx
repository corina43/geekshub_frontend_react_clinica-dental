import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import { appointmentData, edit } from '../../containers/User/AppointmentSlice';
import {getAllAppointment  } from "../../services/apiCalls";

const AppointmentPatient = () => {
  const dispatch = useDispatch();
//  const appointment = useSelector(appointmentData);
//   const user = useSelector(userData);

  const [appointment, setAppointment] = useState([]);
  const dataRdx = useSelector(userData);

  useEffect(() => {
    if (dataRdx?.credentials?.token) {
        getAllAppointment(dataRdx?.credentials?.token)
        .then((result) => {
          console.log(result.data);
          setAppointment(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [dataRdx]);

  return (
    <div>
      <h3>Citas Pendientes</h3>
      {citas.length > 0 ? (
        <ul>
          {citas.map((appointment) => (
            <li key={appointment.id}>
              <p>Fecha: {appointment.fecha}</p>
              <p>Hora: {appointment.hora}</p>
              <p>Doctor: {appointment.doctor}</p>
            
            </li>
          ))}
        </ul>
      ) : (
        <p>No tiene citas pendientes</p>
      )}
    </div>
  );
};


