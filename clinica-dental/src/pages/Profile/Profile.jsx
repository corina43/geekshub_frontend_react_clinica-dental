
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardPatient } from '../../common/CardPatient/CardPatient';

import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { getPatientInfo } from '../../services/apiCalls';

export const Profile = () => {
    const [patients, setPatients] = useState([]);
    const dataRdx = useSelector(userData);
    const navigate = useNavigate();
  
    useEffect(() => {
        if(patients.length === 0){
            console.log(dataRdx?.credentials?.token)
            getPatientInfo(dataRdx?.credentials?.token)
                .then(
                    result => {
                        setPatients(result.data[0].Patients)
                    }
                )
                .catch(error => console.log(error));
        };
    },[patients]);

    return (
        <>
         
                {patients.map(data => 
                        {
                            return <CardPatient key={data} dataPatient={data}></CardPatient>
                        }
                    )
                }
        </>
    )
};