// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getUserProfile } from "../../services/apiCalls";
// import { Col, Container, Row } from "react-bootstrap";
// import { useJwt } from "react-jwt";

// import { validate } from "../../common/helpers/useful";

// const Profile = () => {
//     const navigate = useNavigate();
//       const token = localStorage.getItem("jwt");
//       let { decodedToken } = useJwt(token);
  
  
   
  
  
//     const [user, setUser] = useState({
//       username: "",
//       password: "",
//       password2: "",
//     });
  
//     const [userError, setUserError] = useState({
//       usernameerror: "",
//       passworderror: "",
//       password2error: "",
//       incompleteerror: "",
//     });
  
//     useEffect (() => {
//       setUser((prevState) => ({
//         ...prevState,
//         username: decodedToken?.username,
//       }));
//     }, [decodedToken]);
  
//     const validateBody = (body) => {
//       if (body.username !== "" && body.password !== "" && body.password2 !== "") {
//         return true;
//       }
//     };
  
//     const inputHandler = (e) => {
//       setUser((prevState) => ({
//         ...prevState,
//         [e.target.name]: e.target.value,
//       }));
//     };
  
//     const errorHandler = (field, value, type, password1) => {
//       let error = "";
//       error = validate (value, type, password1);
//       setUserError((prevState) => ({
//         ...prevState,
//         [field + "error"]: error,
//       }));
//     };
//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (body.username == "") {
//           delete body.username;
//         } else if ((body.password = "")) {
//           delete body.password;
//         }
//         getUserProfile(body, token)
//         .then(localStorage.removeItem("jwt"))
//         .then(navigate("/login"));
//     };
  
//     const body = {
//       username: user.username,
//       password: user.password,
      
//     };
  
//      if (decodedToken) {
//       return (
//         <Container className="container-fluid">
//           <Row className="row rowDesign">
//             <Col className="col col-sm-6 editData d-flex justify-content-center align-items-center">
//               <form onSubmit={submitHandler} className="">
//                 <div className=" text-center d-flex flex-column justify-content-center align-items-center">
               
  
//                   <h3>Edit your user data.</h3>
//                   <div>{userError.incompleteerror}</div>
  
//                   <input
//                     className="inputUserDesign"
//                     type="text"
//                     name="username"
//                     placeholder="  New username ... |"
//                     value={user.username}
//                     onChange={inputHandler}
//                   />
  
//                   <input
//                     onBlur={(e) =>
//                       errorHandler(e.target.name, e.target.value, "password")
//                     }
//                     className="inputUserDesign"
//                     type="Password"
//                     name="password"
//                     placeholder="  New password ... |"
//                     onChange={inputHandler}
//                   />
//                   <div className="errorInput">{userError.passworderror}</div>
//                   <input
//                     className="inputUserDesign"
//                     type="Password"
//                     name="password2"
//                     placeholder="  Repeat password ... |"
//                     onChange={inputHandler}
//                     onBlur={(e) =>
//                       errorHandler(
//                         e.target.name,
//                         e.target.value,
//                         "password2",
//                         user.password
//                       )
//                     }
//                   />
//                   <div className="errorInput">{userError.password2error}</div>
  
//                   <div className="container-fluid buttonsDiv">
//                     <button className="buttonDesign">Update</button>
//                     <button className="buttonDesign">Back</button>
//                   </div>
//                 </div>
//               </form>
//             </Col>
//             <Col className="col-12 col-sm-6 editTarget d-flex justify-content-center align-items-center">
//               <div className="userCard text-center justify-content-center align-items-center">
//                 <h4>{decodedToken.username}</h4>
//                 <div>{decodedToken.name}</div>
//                 <div>{decodedToken.DNI}</div>
//                 <div>{decodedToken.post_code}</div>
//                 <div>{decodedToken.birth}</div>
//                 <div>{decodedToken.allergy}</div>
//                 <div>{decodedToken.surgery}</div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       );
//     } else {
//       navigate("/");
//     }
//   };
  
//   export default Profile;
import React from 'react'

export const Profile = () => {
  return (
    <div><h1>hola</h1></div>
  )
}