
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import { adminData } from '../../containers/User/isAdminSlice';
import { getAllUser } from '../../services/apiCalls';

//render

export const Admin = () => {

    const dataRdx = useSelector(userData);
    const isAdmin = useSelector(adminData)
    const navigate = useNavigate();
    

    // HOOKS
    const [users, setUsers] = useState([]);

  

    useEffect(() => {

        if(users.length === 0){

            getAllUser(dataRdx?.credentials?.token)
                .then(
                    result => {

                        setUsers(result.data.data)                      
                        console.log(result.data.data, "hola result")
                    }
                )
                .catch(error => console.log(error))

        }
    }, [users]);
console.log(users, "sou users")
    return (
        

<div className="usersDesign">
  <h3>Usuarios existentes:</h3>
      {users.length > 0 ? (
        <div>
          {users.map((data) => {
            return (
              <div key={data.id}>
                <p>Nombre: {data.user_name}</p>
                <p>Email: {data.email}</p>
              </div>
            );
          })}
        </div>
      ) : (
        
        <div>ESTAN VINIENDO</div>
      )}
    </div>
  );
};






