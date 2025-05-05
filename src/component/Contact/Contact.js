import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import photo from '../../assests/portfolioimg.jpg';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="Profile_section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="photo-section" variants={itemVariants}>
      <div className="Profile_section">
  <div className="profile">
    <img src={photo} alt="Profile" className="image" />
  </div>

  <div className="details">
    <div className="hire">
      <h3><span className="dot"></span> Available now for work</h3>
    </div>
    <div className="description">
      I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Web Development, UI/UX, and Open Source Development.
    </div>
    <div className="social-media">
      <a href="https://www.linkedin.com/in/rohini-avula-234597267/" className="link link--icon social">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/Roh1121" className="link link--icon social">
        <GitHubIcon />
      </a>
      <a href="mailto:avularohini31@gmail.com" className="link link--icon social">
        <EmailIcon />
      </a>
    </div>
    </div>
  </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
