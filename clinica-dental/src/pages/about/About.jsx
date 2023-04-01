import React from "react";
import "./About.css"
import about_img from "../../common/images/about_img.webp";
// import { Link } from "react-router-dom";
// import about_long_des_data from "./PagesData/AboutData";
const About = () => {
  return (
    <>
      <div>
        <div className="about_section_container">
     
          <div className="about_container">
            <div className="about_infos">
              <p className="about_descrp">
              ¡Bienvenidos a Noa Miralles Dental Care! Somos una clínica dental comprometida con brindar la mejor atención médica a nuestros pacientes. Nos enfocamos en un servicio orientado al cliente para hacer que su experiencia en la clínica sea cómoda y relajante. Creemos que visitar al dentista no debería ser una experiencia aterradora o estresante, por lo que ofrecemos opciones de manejo del dolor y anestesia para asegurarnos de que nuestros pacientes se sientan seguros y cómodos durante sus tratamientos. Nuestro equipo de profesionales altamente capacitados está aquí para atender todas sus necesidades dentales, desde limpiezas y exámenes hasta tratamientos de ortodoncia y odontología cosmética.
 ¡Gracias por elegir Noa Miralles Dental Care como su proveedor de atención dental!
              </p>
            </div>
            <div className="about_image">
              <img src={about_img} alt="about img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;