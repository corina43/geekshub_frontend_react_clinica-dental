// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { decodeToken } from "react-jwt";
// import { Container, Navbar, Nav, Button } from "react-bootstrap";
// import { login, logout, userData } from "../../containers/User/userSlice";
// import { useSelector } from "react-redux";
// import "./Header.css";
// export const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const dataRdx = useSelector(userData);

//   const logMeOut = () => {
//     dispatch(logout({ credentials: {}, token: "" }));

//     navigate("/");
//   };

//   const [isAdmin, setIsAdmin] = useState(false);



// useEffect(()=>{

//   //Ahora sabremos si somos admin o no, decodificando el Token.

//   if(dataRdx.credentials.token !== ""){

//     //Si tenemos token, lo vamos a decodificar....
//     const decodificado = decodeToken(dataRdx.credentials.token);
//     if(decodificado?.roleId == 2){
//       setIsAdmin(decodificado);
//     }
//   }

  
// },[])


// let role = isAdmin.roleId


//   if (role === 2) {
//     return (
//       <Navbar collapseOnSelect expand="lg" className="headerDesign">
//         <Container className="nav-container">
//           <Navbar.Brand onClick={() => navigate("/")}></Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
//             <Nav
//               onClick={() => navigate("/home")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Home
//             </Nav>
//             <Nav
//               onClick={() => navigate("/appointmentDoctor")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               AppointmentDoctor
//             </Nav>

//             <Nav
//               onClick={() => navigate("/profile")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Profile
//             </Nav>
//             <Nav
//               onClick={() => navigate("/patient")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Patient
//             </Nav>
//              <Nav
//               onClick={() => navigate("/admin")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Admin
//             </Nav> 
//             <Nav
//               onClick={() => navigate("/appointments")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Appointment
//             </Nav>

//             <Nav
//               onClick={() => navigate("/profile")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               <div>Hi, {decodeToken.name}!</div>
//             </Nav>
//             {isAdmin ? (
//               <Nav
//                 onClick={() => navigate("/admin")}
//                 className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//               >
//                 Admin
//               </Nav>
//             ) : (
//               <div></div>
//             )}
//             <Nav
//               onClick={() => logMeOut()}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Logout
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   } else if (role === 1) {
//     return (
//       <Navbar collapseOnSelect expand="lg" className="headerDesign">
//         <Container className="nav-container">
//           <Navbar.Brand
//             className="logo"
//             onClick={() => navigate("/")}
//           ></Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
//             <Nav
//               onClick={() => navigate("/home")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Home
//             </Nav>
          
//             <Nav
//               onClick={() => navigate("/appointmentDoctor")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Appointment
//             </Nav>
//             <Nav
//               onClick={() => navigate("/profile")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Profile
//             </Nav>

//             <Nav
//               onClick={() => navigate("/about")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               About Us
//             </Nav>

//             <Nav
//               onClick={() => navigate("/login")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Login
//             </Nav>
//             <Nav
//               onClick={() => navigate("/register")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Register
//             </Nav>

//             <Nav
//               onClick={() => logMeOut()}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Logout
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//           // </Navbar.Collapse>
          
//       //   </Container>
//       // </Navbar>
      
//     );
//   } else if (role ===3 ){
//     return (
//       <Navbar collapseOnSelect expand="lg" className="headerDesign">
//         <Container className="nav-container">
//           <Navbar.Brand
//             className="logo"
//             onClick={() => navigate("/")}
//           ></Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
//             <Nav
//               onClick={() => navigate("/home")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Home
//             </Nav>
          
//             <Nav
//               onClick={() => navigate("/appointmentDoctor")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Appointment
//             </Nav>
//             <Nav
//               onClick={() => navigate("/profile")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Profile
//             </Nav>

//             <Nav
//               onClick={() => navigate("/about")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               About Us
//             </Nav>

//             <Nav
//               onClick={() => navigate("/login")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Login
//             </Nav>
//             <Nav
//               onClick={() => navigate("/register")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Register
//             </Nav>
//             <Nav
//               onClick={() => logMeOut()}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Logout
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }
//   else {
//     return (
//       <Navbar collapseOnSelect expand="lg" className="headerDesign">
//         <Container className="nav-container">
//           <Navbar.Brand
//             className="logo"
//             onClick={() => navigate("/")}
//           ></Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
//             <Nav
//               onClick={() => navigate("/home")}
//               className="fw-bold m-auto text-center linkDesign"
//             >
//               Home
//             </Nav>
//             <Nav
//               onClick={() => navigate("/about")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               About Us
//             </Nav>

//             <Nav
//               onClick={() => navigate("/login")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Login
//             </Nav>
//             <Nav
//               onClick={() => navigate("/register")}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Register
//             </Nav>
//             <Nav
//               onClick={() => logMeOut()}
//               className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
//             >
//               Logout
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );

//   }
// };







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { decodeToken } from "react-jwt";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { login, logout, userData } from "../../containers/User/userSlice";
import { useSelector } from "react-redux";
import "./Header.css";
export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataRdx = useSelector(userData);

  const logMeOut = () => {
    dispatch(logout({ credentials: {} }));

    navigate("/");
  };

  const [isAdmin, setIsAdmin] = useState(false);



useEffect(()=>{

  //Ahora sabremos si somos admin o no, decodificando el Token.

  if(dataRdx.credentials.token !== ""){

    //Si tenemos token, lo vamos a decodificar....

    const decodificado = decodeToken(dataRdx.credentials.token);
    console.log(decodificado)

    if(decodificado?.roleId == 2){
      setIsAdmin(true);
    }
  }

  
},[])




  if (dataRdx.credentials.token) {
    return (
      <Navbar collapseOnSelect expand="lg" className="headerDesign">
        <Container className="nav-container">
          <Navbar.Brand onClick={() => navigate("/")}></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
            <Nav
              onClick={() => navigate("/home")}
              className="fw-bold m-auto text-center linkDesign"
            >
              Home
            </Nav>
            <Nav
              onClick={() => navigate("/appointmentDoctor")}
              className="fw-bold m-auto text-center linkDesign"
            >
              AppointmentDoctor
            </Nav>

            {/* <Nav
              onClick={() => navigate("/profile")}
              className="fw-bold m-auto text-center linkDesign"
            >
              Profile
            </Nav> */}
            <Nav
              onClick={() => navigate("/patient")}
              className="fw-bold m-auto text-center linkDesign"
            >
              Patient
            </Nav>
              <Nav
              onClick={() => navigate("/admin")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Admin
            </Nav>  
            <Nav
              onClick={() => navigate("/about")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              About Us
            </Nav>

            <Nav
              onClick={() => navigate("/profile")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              <div>Hi, {decodeToken.name}!</div>
            </Nav>
            {isAdmin ? (
              <Nav
                onClick={() => navigate("/admin")}
                className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
              >
                Admin
              </Nav>
            ) : (
              <div></div>
            )}
            <Nav
              onClick={() => logMeOut()}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Logout
            </Nav>
            <Nav
              onClick={() => navigate("/appoinments")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Crear cita
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" className="headerDesign">
        <Container className="nav-container">
          <Navbar.Brand
            className="logo"
            onClick={() => navigate("/")}
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
            <Nav
              onClick={() => navigate("/home")}
              className="fw-bold m-auto text-center linkDesign"
            >
              Home
            </Nav>
          
            <Nav
              onClick={() => navigate("/appointmentDoctor")}
              className="fw-bold m-auto text-center linkDesign"
            >
              Appointment
            </Nav>
            {/* <Nav
              onClick={() => navigate("/profile")}
              className="fw-bold m-auto text-center linkDesign"
            >
              Profile
            </Nav> */}

            <Nav
              onClick={() => navigate("/about")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              About Us
            </Nav>
            <Nav
              onClick={() => navigate("/appointments")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Crear cita
            </Nav>

            <Nav
              onClick={() => navigate("/login")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Login
            </Nav>
            <Nav
              onClick={() => navigate("/register")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Register
            </Nav>
            <Nav
              onClick={() => navigate("/appointments")}
              className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
            >
              Crear cita
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};
