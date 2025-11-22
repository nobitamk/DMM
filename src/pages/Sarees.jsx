import React, { useEffect, useState } from "react";

const Sarees = () => {
  const baseImg = "/mk.jpg";

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlist-updated"));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  }, [cart]);

  const toggleCart = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const sarees = [
    { id: 13, title: "Royal Wedding Saree", price: "₹21,999", pos: "left top" },
    { id: 14, title: "Temple Border Saree", price: "₹18,750", pos: "right top" },
    { id: 15, title: "Soft Silk Classic Saree", price: "₹15,299", pos: "left bottom" },
    { id: 16, title: "Grand Pattu Saree", price: "₹23,499", pos: "right bottom" },
  ];

  return (
    <div style={{ padding: "20px", background: "#0d0d0d", minHeight: "100vh" }}>
      <h1
        style={{
          color: "#ffd9a3",
          fontWeight: "800",
          marginBottom: "6px",
        }}
      >
        Sarees
      </h1>
      <p style={{ color: "#ddd", marginBottom: "20px" }}>
        Handpicked Dharmavaram silk sarees for every grand occasion.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
          gap: "20px",
        }}
      >
        {sarees.map((s, index) => {
          const liked = wishlist.includes(s.id);
          const addedToCart = cart.includes(s.id);

          return (
            <div
              key={s.id}
              className="saree-card-3d"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,217,163,0.1), rgba(255,255,255,0.02))",
                borderRadius: "16px",
                padding: "2px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                animation: "cardPop 0.45s ease forwards",
                opacity: 0,
                animationDelay: `${index * 0.07}s`,
              }}
            >
              <div
                style={{
                  background: "#151515",
                  borderRadius: "14px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Icons */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    gap: "8px",
                    zIndex: 10,
                  }}
                >
                  <svg
                    onClick={() => toggleWishlist(s.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={liked ? "#E63946" : "none"}
                    stroke={liked ? "#E63946" : "#ffd9a3"}
                    strokeWidth="2"
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  >
                    <path d="M12 21s-6.7-4.6-9.3-8.5C-1 8 2.1 3 6.8 3c2.1 0 3.8 1.3 5.2 3 1.4-1.7 3.1-3 5.2-3 4.7 0 7.8 5 4.1 9.5C18.7 16.4 12 21 12 21z" />
                  </svg>

                  <svg
                    onClick={() => toggleCart(s.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={addedToCart ? "#ffb703" : "none"}
                    stroke={addedToCart ? "#ffb703" : "#ffd9a3"}
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l3.6 9.6a2 2 0 0 0 2 1.4h9.3a2 2 0 0 0 2-1.7L23 6H6" />
                  </svg>
                </div>

                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "230px",
                    backgroundImage: `url(${baseImg})`,
                    backgroundSize: "200% 200%",
                    backgroundPosition: s.pos,
                  }}
                ></div>

                {/* Text */}
                <div
                  style={{
                    padding: "12px 10px 14px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#ffd9a3",
                      fontWeight: "700",
                      fontSize: "15px",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                      fontWeight: "800",
                      fontSize: "18px",
                      color: "#ffffff",
                    }}
                  >
                    {s.price}
                  </div>
                </div>
              </div>

              <style>{`
                @keyframes cardPop {
                  from { opacity: 0; transform: translateY(18px) scale(0.96); }
                  to { opacity: 1; transform: translateY(0) scale(1); }
                }

                @media (min-width: 768px) {
                  .saree-card-3d:hover {
                    transform: perspective(700px) rotateX(4deg) rotateY(-4deg) scale(1.02);
                    box-shadow: 0 16px 35px rgba(0,0,0,0.8);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                  }
                }
              `}</style>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sarees;
