import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: "#fff7f5",
        color: "#5a1a1a",
        animation: "fadeIn 0.6s ease",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
          padding: "20px 10px",
        }}
      >
        <h1
          style={{
            color: "#8B0000",
            fontSize: "2rem",
            fontWeight: "900",
            marginBottom: "10px",
          }}
        >
          Our Journey of Trust & Tradition
        </h1>
        <p
          style={{
            fontSize: "16px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          From a humble beginning on social media to becoming one of the most
          trusted Dharmavaram silk saree brands in India.
        </p>
      </div>

      {/* BRAND STORY */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          marginBottom: "25px",
          animation: "slideUp 0.7s ease",
        }}
      >
        <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "16px" }}>
          DMM Sarees began its journey in the most modern way possible —
          **through the power of social media**. With just a phone camera, pure
          passion, and the authenticity of Dharmavaram craftsmanship, we started
          sharing our sarees online. What began as a small initiative quickly
          turned into something much bigger.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "16px" }}>
          Our customers started growing rapidly, and soon, we were **shipping
          sarees to every corner of India** — Hyderabad, Bangalore, Chennai,
          Mumbai, Delhi, Kolkata, Kochi, Ahmedabad… the list kept growing. The
          trust we earned became our backbone.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.7", marginBottom: "16px" }}>
          As word spread, our sarees crossed borders. Today, DMM Sarees proudly
          delivers to **America, Canada, UK, Australia, Dubai, and many more
          places overseas**. Each parcel we send carries the rich heritage of
          Dharmavaram silk — woven by skilled artisans with decades of
          experience.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          After years of building trust online and worldwide, we achieved a
          milestone that means everything to us — **opening our own official
          store in Dharmavaram**, the heart of India’s pure silk heritage. Today,
          with the launch of our online store, we take one more step towards
          connecting tradition with technology.
        </p>
      </div>

      {/* HIGHLIGHTS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "15px",
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "18px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            animation: "pop 0.7s ease",
          }}
        >
          <h3 style={{ color: "#8B0000", marginBottom: "6px" }}>5000+ Sarees</h3>
          <p style={{ fontSize: "14px" }}>Delivered across India</p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "18px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            animation: "pop 0.9s ease",
          }}
        >
          <h3 style={{ color: "#8B0000", marginBottom: "6px" }}>Worldwide Reach</h3>
          <p style={{ fontSize: "14px" }}>USA, UK, Dubai & more</p>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "18px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            animation: "pop 1.1s ease",
          }}
        >
          <h3 style={{ color: "#8B0000", marginBottom: "6px" }}>Dharmavaram Store</h3>
          <p style={{ fontSize: "14px" }}>Newly launched showroom</p>
        </div>

        {/* CARD 4 */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "18px",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            animation: "pop 1.3s ease",
          }}
        >
          <h3 style={{ color: "#8B0000", marginBottom: "6px" }}>Pure Silk Craft</h3>
          <p style={{ fontSize: "14px" }}>Handwoven by local artisans</p>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pop {
            from { opacity: 0; transform: scale(0.92); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default About;
