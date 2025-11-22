import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
minHeight: "100vh",
height: "auto",
        backgroundImage: "url('/kk.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "12px 20px",
          borderRadius: "10px",
          maxWidth: "90%",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#8B0000",
            marginBottom: "8px",
          }}
        >
          Dharmavaram Silk Sarees
        </h1>

        <p
          style={{
            fontSize: "1rem",
            marginBottom: "16px",
            color: "#B22222",
          }}
        >
          Timeless Elegance • Pure Handloom Luxury
        </p>

        {/* SHOP BUTTON */}
        <button
          onClick={() => navigate("/sarees")} // ← change this to your route
          style={{
            padding: "12px 28px",
            background: "#8B0000",
            color: "white",
            border: "none",
            borderRadius: "30px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#a00000")}
          onMouseOut={(e) => (e.target.style.background = "#8B0000")}
        >
          Shop Sarees
        </button>
      </div>
    </section>
  );
};

export default Hero;
