
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
// apicall
import { createPatient } from '../../services/apiCalls';
import { validate } from '../../common/helpers/useful'
import { InputText } from '../../common/InputText/InputText';
import { ButtonSubmit } from '../../common/ButtonSubmit/ButtonSubmit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export const CreatePatient = () => {

    const dataRdx = useSelector(userData);
    
    const navigate = useNavigate();

    //HOOKS
    //set data for the new patient
    const [newPatient, setNewPatient] = useState(
        {
            name: "",
            surname: "",
            DNI: "",
            user_id: dataRdx.credentials.usuario.userId,
            phone_number: "",
            post_code: "",
            birth: "",
            allergy: "blanqueamiento",
            surgery: "blanqueamiento"
        }
    );

    //validate the value inside the inputs
    const [validInputField, setValidInputfield] = useState(
        {
            nameValid: false,
            surnameValid: false,
            DNIValid: false,
            phone_numberValid: false,
            post_codeValid: false,
            birthValid: false,
            allergyValid: true,
            surgeryValid: true
        }
    );
    //error messages if something is wrong inside the inputs
    const [errorInputField, setErrorInputField] = useState(
        {
            nameError: "",
            surnameError: "",
            DNIError: "",
            phone_numberError: "",
            post_codeError:"",
            birthError: "",
            allergyError: "",
            surgeryError:""
        }
    );

    // new patient activable button
    const [submitActive, setSubmitActive] = useState(false);

    // message when new patient is create
    const [userMessage, setUserMessage] = useState("");

    //HANDLER
    const inputHandler = (e) => {

        setNewPatient((prevState)=>(
                {
                    ...prevState,
                    [e.target.name]: e.target.value
                }
            )
        );

        checkError(e)
    };

    //USEEFFECT
    useEffect(() => {
        //functions to make submit button activated
        //in case that a field shows an error
        for(let error in errorInputField){
            
            if(errorInputField[error]){
                
                setSubmitActive(false);
                return;
            };
        };

        //en el caso no sea valido
        for(let valid in validInputField){
            
            if(validInputField[valid] === false){
                
                setSubmitActive(false);
                return;
            };
        };
    
      
        setSubmitActive(true);
    }, [errorInputField, validInputField]);

    //FUNCTIONS 
    // checkerror function
    const checkError = (e) => {

        let error = "";
    
        let check = validate(
            e.target.name,
            e.target.value,
            e.target.required
            );
            
        error = check.message

        setValidInputfield((prevState) => (
                {
                    ...prevState,
                    [e.target.name + 'Valid']: check.valid
                }
            )
        );
    
        setErrorInputField((prevState) => (
                {
                ...prevState,
                [e.target.name + 'Error']: error
                }
            )
        );
    };

 
    // función para crear nuevo paciente

const newPatientCreation = () => {

    createPatient(newPatient, dataRdx.credentials.token)
    .then((backendCall) => {
        setNewPatient(backendCall.data);
    })
    .catch(error => console.log(error));
};

console.log(newPatient, "patient")
console.log(validInputField, "validation")

return (
            <Container>
                {
                    userMessage !== "" ?
                    (
                        <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>{userMessage}</Col>
                        <Col xs={1}></Col>
                        
                    </Row>
                    ) : (
                        <>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText 
                                    className={'inputBasicDesign'}
                                    type={'text'}
                                    name={'name'}
                                    placeholder={'CORINA'}
                                    required={true}
                                    error={errorInputField.nameError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                    />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText 
                                    className={'inputBasicDesign'}
                                    type={'text'}
                                    name={'surname'}
                                    placeholder={'Ciorpac'}
                                    required={true}
                                    error={errorInputField.surnameError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                    />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText 
                                    className={'inputBasicDesign'}
                                    type={'text'}
                                    name={'DNI'}
                                    placeholder={'00000000A'}
                                    required={true}
                                    error={errorInputField.DNIError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                    />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText
                                    className={'inputBasicDesign'}
                                    type={'text'}
                                    name={'phone_number'}
                                    placeholder={'+34 666 223 859'}
                                    required={true}
                                    error={errorInputField.phone_numberError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText
                                    className={'inputBasicDesign'}
                                    type={'number'}
                                    name={'post_code'}
                                    placeholder={'46185'}
                                    required={true}
                                    error={errorInputField.post_codeError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText 
                                    className={'inputBasicDesign'}
                                    type={'date'}
                                    name={'birth'}
                                    placeholder={'yyyy-mm-dd'}
                                    required={true}
                                    error={errorInputField.birthError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                    />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={10}>
                            <InputText
                                    className={'inputBasicDesign'}
                                    type={'text'}
                                    name={'allergy'}
                                    placeholder={'allergy'}
                                    required={false}
                                    error={errorInputField.allergyError}
                                    changeFunction={(e)=>inputHandler(e)}
                                    blurFunction={(e)=>checkError(e)}
                                />
                            </Col>
                            <Col xs={1}></Col>
                        </Row>
                     
                        <Row>
                            <Col xs={4}></Col>
                            <Col xs={4}>
                                <Button onClick={newPatientCreation}></Button>t
                            </Col>
                            <Col xs={4}></Col>
                        </Row>
                        </>
                    )
                }
                
            </Container>
        );
    };