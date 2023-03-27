import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorAppointment } from '../../services/apiCalls';
import {appointmentData ,edit} from '../../containers/User/AppointmentSlice';
import { userData } from '../../containers/User/userSlice';
export  const DoctorAppointments = () => {
  const dispatch = useDispatch();
  const appointment = useSelector(appointmentData);
  const user = useSelector(userData)
  useEffect(() => {
    // console.log( 'token')
    // console.log(user)
    getDoctorAppointment(user.credentials?.token)
    .then((message)=>{
      dispatch(edit({appointment:message}));
      console.log(appointment.appointment.data.data[0].Appointments)
    })
    .catch((error)=>console.log(error))
  }, [dispatch]);

  useEffect(() => {
  })

  return (
    <div>
      <h1>Lista de citas de los doctores</h1>
      
      {/* appointment.appointment.data.data[0].Appointments[0] */}
        {/* {appointment.appointment.data.data[0].Appointments && (
        <>
          {appointment.appointment.data.data[0].Appointments.map(data => 
            {
                return <div key={data.id}>
                  {data.date_time}
                </div>
            }
          )}
        </>
        )
      }   */}
    </div>
  );
};
