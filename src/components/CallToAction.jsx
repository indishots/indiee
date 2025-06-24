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
            draggable="false"
          />
        </div>

        {/* Right: CTA Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            <span className="text-indigo-500">
              Let’s Build the Future
            </span>{' '}
            <br className="hidden md:block" />
            of Cinema Together.
          </h2>

          <p className="text-gray-400 mb-8 text-lg">
            Whether you're a director, educator, or technologist — IndieRise is built for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <button className="flex items-center gap-2 border border-white px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition">
              Get a Demo
            </button>
            <button className="flex items-center gap-2 border border-white px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition">
              Talk To Our Team
            </button>
          </div>

          {/* Connect with us text and social icons */}
          <div className="mt-8 text-center md:text-left">
            <p className="text-white text-sm mb-3">Connect with us</p>
            <div className="flex justify-center md:justify-start gap-6">
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/indierise"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer transition-transform hover:scale-110 inline-flex"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 cursor-pointer"
                  draggable="false"
                />
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/theindierise?igsh=MWk5ZWg1ejg1M245cw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="cursor-pointer transition-transform hover:scale-110 inline-flex"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6 rounded cursor-pointer"
                  draggable="false"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
