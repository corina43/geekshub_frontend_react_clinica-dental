

import React, { useState } from "react";
import logo_img from "../images/logo.png";
import { Link } from "react-router-dom"; 
import "font-awesome/css/font-awesome.min.css";
import './Navegacion.css'
 export const Navegacion = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/#home">
            <img src={logo_img} alt="om dental clinic logo" />
          </Link>
          <h6> Noa Miralles Dental Clinic</h6>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <Link to="/#home" onClick={closeMobileMenu}>
              Home
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/#about-doctors" onClick={closeMobileMenu}>
              About
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/#our-services" onClick={closeMobileMenu}>
              Treatments
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/login_user" onClick={closeMobileMenu}>
              Login
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/#contact-us" onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
          <div className="MenuItems" id="Appointment_menu">
            <Link to="/dental-clinic/slot" onClick={closeMobileMenu}>
              Appointment
            </Link>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};
