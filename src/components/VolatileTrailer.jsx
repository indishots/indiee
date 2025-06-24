import React, { useState } from 'react';

export default function VolatileTrailer() {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
     

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative w-[90%] max-w-[900px] aspect-video">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-80 z-10"
            >
              ✕
            </button>
            <video
              src="/AnnouncementTeaserFinalCut.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-xl border border-white shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
