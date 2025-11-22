import React, { useEffect, useState } from "react";

const NewArrivals = () => {
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
    { id: 9, title: "Fresh Drop – Ruby Saree", price: "₹13,499", pos: "left top" },
    { id: 10, title: "Limited Edition Golden Saree", price: "₹17,999", pos: "right top" },
    { id: 11, title: "New Classic Beige Silk", price: "₹12,299", pos: "left bottom" },
    { id: 12, title: "Designer Pattu Saree", price: "₹19,499", pos: "right bottom" },
  ];

  return (
    <div style={{ padding: "20px", background: "#f8f3f1", minHeight: "100vh" }}>
      <h1
        style={{
          color: "#8B0000",
          fontWeight: "700",
          marginBottom: "4px",
        }}
      >
        New Arrivals
      </h1>
      <p style={{ color: "#555", marginBottom: "18px" }}>
        Just landed from Dharmavaram looms – fresh, unique, limited.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "18px",
        }}
      >
        {sarees.map((s, index) => {
          const liked = wishlist.includes(s.id);
          const addedToCart = cart.includes(s.id);

          return (
            <div
              key={s.id}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.85)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                backdropFilter: "blur(6px)",
                animation: "slideIn 0.4s ease forwards",
                opacity: 0,
                animationDelay: `${index * 0.09}s`,
              }}
            >
              <div
                style={{
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
                    stroke={liked ? "#E63946" : "#8B0000"}
                    strokeWidth="2"
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  >
                    <path d="M12 21s-6.7-4.6-9.3-8.5C-1 8 2.1 3 6.8 3c2.1 0 3.8 1.3 5.2 3 1.4-1.7 3.1-3 5.2-3 4.7 0 7.8 5 4.1 9.5C18.7 16.4 12 21 12 21z" />
                  </svg>

                  <svg
                    onClick={() => toggleCart(s.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={addedToCart ? "#007bff" : "none"}
                    stroke={addedToCart ? "#007bff" : "#8B0000"}
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
                    height: "220px",
                    backgroundImage: `url(${baseImg})`,
                    backgroundSize: "200% 200%",
                    backgroundPosition: s.pos,
                  }}
                ></div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "12px 14px 14px",
                }}
              >
                <div
                  style={{
                    color: "#8B0000",
                    fontWeight: "700",
                    fontSize: "16px",
                    marginBottom: "4px",
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "6px",
                  }}
                >
                  {s.price}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#555",
                  }}
                >
                  Freshly added to collection • Limited stock
                </div>
              </div>

              <style>{`
                @keyframes slideIn {
                  from { opacity: 0; transform: translateX(18px); }
                  to { opacity: 1; transform: translateX(0); }
                }

                @media (min-width: 768px) {
                  div[data-new-card="true"] {
                    flex-direction: row;
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

export default NewArrivals;
