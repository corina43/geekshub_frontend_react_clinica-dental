import React,{ useState} from 'react';
import { Link } from 'react-router-dom';


export const Navegacion  = () => {

  const [menuOpen, setMenuOpen] = useState();

  return (
    <>
  
      <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand d-flex align-items-end"
          >
            <i className="fas fa-tooth text-4xl text-primary"></i>
            <span className="text-2xl font-Poppins ms-2">
              Noa Miralles  <span className="text-primary">Dental</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + (menuOpen ? " show" : "")}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                >
                  About Us
                </Link>
                </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/appointment"
                  className="nav-link bg-primary text-white rounded"
                >
                  Get Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  );
};

{/* //   return (
//     <>
//    <NavBar className="" collapseOnSelect expand="lg" variant="dark" bg="dark">
//     <NavBar.Brand as={NavLink} to={routes.home}>
//      Miralles  Dental Care 
//     </NavBar.Brand>
   
//    <NavBar.Toggle aria-controls="responsive-navbar-nav" />
//    <NavBar.Collapse id="responsive-navbar-nav">
//      <Nav className="mr-auto">
//        <Nav.Link as={NavLink} to={routes.appointments}>
//         Appoiments
//        </Nav.Link>
//        <NavDropdown title="Admin">
//          <NavDropdown.Item as={NavLink} to={routes.admin.users}>
//            Usuarios
//          </NavDropdown.Item>
//        </NavDropdown>
//      </Nav>
//      <Nav>
//        <Nav.Link as={NavLink} to={routes.login}>
//          Iniciar Sesión
//        </Nav.Link>
//        <Nav.Link as={NavLink} to={routes.register}>
//          Registrarse
//        </Nav.Link>
//        <Nav.Link as={NavLink} to={routes.account}>
//          Mi cuenta
//        </Nav.Link>
//        <Nav.Link to={routes.account} onClick={logout}>
//          Cerrar Sesión
//        </Nav.Link>
//      </Nav>
//    </NavBar.Collapse>
//  </NavBar>
//  </>
// );
// } */}

