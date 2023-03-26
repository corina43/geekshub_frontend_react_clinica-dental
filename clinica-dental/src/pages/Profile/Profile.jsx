
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardPatient } from '../../common/CardPatient/CardPatient';

import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { createUserProfile } from '../../services/apiCalls';

export const Profile = () => {
    const [users, setUsers] = useState([]);
    const dataRdx = useSelector(userData);
    const navigate = useNavigate();
  
    useEffect(() => {
        if(users.length === 0){
            console.log(dataRdx?.credentials?.token)
            createUserProfile(dataRdx?.credentials?.token)
                .then(
                    result => {
                        setUsers(result.data[0].Users)
                    }
                )
                .catch(error => console.log(error));
        };
    },[users]);

    return (
        <>
         
                {users.map(data => 
                        {
                            return <CardUsers key={data} dataUser={data}></CardUsers>
                        }
                    )
                }
        </>
    )
};