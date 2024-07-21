// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css'; // Create a CSS file for styling if needed

const Footer = () => {
  const whatsappLink = 'https://wa.me/7010791192'; // Replace with your WhatsApp link

  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Tharun. All rights reserved.</p>
      <a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
      </a>
    </footer>
  );
};

export default Footer;
