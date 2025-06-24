import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: IndieRise Logo */}
        <div className="flex justify-center">
          <img
            src="/MainLogo(W).png"
            alt="IndieRise Logo"
            className="w-[120px] h-auto"
          />
        </div>

        {/* Right: CTA Text */}
 <div className="text-center md:text-left">
  <h2 className="text-3xl md:text-4xl font-semibold mb-4">
    Let’s Build the Future <br className="hidden md:block" />
    of Cinema Together.
  </h2>

  <p className="text-gray-400 mb-8">
    Whether you're a director, educator, or technologist — IndieRise is built for you.
  </p>

  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
    <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
      GET A DEMO
    </button>
    <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
      TALK TO OUR TEAM
    </button>
  </div>

  {/* LinkedIn */}
  <div className="bg-neutral-800 w-full max-w-sm mx-auto md:mx-0 text-center py-2 rounded">
    <a
      href="https://www.linkedin.com/company/indierise"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 text-gray-300 tracking-wider hover:text-blue-400 transition"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        className="w-5 h-5"
      />
      Connect with us on LinkedIn
    </a>
  </div>

  {/* Instagram */}
  <div className="bg-neutral-800 w-full max-w-sm mx-auto md:mx-0 text-center py-2 rounded mt-[7px]">
    <a
      href="https://www.instagram.com/theindierise?igsh=MWk5ZWg1ejg1M245cw=="
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 text-gray-300 tracking-wider hover:text-pink-400 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        className="w-5 h-5 rounded"
      />
      Visit Instagram
    </a>
  </div>
</div>

      </div>
    </section>  
  );
}
