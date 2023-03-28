
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { getPatientInfo } from '../../services/apiCalls';
import { ProgressBar } from 'react-bootstrap';

export const Patient = () => {
    const [patients, setPatients] = useState([]);
    const dataRdx = useSelector(userData);
    const navigate = useNavigate();
  
    useEffect(() => {
        if(patients.length === 0){
            console.log(dataRdx?.credentials?.token)
            getPatientInfo(dataRdx?.credentials?.token)
                .then(
                    result => {
                        console.log(result, "hola soy result")
                        setPatients(result.data)
                    }
                )
                .catch(error => console.log(error));
        };
    },[patients]);
    console.log(patients, "patient info")

    return (
        <>

            <div>
                <h6>my profile:</h6>
                
                {patients.length > 0 ? (
                    <div className="cardsContainer">
                        {patients.map((data) => {
                            return (
                                <div key={ data.id }>
                                        <div> {data.user_name}</div>
                                        <div> {data.email}</div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <ProgressBar animated now={45} />
                )}
            </div>
        </>
    )
};






