import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAppointment } from '../../services/apiCalls';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { InputText } from '../../common/InputText/InputText';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import './UserAppointment.css';

export const UserCreateAppointment = () => {
    
    const dataRdx = useSelector(userData);
    console.log(dataRdx)
    console.log(dataRdx?.credentials?.token)
    console.log(dataRdx?.credentials.usuario.userId, "hola soy credentials")
    const navigate = useNavigate()

    const [newDoctor, setNewDoctor] = useState(
        [{
        id: 1,
        doctorName: "Doctora Noa Miralles"
    },
        {
        id: 2,
        doctorName: "Doctor Freiryy"
    }]
);

const [newAppointment, setNewAppointment] = useState(
    {
    date_time: "",
    patient_id: dataRdx.credentials.usuario.userId,
    doctor_id: newDoctor
    }
);
    
    const [backendMessage, setBackendMessage] = useState("");

    // HANDLER 

    const inputHandler = (e) => {
        setNewAppointment((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };
      console.log(newAppointment)
    

    // FUNCTIONS 

    const checkError = (e) => { };
    const [successMessage, setSuccessMessage] = useState("");
    const createNewAppointment = () => {

        createAppointment(newAppointment, dataRdx.credentials.token)
        .then((backendCall) => {
            setNewAppointment(backendCall.data);
            setSuccessMessage("¡Cita creada con éxito!");
            setTimeout(() => {navigate('/AppointmentPatient')}, 3000)
        })
        .catch(error => console.log(error));
    };

    console.log(newAppointment, "hola soy newAppointment")

    return (
        <>
            <Container fluid>
                {
                backendMessage ? (
                    <>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10} className={'text-center d-flex align-items-center backendMessageBox'}><h1>{backendMessage}</h1></Col>
                            <Col xs={1}></Col>
                            
                        </Row>
                    </>
                ) : (
                    <>
                    <Form>
                        <Row>
                                <Form.Group>
                                    <InputText 
                                    className={'inputBasicDesign'}
                                    type={'datetime-local'}
                                    name={'date_time'}
                                    placeholder={'___'}
                                    required={true}
                                    changeFunction={(e) => inputHandler(e)}
                                    blurFunction={(e) => checkError(e)}
                                    />
                                </Form.Group>
                                <Form.Select name={"doctor_id"} onChange={(e) => inputHandler(e)} aria-label="Default select example">
                                    <option>Choose Doctor Specialist:</option>
                                    {newDoctor.map((doctor) => {
                                        return (
                                            <option key={doctor.id} value={doctor.id}>{doctor.doctorName}</option>
                                        )
                                    })}
                                </Form.Select>
                                <Button onClick={createNewAppointment} >
                                    Crear Cita
                                </Button>

                            <Col xs={3}></Col>
                            {successMessage && <p>{successMessage}</p>}
                        </Row>
                        </Form>
                    </>
                )
                }                
            </Container>
        </>
    );
};