
import React from "react";
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";


 const contact_link = [
  {
    index: 1,
    icon: <FaFacebook />,
    on_link: "https://www.facebook.com/",
  },
  {
    index: 2,
    icon: <FaInstagram />,
    on_link: "https://www.instagram.com/",
  },
  {
    index: 3,
    icon: <FaTwitter />,
    on_link: "https://www.twitter.com/",
  },
];

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="about_us">
        <div className="wrapper_container_ab">
          <h2>Sobre Nosotros</h2>
          <p data-aos="fade-right">
            Somos una clínica dental comprometida con la salud y el bienestar
            de nuestros pacientes. Nuestra misión es ofrecer una atención de
            alta calidad y un trato cercano y personalizado para que nuestros
            pacientes se sientan cómodos y seguros durante su visita.
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="wrapper_container_contact">
          <h2>Contacto</h2>
          <ul>
            <li>
              <a href="tel:123-456-7890">
                <FaPhoneAlt /> 123-456-7890
              </a>
            </li>
            <li>
              <a href="mailto:info@dentalclinic.com">
                <FaEnvelope /> info@dentalclinic.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="follow_us">
        <div className="wrapper_container_fu">
          <h2>Síguenos</h2>
          <ul>
            {contact_link.map((contact) => (
              <li key={contact.index}>
                <a href={contact.on_link} target="_blank" rel="noreferrer">
                  {contact.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-bottom text-center">
            <p className="text-xs-center mb-0">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
      </div>
    </div>
  );
};
