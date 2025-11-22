import React from "react";

const Footer = () => {
  const openGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/w6m3zpTAP29cbfuw7", "_blank");
  };

  return (
    <>
      <style>{`
        .footer {
          background: #0d0d0d;
          padding: 20px 15px;
          color: #f7eaff;
          border-top: 1px solid gold;
          width: 100%;
        }

        /* TEXT AREA */
        .footer-left {
          text-align: center;
        }

        .footer-left h2 {
          color: gold;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .footer-left p {
          margin: 2px 0;
          font-size: 0.95rem;
          opacity: 0.85;
        }

        /* SOCIAL ICONS */
        .footer-social {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .footer-social svg {
          width: 22px;
          height: 22px;
          cursor: pointer;
          stroke: gold;
          transition: 0.3s;
        }

        .footer-social svg:hover {
          transform: scale(1.2);
        }

        /* SLIM MAP */
        .footer-map {
          width: 100%;
          height: 150px;        /* perfect slim height */
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid gold;
          cursor: pointer;
          margin-top: 16px;
        }

        @media (min-width: 768px) {
          .footer-map {
            height: 180px;      /* larger on PC */
          }
        }

        /* COPYRIGHT */
        .footer-bottom {
          margin-top: 15px;
          text-align: center;
          opacity: 0.5;
          font-size: 0.75rem;
        }
      `}</style>

      <footer className="footer">

        {/* TEXT SECTION */}
        <div className="footer-left">
          <h2>DMM Silks</h2>
          <p>Pure Dharmavaram Handloom Collection</p>
          <p>Trusted by NRI & Indian Customers</p>

          <div className="footer-social">
            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="gold" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="18" cy="6" r="1.2"></circle>
            </svg>

            {/* Facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="gold" viewBox="0 0 24 24">
              <path d="M18 2h-3c-2 0-4 2-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6c0-.6.4-1 1-1h3V2z"></path>
            </svg>

            {/* WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="2" stroke="gold" viewBox="0 0 24 24">
              <path d="M20 12a8 8 0 1 1-14.3 5.1L4 22l4.9-1.6A8 8 0 0 1 20 12z"></path>
              <path d="M8 10s.3 1.4 1 2 2 1.5 2 1.5"></path>
            </svg>
          </div>
        </div>

        {/* FINAL PERFECT MAP */}
        <div
          className="footer-map"
          onDoubleClick={openGoogleMaps}
          title="Double-tap to open Google Maps"
        >
          <iframe
            title="DMM Silks Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.091728642321!2d77.71387000000001!3d14.413950000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!3m3!1m2!1s0x3bb2be051daeb061%3A0x2cbfb2dc3d67ee2e!2sAnnapurneshwari%20Temple%2C%20Mamillapalli%20Road%2C%20Dharmavaram!5e0!3m2!1sen!2sin!4v1710009999999"

          ></iframe>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} DMM Silks — All Rights Reserved
        </p>

      </footer>
    </>
  );
};

export default Footer;
