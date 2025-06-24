import React, { useState } from 'react';
import './TrustedBy.css';

const clients = [
  {
    name: 'Adarsh Telemedia',
    logo: '../assets/adarsh.png',
    description: 'A leading media production company known for commercial hits.',
  },
  {
    name: 'Arachnid',
    logo: '/assets/arachnoid.png',
    description: 'An innovative tech firm pushing creative boundaries.',
  },
  {
    name: 'Arttism',
    logo: '/assets/arttism.jpg',
    description: 'A space for inclusive artistic expression and collaboration.',
  },
  {
    name: 'BCST',
    logo: '/assets/bcst.png',
    description: 'Bihar-based cultural and science promotion trust.',
  },
  {
    name: 'Govt of Bihar',
    logo: '/assets/govt_bihar.png',
    description: 'State government supporting art, film, and innovation.',
  },
  {
    name: 'Jadavpur University',
    logo: '/assets/jadavpur.png',
    description: 'Prestigious institution contributing to research and media.',
  },
  {
    name: 'Tathastu Art Work',
    logo: '/assets/Tathastu_Art_Work.png',
    description: 'Art collective focused on installations and design.',
  },
  {
    name: 'Ministry of Culture',
    logo: '/assets/ministry.png',
    description: 'Central body promoting heritage, culture, and creative arts.',
  },
  {
    name: 'NCSM',
    logo: '/assets/ncsm.png',
    description: 'National Council of Science Museums in India.',
  },
  {
    name: 'Non Stop Entertainment',
    logo: '/assets/nonstop_ent.png',
    description: 'Producers of large-scale entertainment experiences.',
  },
  {
    name: 'Non Stop Music',
    logo: '/assets/nonstop_music.png',
    description: 'Music label known for innovative soundscapes.',
  },
];

export default function TrustedBy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const duplicatedClients = [...clients, ...clients]; // for infinite loop

  return (
    <section className="trusted-by-section">
      <h2 className="trusted-by-heading">Trusted by</h2>
      <div className="trusted-by-slider">
        <div className="trusted-by-track">
          {duplicatedClients.map((client, index) => (
            <div className="trusted-by-wrapper" key={index}>
              <div
                className={`trusted-by-logo ${activeIndex === index ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={client.logo} alt={client.name} />
                <span>{client.name}</span>
                {activeIndex === index && (
                  <div className="logo-description">
                    <p>{client.description}</p>
                    <span className="read-more">...</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
