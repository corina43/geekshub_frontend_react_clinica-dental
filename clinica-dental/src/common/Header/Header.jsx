import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo_img from "../images/logo.png";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userData, userout } from '../../containers/User/userSlice';
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = () => {
const dataRdx = useSelector(userData);
const dispatch = useDispatch();
const navigate = useNavigate()
  const logout = () => {
    // localStorage.setItem("token", JSON.stringify(null));
    dispatch(userout({ credentials: {}, token: '' }));
    return navigate("/");
  };
  console.log(dataRdx.credentials)
  return (
    <>
    <Navbar expand="lg" className='navBar'>
    <Navbar.Brand as={Link} to={'/home'} className='titleNavBar'> <span><img className='img'  src={logo_img} alt="dental clinic logo" /></span>Noa Miralles Dental Care</Navbar.Brand>
        <div className='navbar'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {dataRdx?.credentials?.usuario?.roleId === 3 ? ( 

                    <>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/patient'>Profile</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                    <Nav.Link as={Link} to='/AppointmentPatient'>Tus citas</Nav.Link>
                    <Nav.Link as={Link} to='/user'>Crear cita</Nav.Link>
                    <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                    <Nav.Link as={Link} to='/createpatient'>Crear paciente</Nav.Link>
                    </>
                    ) : dataRdx?.credentials?.usuario?.roleId === 1 ? (
                    <>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/patient'>Profile</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                    <Nav.Link as={Link} to='/user'>Crear citas</Nav.Link>
                    <Nav.Link as={Link} to='/appointmentDoctor'>Citas</Nav.Link>
                    <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                    </>
                    ) : dataRdx?.credentials?.usuario?.roleId === 2 ? (
                    <>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/patient'>Profile</Nav.Link>
                    <Nav.Link as={Link} to='/admin'>Usuarios</Nav.Link>
                    <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                    <Nav.Link as={Link} to='/' onClick={() => logout()}>Logout</Nav.Link>
                    </>
                    ) :  (
                    <>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
    </>
    )
}





