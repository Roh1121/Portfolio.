import React from 'react';
import uniqid from 'uniqid';
import './Certificate.css';
import { certificates } from '../../portfolio';

const Certificate = () => {
  return (
    <div className='section certificate' id="certificates">
      <h2 className='section__title'>Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate) => (
          <div
            className="certificate-item"
            key={uniqid()}
            onClick={() => window.open(certificate.link, "_blank")}
          >
            <img src={certificate.image} alt={certificate.name} width="180" height="180" className="certificate-image" />
            <div className="content-details">
              <h3 className="content-title">{certificate.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
