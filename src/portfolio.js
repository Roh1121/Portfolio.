
import html from './assests/html.png'
import css from './assests/css-3.png'
import js from './assests/js.png'
import rea from './assests/atom.png'
import boot from './assests/bootstrap.png'
import node from './assests/node.png'
import express from './assests/Express.png'
import mongo from './assests/mongodb.png'
import postman from './assests/postman.png'
import firebase from './assests/firebase.png'
import gh from './assests/code.png'
import socket from './assests/Socket.io.png'
import sql from './assests/sql.png'
import AWS from './assests/AWS.png'
import AndroidDeveloper from './assests/Android developer.png'
import FullStack from './assests/Full Stack.png'
import GenerativeAI from './assests/Generative AI.png'
import LLM from './assests/LLM.png'
import MERNFULLSTACK from './assests/Web full stack.png'
import Profile from './assests/portfolioimg.jpg'
const header = {
    homepage: '/',
    title: 'Portfolio.',
  }
  
  const about = {
    
    name: 'Rohini Avula',
    role: 'Full Stack Developer',
    description:
      "As a Junior Full Stack Developer, I have strong skills in HTML, CSS, JavaScript, React, Bootstrap, and more. I love creating interactive websites and I'm focused on becoming an expert in React. I'm excited to work on real projects and want to build solutions that improve user experiences.",
    social: {
      linkedin: 'https://www.linkedin.com/in/rohini-avula-234597267/',
      github: 'https://github.com/Roh1121',
    },
  }
  
  const projects = [
   
    {
      name: 'Task Manager',
      description:
        "A MERN stack Task Manager App with features like task creation, progress tracking, team collaboration, and automated status updates. It offers a responsive UI, file attachments, and downloadable task reports for streamlined productivity.",
      stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      
    },
    {
      name: 'F2M - Direct Market Platform',
      description:
        'F2M is a web platform that connects farmers and vendors to facilitate direct buying and selling of agricultural products. This helps eliminate middlemen, ensuring fair prices for farmers and affordable rates for buyers.',
      stack: ['Node.js', 'Firebase', 'React.js', 'Bootstrap'],
    },
    {
      name: 'Sorting Visualizer',
      description:
        "Sorting Visualizer is a web application that visualizes sorting algorithms, displays step-by-step color-coded progress, and offers controls for speed, data size, and random data generation.",
      stack: ['React','Javascript','Css'],
    },
    {
      name: 'Chat Application',
      description:
        "Developed real-time chat application with React.js in the front end and Node.js + Socket.io in the backend. Established bi-directional communication for seamless real-time messaging.",
      stack: ['React.JS', 'Socket.io', 'CSS','Node.js'],
    },
    
    
  ]
  
  const skills = [
    `${html}`,
    `${css}`,
    `${js}`,
    `${boot}`, // or `${tailwind}`
    `${rea}`,
    `${node}`,
    `${express}`,
    `${mongo}`, // or `${sql}` if using MySQL
    `${gh}`,
    `${postman}`,
    `${socket}`,
    `${sql}`,
    `${firebase}`, // or `${vercel}` or `${netlify}`
  ];
  
  
  const contact = {
    email: 'avularohini31@gmail.com',
  }
  const certificates = [
    {
      name: 'GenerativeAI',
      link: 'https://www.cloudskillsboost.google/public_profiles/7f9d6df7-d326-41c2-b128-aeeca1ee89d5/badges/11368393',
      image: GenerativeAI,
    },
    {
      name: 'AWS Cloud',
      link: 'https://drive.google.com/file/d/1RO_p_NLBL90IM6yHEl-GrlDnSQpK3Gp0/view?usp=sharing',
      image: AWS,
    },
    {
      name: 'LLM',
      link: 'https://www.cloudskillsboost.google/public_profiles/7f9d6df7-d326-41c2-b128-aeeca1ee89d5/badges/11369710',
      image: LLM,
    },
    {
      name: 'Android Developer',
      link: 'https://drive.google.com/file/d/154DhXoIKyBMUJ7G2ZmHewahxOmwHOmFZ/view?usp=sharing',
      image: AndroidDeveloper,
    },
    {
      name: 'MERN FULL STACK',
      link: 'https://drive.google.com/file/d/1mmqM8MZE2uPwdo7_BntKyIkSq3Lko0DI/view?usp=sharing',
      image: MERNFULLSTACK,
    },
    {
      name: 'FULL STACK',
      link: 'https://www.udemy.com/certificate/UC-6d6d3446-fca2-4ed2-8c25-1c877fd73699/',
      image: FullStack,
    },
  ]
  
  
  export { header, about, projects, skills, contact,certificates,Profile}