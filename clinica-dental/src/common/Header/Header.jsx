  import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"  
import { useDispatch } from "react-redux";

 import { useJwt, decodeToken  } from "react-jwt";
 import { Link } from "react-router-dom";
import { Container, Navbar, Nav} from "react-bootstrap";
import { login, logout, userData } from "../../containers/User/userSlice";
import "./Header.css"
export const Header = () => {
   
     const dispatch = useDispatch();
    const navigate = useNavigate ()
    const token = localStorage.getItem("jwt")
     let {decodeToken} = useJwt(token);
    if (decodeToken === null) {
        decodeToken = { name:""};
   }
   
    const logout = () =>{
        localStorage.removeItem("jwt")
        navigate ("/")
    }

    const isAdmin = () =>{
        if (decodeToken.role == "admin"){
            return true;

       }else{
             return false;


        }   
       }
     if (token){

  return (
    

    <Navbar collapseOnSelect expand="lg" className="headerDesign">
    <Container className="nav-container">
       <Navbar.Brand onClick={() => navigate("/")}>
     
      </Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
       <Nav
           onClick={() => navigate("/home")}
          className="fw-bold m-auto text-center linkDesign"
        >
      Home
        </Nav>
         <Nav
           onClick={() => navigate("/appointments")}
          className="fw-bold m-auto text-center linkDesign"
        >
      Appointments
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
          <div>
          
            Hi, {decodeToken.name}!
          </div>
        </Nav>
                 {isAdmin() ? (
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
          onClick={() => logout()}
          className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
        >
                      Logout
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
} else {
return (
  <Navbar collapseOnSelect expand="lg" className="headerDesign">
     <Container className="nav-container">
       <Navbar.Brand className="logo" onClick={() => navigate("/")}>
            </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
       <Nav
           onClick={() => navigate("/home")}
          className="fw-bold m-auto text-center linkDesign"
        >
      Home
        </Nav>
         <Nav
           onClick={() => navigate("/appointments")}
          className="fw-bold m-auto text-center linkDesign">
      Appointments
        </Nav>
         <Nav
          onClick={() => navigate("/about")}
          className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign"
        >
           About Us
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
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
 }
};






// import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar, Container, Button, Modal } from 'react-bootstrap'
// import React, { useState } from 'react'
// //import '../css/menu.css'
// //import "../css/login.css"
// import { Link, useNavigate } from 'react-router-dom';
// //import Swal from 'sweetalert2'
// //import Sign_in from '../components/SignI_in'
// import logo_img from "../images/logo.png";
// import "./Header.css"

// export const Header =() => {

//     let storedTheme = localStorage.getItem("theme");
//     let userData = JSON.parse(sessionStorage.getItem("user"));
  
//     const defaultDark = storedTheme === "dark" || (storedTheme === null);
  
//     if (defaultDark) {
//       localStorage.setItem("theme", "dark");
//       document.documentElement.setAttribute("data-theme", "dark");
//     }
  
//     const navigate = useNavigate();
  
//     // pop up sign in
//     const [showModelSignIn, setShowModelSignIn] = useState(false);
//     const handleCloseModelSignIn = () => setShowModelSignIn(false);
//     const handleShowModelSignIn = () => setShowModelSignIn(true);
  
//     const sendUserToProfile = () => {
//       navigate.push(`/Profile/${userData._id}`);
//     }
  
//     const LogOutUser = () => {
//       Swal.fire({
//         title: 'Are you sure you want to leave?',
//         icon: 'question',
//         toast: true,
//         position: 'top-end',
//         showDenyButton: true,
//         confirmButtonText: 'yes',
//         denyButtonText: `no`,
//         confirmButtonColor: "green",
      
//       }).then((result) => {
//         if (result.isConfirmed) {
//           sessionStorage.clear('user');
//           history.push("/");
//           window.location.reload(false);
//         }
//       })
//     }
  
//     // send this function to Sign_In component
//     const hideModelSignIn = () => {
//       setShowModelSignIn(false);
//     }
  
//     return (
//       <>
//         <div className="menu">
//           <Navbar collapseOnSelect expand="sm" >
//             <Container className="nav-container">
//               <Link to='/'><Navbar.Brand className='logo' ><img src={logo_img} alt="icon" />
//               <h6>Noa Miralles Dental Care</h6>
//               </Navbar.Brand></Link>
//               <Navbar.Toggle aria-controls="responsive-navbar-nav" ></Navbar.Toggle>
//               <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                   <Nav.Link as={Link} to="/">Home</Nav.Link>
//                   <Nav.Link as={Link} to="/About">About</Nav.Link>
//                 </Nav>
//                 <Navbar.Collapse className="justify-content-end link">
//                   {userData != null ?
//                     <div className='imgPrf'>
//                       <Button onClick={sendUserToProfile}>
//                         Hello {userData.FirstName} (Profile)
//                       </Button>
//                       <br />
//                       <Button variant="outline-danger"
//                         onClick={LogOutUser}>
//                         Log out
//                       </Button>
//                     </div>
//                     :
//                     <>
//                       <Nav.Link onClick={handleShowModelSignIn}>Login</Nav.Link>
//                       <Nav.Link as={Link} to='/Register'>Register</Nav.Link>
//                     </>
//                   }
//                 </Navbar.Collapse>
//                 {/* model popup show Sign in */}
//                 <Modal show={showModelSignIn} onHide={handleCloseModelSignIn} >
//                   {/* <Sign_in hideSignIn={hideModelSignIn} /> */}
//                 </Modal>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//       </>
//     );
//   }
