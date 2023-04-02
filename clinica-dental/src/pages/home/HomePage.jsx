import React from 'react';

import "font-awesome/css/font-awesome.min.css";
import slider_three from "../assets/slider_three.jpg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import './Home.css'

 export const HomePage = () => {
  return (
  
  <section id="home">
   
  <Container fluid>
 
  <Row>
  <Col>
  <div className="slider_container">
  <div className="slider-images">
  <div className="slider_image">
  <img
                     className="w-250"
                     src={slider_three}
                     alt="First slide"
                     data-aos="fade-down"
                   />
  </div>
  <div className="front_container">
                <div className="front_page_info">
                  <h2
                    style={{
                      fontSize: "51px",
                      margin: "0",
                      textAlign: "left",
                      lineHeight: "1.5",
                      color: "#19407b",
                    }}
                  >
                    Cuidamos tu sonrisa
                  </h2>
                  <div className="social_links"></div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    
    </Container>

    <Container>
      <Row>
        <Col>
          <div className="clinic_container">
            <div className="clinic_info">
              <div className="basic_info" id="info_01">
                <h2>Horario flexible</h2>
                <p>
                  Trabajamos en días festivos y también trabajamos hasta tarde en días regulares. En caso de emergencias, aceptamos reservas.
                </p>

                <Link to={"/login"}>
                  <Button variant="primary">Chatear con el doctor</Button>
                </Link>
              </div>
              <div className="basic_info" id="info_02">
                <h2>Mejor precio garantizado</h2>
                <p>
                  Nuestros precios razonables han hecho que miles de personas sonrían con una nueva, hermosa e irresistible sonrisa, como nunca antes.
                </p>
                <Link to={"/register"}>
                  <Button variant="primary">Leer más</Button>
                </Link>
              </div>
              <div className="basic_info" id="info_03">
                <h2>Horario de apertura</h2>
                <p>
                  Lunes a viernes: 10.00 a.m. - 10.00 p.m. 
                </p>

                <Link to={"/UserAppointment"}>
                  <Button variant="primary">Reservar cita</Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
     </Container>
  </section>

  )};


