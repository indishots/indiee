import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Projects from './components/Projects';
import Marquee from './components/Marquee';
import CallToAction from './components/CallToAction';
import VolatileTrailer from './components/VolatileTrailer';
import LiquidBackground from './components/LiquidBackground';
import TrustedBy from './components/TrustedBy'; // ✅ new import
import Footer from './components/Footer'; // adjust path as needed

function App() {
  return (
    <>
      <LiquidBackground />
      <div className="relative z-10 min-h-screen bg-transparent text-white font-sans">
        <Hero />
        <WhatWeDo />
        <Projects />
        <VolatileTrailer />
        <TrustedBy /> {/* ✅ new component added here */}
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default App;
