import React, { useState } from 'react';

const projects = [
  {
    title: 'Dispersion 2025 Cannes',
    imageSrc: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: "Dominic's Purse",
    imageSrc: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Volatile',
    highlight: true,
    description: `Tired of same repeated concepts about overpowered massy hero kinda stories...
Try something new. Try something unique.
Try something VOLATILE!

12 stories. 12 realities. One volatile truth!
An AI-animated anthology series produced by IndieRise Research Labs, written and directed by 5 emerging filmmakers.

"Is Artificial Intelligence truly VOLATILE?"

Coming soon... 🎬`,
    videoSrc: '/AnnouncementTeaserFinalCut.mp4',
    imageSrc: null,
  },
  {
    title: 'Project X',
    imageSrc: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Upcoming Film 1',
    imageSrc: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Upcoming Film 2',
    imageSrc: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isVolatileHovered, setIsVolatileHovered] = useState(false);
  const [isPaused, setIsPaused] = useState([false, false, false]);

  const handleCardClick = (project) => {
    if (project.videoSrc) {
      setActiveProject(project);
      setShowModal(true);
    }
  };

  const handleMouseEnter = (colIndex, project) => {
    if (project.title === 'Volatile') {
      setIsVolatileHovered(true);
    }
    setIsPaused((prev) => {
      const newPaused = [...prev];
      newPaused[colIndex] = true;
      return newPaused;
    });
  };

  const handleMouseLeave = (colIndex, project) => {
    if (project.title === 'Volatile') {
      setIsVolatileHovered(false);
    }
    setIsPaused((prev) => {
      const newPaused = [...prev];
      newPaused[colIndex] = false;
      return newPaused;
    });
  };

  if (!projects.length) {
    return <div className="text-center text-white">No projects available</div>;
  }

  const loopedProjects = [...projects, ...projects, ...projects];
  const cardHeight = 320;
  const cardMargin = 8;
  const visibleCards = 3;
  const containerHeight = visibleCards * (cardHeight + cardMargin); // 984px previously → now ~984 to ~1000 → will reduce

  return (
    <section className="bg-black py-20 px-6 text-white relative min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-12">Stories We've Brought to Life</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="relative overflow-hidden" style={{ height: '600px' }}>
            <div
              className="absolute top-0 left-0 w-full flex flex-col transition-transform duration-300 ease-out"
              style={{
                animation: `scroll-${colIndex % 2 === 0 ? 'up' : 'down'} 15s linear infinite`,
                animationDelay: `${colIndex}s`,
                animationPlayState: isPaused[colIndex] ? 'paused' : 'running',
              }}
            >
              {loopedProjects.map((project, index) => (
                <div
                  key={`${colIndex}-${index}`}
                  onClick={() => handleCardClick(project)}
                  onMouseEnter={() => handleMouseEnter(colIndex, project)}
                  onMouseLeave={() => handleMouseLeave(colIndex, project)}
                  className={`cursor-pointer transition duration-300 rounded-xl overflow-hidden w-[180px] h-[320px] flex items-center justify-center text-center text-lg relative
                    bg-neutral-900 border ${project.highlight ? 'border-[#4DD0E1] font-semibold' : 'border-gray-700'} text-white
                    hover:scale-105 hover:border-[#4DD0E1] hover:z-10 mb-2 mx-auto
                    ${project.title === 'Volatile' ? 'p-0' : ''}`}
                >
                  {project.title === 'Volatile' && isVolatileHovered ? (
                    <video
                      src={project.videoSrc}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      onError={() => console.error('Projects: Video failed to load')}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      {project.imageSrc && (
                        <>
                          <img
                            src={project.imageSrc}
                            alt={project.title}
                            className="w-full h-full object-cover absolute inset-0"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/180x320';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/50"></div>
                        </>
                      )}
                      <div className="p-4 w-full h-full flex items-center justify-center relative z-10">
                        {project.title}
                        {project.highlight && <span className="ml-2 text-xl text-[#4DD0E1]">▶</span>}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative w-[90%] md:w-[65%] max-h-[85vh] bg-black rounded-xl overflow-hidden shadow-xl p-4">
            <video
              src={activeProject.videoSrc}
              controls
              autoPlay
              className="w-full rounded-lg mb-4"
              onError={() => console.error('Projects: Modal video failed to load')}
            />
            <div className="text-left whitespace-pre-line text-sm sm:text-base text-gray-300">
              {activeProject.description}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(-${projects.length * 200}px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-${projects.length * 328}px);
          }
        }
      `}</style>
    </section>
  );
}
