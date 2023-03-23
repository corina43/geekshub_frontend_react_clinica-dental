  import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"  
import { useDispatch } from "react-redux";

 import { useJwt, decodeToken  } from "react-jwt";
//  import { NavLink } from "react-router-dom";
import { Container, Navbar, Nav,Button} from "react-bootstrap";
import { login, logout, userData } from "../../containers/User/userSlice";
import "./Header.css"
export const Header = () => {
   
    const dispatch = useDispatch ();
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
           onClick={() => navigate("/profile")}
          className="fw-bold m-auto text-center linkDesign"
        >
       Profile
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
        {/* <NavDropdown className=""="Admin">
						<NavDropdown.Item as={NavLink} to={routes.admin.users}>
							Usuarios
						</NavDropdown.Item>
					</NavDropdown> */}
         <Nav
           onClick={() => navigate("/appointments")}
          className="fw-bold m-auto text-center linkDesign">
      Appointments
        </Nav>
        <Nav
           onClick={() => navigate("/profile")}
          className="fw-bold m-auto text-center linkDesign"
        >
       Profile
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






