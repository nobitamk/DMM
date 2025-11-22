import React from "react";

const Section3 = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",

        // 🟡 Your HD Background Image
        backgroundImage:
          "url('/mama.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🟡 LUXURY GOLD AURA */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,220,150,0.25) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* 🟣 CINEMATIC VIGNETTE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* 🔥 WARM GRADIENT OVERLAY FOR DEPTH */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255, 245, 230, 0.4), rgba(255,255,255,0) 40%, rgba(0,0,0,0.25))",
          pointerEvents: "none",
        }}
      />

      {/* TEXT CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "100px 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            textShadow: "0 4px 12px rgba(0,0,0,0.7)",
          }}
        >
          Celebrating the Beauty of Tradition
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "10px",
            lineHeight: "1.6",
            maxWidth: "650px",
            margin: "auto",
            textShadow: "0 3px 10px rgba(0,0,0,0.8)",
          }}
        >
          Every saree tells a story — woven with devotion, grace, and the
          timeless charm of Dharmavaram craftsmanship.
        </p>
      </div>
    </section>
  );
};

export default Section3;
