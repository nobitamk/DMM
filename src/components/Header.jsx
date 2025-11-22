import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ⭐ Wishlist count from localStorage
  const [wishlistCount, setWishlistCount] = useState(0);

  // Listen for screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ⭐ Listen for wishlist updates
  useEffect(() => {
    const updateWishlist = () => {
      const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistCount(saved.length);
    };

    // Update on load
    updateWishlist();

    // Update when Sales.jsx dispatches event
    window.addEventListener("wishlist-updated", updateWishlist);

    return () => window.removeEventListener("wishlist-updated", updateWishlist);
  }, []);

  const handleNav = (path) => {
    navigate(path);
    if (isMobile) setOpen(false);
  };

  return (
    <>
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
        {/* LEFT: LOGO + NAME */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.jpg"
            alt="logo"
            onClick={() => isMobile && setOpen(!open)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: isMobile ? "pointer" : "default",
            }}
          />

          <h2
            style={{
              color: "#8B0000",
              fontWeight: "800",
              margin: 0,
              fontSize: "1.4rem",
            }}
          >
            DMM
          </h2>
        </div>

        {/* RIGHT: CLEAN AMAZON/FLIPKART STYLE ICONS */}
        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            paddingRight: "10px",
          }}
        >
          {/* ❤️ Wishlist with count */}
          <div style={{ position: "relative" }}>
            <svg
              onClick={() => navigate("/wishlist")}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#8B0000"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ width: "26px", height: "26px", cursor: "pointer" }}
            >
              <path d="M12 21s-6.7-4.6-9.3-8.5C-1 8 2.1 3 6.8 3c2.1 0 3.8 1.3 5.2 3 1.4-1.7 3.1-3 5.2-3 4.7 0 7.8 5 4.1 9.5C18.7 16.4 12 21 12 21z"/>
            </svg>

            {wishlistCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-8px",
                  background: "red",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: "700",
                  borderRadius: "50%",
                  padding: "2px 6px",
                }}
              >
                {wishlistCount}
              </span>
            )}
          </div>

          {/* 🛒 Cart */}
          <svg
            onClick={() => navigate("/cart")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#8B0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            style={{ width: "26px", height: "26px", cursor: "pointer" }}
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l3.6 9.6a2 2 0 0 0 2 1.4h9.3a2 2 0 0 0 2-1.7L23 6H6" />
          </svg>
        </div>
      </header>

      {/* DESKTOP NAVIGATION */}
      {!isMobile && (
        <div
          style={{
            width: "100%",
            background: "#fff",
            padding: "15px 25px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            display: "flex",
            justifyContent: "center",
            gap: "50px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          <span style={navItem} onClick={() => handleNav("/")}>Home</span>
          <span style={navItem} onClick={() => handleNav("/sales")}>Sales</span>
          <span style={navItem} onClick={() => handleNav("/best-sellers")}>Best Sellers</span>
          <span style={navItem} onClick={() => handleNav("/new-arrivals")}>New Arrivals</span>
          <span style={navItem} onClick={() => handleNav("/sarees")}>Sarees</span>
          <span style={navItem} onClick={() => handleNav("/about")}>About</span>

        </div>
      )}

      {/* MOBILE NAVIGATION */}
      {isMobile && open && (
        <div
          style={{
            width: "100%",
            background: "#fff",
            padding: "25px 20px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            animation: "menuSlide 0.3s ease",
          }}
        >
          <style>{`
            @keyframes menuSlide {
              from { opacity: 0; transform: translateY(-12px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px", fontSize: "20px", fontWeight: "600" }}>
                      <span style={navItem} onClick={() => handleNav("/")}>Home</span>

            <span style={navItem} onClick={() => handleNav("/sales")}>Sales</span>
            <span style={navItem} onClick={() => handleNav("/best-sellers")}>Best Sellers</span>
            <span style={navItem} onClick={() => handleNav("/new-arrivals")}>New Arrivals</span>
            <span style={navItem} onClick={() => handleNav("/sarees")}>Sarees</span>
            <span style={navItem} onClick={() => handleNav("/about")}>About</span>

          </div>
        </div>
      )}
    </>
  );
};

const navItem = {
  cursor: "pointer",
  color: "#8B0000",
  transition: "0.2s",
};

export default Header;
