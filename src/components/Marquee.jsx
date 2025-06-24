import React from 'react';

const logos = [
  { name: 'Saregama', src: '/assets/saregama.png' },
  { name: 'Reliance', src: '/assets/reliance.png' },
  { name: 'Excel Ent.', src: '/assets/excel.png' },
  { name: 'Red Chillies', src: '/assets/redchillies.png' },
  { name: 'WAVES Summit', src: '/assets/waves.png' },
  { name: 'Dalip Tahil', src: '/assets/dalip.png' },
  { name: 'Kalees', src: '/assets/kalees.png' },
  { name: 'Incube8', src: '/assets/incube8.png' },
  { name: 'Adarsh Telemedia', src: '/assets/adarsh.png' },
];

export default function Marquee() {
  return (
    <section className="bg-black py-12 text-white">
      <div className="flex overflow-x-auto scrollbar-hide px-6 space-x-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="min-w-[100px] h-[60px] grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
