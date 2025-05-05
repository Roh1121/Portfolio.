// Home.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../About/About.js';
import Skills from '../Skills/Skills.js';
import Projects from '../Projects/Projects.js';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
};

export default Home;
