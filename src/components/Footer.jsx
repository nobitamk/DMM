import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: #0d0d0d; /* Matches website theme */
          padding: 15px 15px; /* 🔥 Reduced padding */
          color: #f7eaff;
          text-align: center;
          border-top: 1px solid gold; /* Thinner border */
          width: 100%;
        }

        .footer h2 {
          color: gold;
          font-size: 1.3rem; /* 🔥 Smaller title */
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 6px; /* 🔥 Reduced spacing */
        }

        .footer p {
          margin: 2px 0; /* 🔥 Much smaller spacing */
          opacity: 0.8;
          font-size: 0.85rem; /* 🔥 Smaller text */
        }

        .footer-location p {
          margin: 2px 0; 
          opacity: 0.75;
          color: #ffdf9d;
          font-weight: 500;
        }

        .footer-social {
          margin-top: 8px; /* 🔥 Smaller gap */
          display: flex;
          justify-content: center;
          gap: 12px; /* 🔥 Tight spacing */
        }

        .footer-social span {
          font-size: 1.3rem; /* 🔥 Smaller icons */
          cursor: pointer;
          color: gold;
          transition: 0.3s;
        }

        .footer-social span:hover {
          transform: scale(1.15);
        }

        .footer-bottom {
          margin-top: 8px;
          font-size: 0.7rem; /* 🔥 Smaller */
          opacity: 0.5;
        }

        /* MOBILE — keep it very compact */
        @media (max-width: 768px) {
          .footer {
            padding: 12px 12px;
          }

          .footer h2 {
            font-size: 1.2rem;
          }

          .footer p, .footer-location p {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <footer className="footer">
        <h2>Dharmavaram Silks</h2>

        <div className="footer-location">
          <p>Near Annapurneshwari Temple</p>
          <p>Mamillapalli Road, Dharmavaram</p>
        </div>

        <div className="footer-social">
          <span>📸</span>
          <span>📘</span>
          <span>💬</span>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Dharmavaram Silks
        </p>
      </footer>
    </>
  );
};

export default Footer;
