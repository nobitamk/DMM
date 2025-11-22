import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        width: "100%",
        padding: "10px 15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LEFT SIDE: LOGO + NAME */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* LOGO */}
        <img
          src="/logo.jpg"
          alt="Aradya Logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        {/* SHOP NAME */}
        <h2
          style={{
            color: "#8B0000",
            fontWeight: "800",
            margin: 0,
            fontSize: "1.4rem",
            whiteSpace: "nowrap",
          }}
        >
          DMM
        </h2>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: "1.6rem",
          paddingRight: "10px",
        }}
      >
        <span
          onClick={() => navigate("/wishlist")}
          style={{
            cursor: "pointer",
            color: "#8B0000",
            transition: "0.3s",
          }}
        >
          ❤️
        </span>

        <span
          onClick={() => navigate("/cart")}
          style={{
            cursor: "pointer",
            color: "#8B0000",
            transition: "0.3s",
          }}
        >
          🛒
        </span>
      </div>
    </header>
  );
};

export default Header;
