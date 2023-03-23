import React from 'react';

import "font-awesome/css/font-awesome.min.css";
import slider_one from "../assets/slider_one.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

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
                     className="w-100"
                     src={slider_one}
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
                      lineHeight: "1.2",
                      color: "hsl(218, 70%, 18%)",
                    }}
                  >
                    Cuidamos tu sonrisa
                  </h2>
                  <p>
                    Creemos que todos deberían tener fácil acceso a una gran
                    clínica dental
                  </p>
                  <div className="social_links"></div>
                </div>
                <div className="slider_controls">
                  <div className="circle_dot_class">
                    <span></span>
                  </div>
                  <div className="circle_dot_class">
                    <span></span>
                  </div>
                  <div className="circle_dot_class">
                    <span></span>
                  </div>
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

                <Link to={"/register"}>
                  <Button variant="primary">Chatear con el doctor</Button>
                </Link>
              </div>
              <div className="basic_info" id="info_02">
                <h2>Mejor precio garantizado</h2>
                <p>
                  Nuestros precios razonables han hecho que miles de personas sonrían con una nueva, hermosa e irresistible sonrisa, como nunca antes.
                </p>
                <Link to={"/contact-us"}>
                  <Button variant="primary">Leer más</Button>
                </Link>
              </div>
              <div className="basic_info" id="info_03">
                <h2>Horario de apertura</h2>
                <p>
                  Lunes a viernes: 10.00 a.m. - 10.00 p.m. 
                </p>

                <Link to={"/dental-clinic/slot"}>
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


