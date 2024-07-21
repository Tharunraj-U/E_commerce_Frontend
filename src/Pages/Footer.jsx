import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import '../Styles/Footer.css';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Clean up interval on component unmount
  }, []);

  const handleWhatsappClick = () => {
    window.open('https://wa.me/7010791192', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div className="footer">
      <p className='p1'>&copy; {new Date().getFullYear()} Tharun Raj </p>
      <p className="p1">{time}</p> {/* Display the current time */}
      <FaWhatsapp className="whatsapp-icon" onClick={handleWhatsappClick} />
    </div>
  );
};

export default Footer;
