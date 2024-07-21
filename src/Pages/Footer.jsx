import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import WhatsApp and LinkedIn icons
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

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/tharun-raj-726360252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank'); // Replace with your LinkedIn profile URL
  };

  return (
    <div className="footer">
      <p className='p1'>&copy; {new Date().getFullYear()} Tharun Raj</p>
      <p className="p1">{time}</p> {/* Display the current time */}
      <div className="icon-container">
        <FaWhatsapp className="whatsapp-icon" onClick={handleWhatsappClick} />
        <FaLinkedin className="linkedin-icon" onClick={handleLinkedInClick} />
      </div>
    </div>
  );
};

export default Footer;
