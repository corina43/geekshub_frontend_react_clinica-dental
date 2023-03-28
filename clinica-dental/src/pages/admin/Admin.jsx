import React, {useState, useEffect} from 'react';
import { bringUsers } from '../../services/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { userData } from '../../containers/User/userSlice';
import { addChoosen } from '../../containers/User/detailSlice';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
    const [users, setUsers] = useState([]);
    const dataRdx = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        if(users.length === 0 && dataRdx?.credentials?.token?.usuario?.roleId === 2){
            bringUsers(dataRdx?.credentials?.token)
                .then(
                    result => {
                        console.log("tengo sueño", result);
                        setUsers(result.data.data);
                    }
                )
                .catch(error => console.log(error));
        }
    },[users])

    const selected = (persona) => {
        dispatch(addChoosen({ choosenObject: persona }));
        setTimeout(()=>{
            navigate("/detail");
        },500)
    }

    return (
        <div className='usersDesign'>
            {  users.length > 0 ? 
                (
                    <div>
                        {users.map(persona => {
                            return (
                                <div onClick={()=>selected(persona)} key={persona._id}>
                                    {persona.name}
                                </div>
                            )
                        })}
                    </div>
                )
                : 
                (<div>ESTAN VINIENDO</div>)
            }
        </div>
    )
        }









// import React, { useEffect, useState } from "react";
// import { Col, Collapse, Container, Row } from "react-bootstrap";
// import { decodeToken } from "react-jwt";
// import { useNavigate } from "react-router-dom";
// // import { getAllUsers } from "../../services/ApiCalls";
// // import "./admin.css";

// export const Admin() {

//   const navigate = useNavigate();

//   const decodificado = decodeToken(dataRdx.credentials.token);
// //   let { decodedToken } = useJwt(token);

//   const [openUsers, setOpenUsers] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [deleted, setDeleted] = useState(false);


//   useEffect(() => {
//     getAllUsers(token).then((users) => setUsers(users));
//   }, [deleted]);
 
//   const isAdmin = () => {
//     if (dataRdx.credentials.token) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   const deleteUserAdmin = (user) => {
//     // Aquí podrías agregar la funcionalidad para eliminar usuarios de la plataforma
//   }

//   if (isAdmin()) {
//     return (
//       <Container className="adminContainer">
//         <Row className="adminCardTitle mt-3">
//           <div
//             onClick={() => setOpenUsers(!openUsers)}
//             aria-controls="example-collapse-text"
//             aria-expanded={openUsers}
//             className="collapseText"
//           >
//             USUARIOS
//           </div>
//         </Row>
//         <Collapse in={openUsers}>
//           <div>
//             <Row className="adminSection mt-3">
//               {users.map((user, index) => {
//                 return (
//                   <Col key={index} className={`col-10 col-md-3 adminCard`}>
//                     <div className="loanId">
//                       <span>{user.email}</span>
//                     </div>
//                     <div>
//                       <span>Nombre: </span>
//                       {user.name}
//                     </div>
//                     <div>
//                       <span>Teléfono: </span>
//                       {user.phone}
//                     </div>
//                     <div>
//                       <span>Dirección: </span>
//                       {user.address}
//                     </div>
//                     <div>
//                       <span>Fecha de registro: </span>
//                       {user.register_date}
//                     </div>
//                     <div
//                       className="buttonDetail"
//                       onClick={() => deleteUserAdmin(user)}
//                     >
//                       Eliminar usuario
//                     </div>
//                   </Col>
//                 );
//               })}
//             </Row>
//           </div>
//         </Collapse>
//       </Container>
//     );
//   } else {
//     return (
//       <div>
//         NO AUTORIZADO
//       </div>
//     );
//   }
// }


