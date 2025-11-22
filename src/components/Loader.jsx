import React, { useEffect, useState } from "react";

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .loader-screen {
          position: fixed;
          inset: 0;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.7s ease-out;
        }

        .loader-screen.fadeOut {
          opacity: 0;
          pointer-events: none;
        }

        /* Rotating Ring */
        .loader-ring {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 6px solid #e5e5e5;
          border-top-color: #8B0000;
          animation: spin 1.2s linear infinite;
          position: absolute;
        }

        /* Static Logo */
        .loader-logo {
          width: 115px;
          height: 115px;
          border-radius: 50%;
          object-fit: cover;
          position: absolute;
        }

        @keyframes spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className={`loader-screen ${hide ? "fadeOut" : ""}`}>
        
        {/* Rotating Circle */}
        <div className="loader-ring"></div>

        {/* Static Logo */}
        <img src="/logo.jpg" alt="logo" className="loader-logo" />

      </div>
    </>
  );
};

export default Loader;
