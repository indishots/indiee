import React from 'react';
 

import './WhatWeDo.css'; // Make sure to create and import the CSS file

const services = [
  { title: 'IndieShots', icon: 'assets/IND.png' },
  { title: 'AI Avatars & Motion Capture', icon: 'assets/AIavatar.png' },
  { title: 'Foundational Models & VFX', icon: 'assets/VFX.png'  },
  { title: 'Creative Education & Labs', icon: 'assets/CEL.png'  },
];

export default function WhatWeDo() {
  return (
    <section className="fancy-section-what-we-do">
      {/* Animated Aurora Background Elements */}
      <div className="aurora-bg">
        <div className="aurora-dot aurora-dot-1"></div>
        <div className="aurora-dot aurora-dot-2"></div>
        <div className="aurora-dot aurora-dot-3"></div>
      </div>
      
      <div className="content-wrapper">
        <h2 className="fancy-heading">What We Do</h2>
        <p className="fancy-subheading">
          Empowering the future of filmmaking with intelligent tools and creative workflows
        </p>

        <div className="fancy-card-interaction-wrapper">
          {/* The central trigger element */}
          <div className="fancy-card-hover-trigger">
            {/* 2. Replaced the emoji with your imported logo image */}
             <img 
              src="assets/SpinnerLogo.png" 
              alt="Interactive trigger icon" 
              className="trigger-icon" 
            />

          </div>

          {/* Dynamically generated service cards */}
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`fancy-service-card card-${index + 1}`}
            >
              <div className="card-content">
                <div className="fancy-card-icon">
                    <img src={service.icon} alt={service.title} className="service-icon-img" />
                </div>
                <h3 className="fancy-card-title">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}