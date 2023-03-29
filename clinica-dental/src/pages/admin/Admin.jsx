// import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// //redux
// import { useDispatch ,useSelector } from 'react-redux';
// import { userData } from '../../containers/User/userSlice';
// import { adminData } from '../../containers/User/isAdminSlice';
// import { getAllUser } from '../../services/apiCalls';

// //render

// export const Admin = () => {

//     const dataRdx = useSelector(userData);
//     const isAdmin = useSelector(adminData)
//     const navigate = useNavigate();
    

//     // HOOKS
//     const [users, setUsers] = useState([]);

//     // USESTATE
//     useEffect(() => {

//         if(isAdmin?.isAdmin !== true ){
//             navigate('/')
//         };

//     });

//     useEffect(() => {

//         if(users.length === 0){

//             getAllUser(dataRdx.credentials?.token)
//                 .then(
//                     result => {
//                         console.log(result, "hola result")
//                         setUsers(result.data.data)
//                     }
//                 )
//                 .catch(error => console.log(error))

//         }
//     }, [users]);
//     console.log(dataRdx.credentials.usuario.userName)

//     return (
//         <>
//         {users.map(data => 
//             {
//                 return 
//                 // <div userData={data.id}></div>
//                 <div onClick={()=>selected(data)} key={data._id}></div>
//             }
//             )}
//         </>
//     );
// };
// import React, { useState, useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// //redux
// import { useDispatch ,useSelector } from 'react-redux';
// import { userData } from '../../containers/User/userSlice';
// import { adminData } from '../../containers/User/isAdminSlice';
// import { getAllUser } from '../../services/apiCalls';

// //render

// export const Admin = () => {

//     const dataRdx = useSelector(userData);
//     const isAdmin = useSelector(adminData)
//     const navigate = useNavigate();
    

//     // HOOKS
//     const [users, setUsers] = useState([]);

//     // USESTATE
//     useEffect(() => {

//         if(isAdmin?.isAdmin !== true ){
//             navigate('/')
//         };

//     });

//     useEffect(() => {

//         if(users.length === 0){

//             getAllUser(dataRdx.credentials?.token)
//                 .then(
//                     result => {
//                         console.log(result, "hola result")
//                         setUsers(result.data.data)
//                     }
//                 )
//                 .catch(error => console.log(error))

//         }
//     }, [users]);

//     const userName = dataRdx.credentials?.usuario?.userName;

//     return (
//         <>
//         <h1>Bienvenido, {userName}</h1>
//         {users.map(dataRdx => 
//             {
//                 return (
//                     <div onClick={()=>selected(data.data)} key={data.data}></div>
//                 );
//             }
//         )}
//         </>
//     );
// };


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

    // USESTATE
    // useEffect(() => {

    //     if(isAdmin?.isAdmin !== true ){
    //         navigate('/')
    //     };

    // });

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
      {users.length > 0 ? (
        <div>
          {users.map((data) => {
            return (
              <div key={data.id}>
                {data.user_name}
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






