import React, { useEffect, useState } from "react";

const BestSellers = () => {
  const baseImg = "/mk.jpg";

  // Wishlist
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

  // Cart
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
    { id: 5, title: "Top Rated Bridal Saree", price: "₹16,999", pos: "left top" },
    { id: 6, title: "Customer Favourite Gold Saree", price: "₹15,499", pos: "right top" },
    { id: 7, title: "Most Loved Classic Saree", price: "₹11,999", pos: "left bottom" },
    { id: 8, title: "All-Time Best Pattu Saree", price: "₹18,250", pos: "right bottom" },
  ];

  return (
    <div style={{ padding: "20px", background: "#fff", minHeight: "100vh" }}>
      <h1
        style={{
          color: "#8B0000",
          fontWeight: "700",
          marginBottom: "4px",
        }}
      >
        Best Sellers
      </h1>
      <p style={{ color: "#555", marginBottom: "18px" }}>
        Sarees most loved and reordered by our customers.
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
              style={{
                background: "linear-gradient(145deg, #fff7f0, #ffffff)",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
                position: "relative",
                animation: "fadeUp 0.45s ease forwards",
                opacity: 0,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* Top icons */}
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
                {/* Heart */}
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

                {/* Cart */}
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
                  transition: "transform 0.3s ease",
                }}
                className="bs-img"
              ></div>

              {/* Text */}
              <div
                style={{
                  padding: "10px 10px 12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#8B0000",
                    fontWeight: "700",
                    fontSize: "15px",
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    marginTop: "4px",
                    fontWeight: "700",
                    fontSize: "17px",
                    color: "#333",
                  }}
                >
                  {s.price}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    marginTop: "4px",
                    color: "#a36b00",
                    fontWeight: "600",
                    letterSpacing: "0.03em",
                  }}
                >
                  ⭐ Best Seller
                </div>
              </div>

              <style>{`
                @keyframes fadeUp {
                  from { opacity: 0; transform: translateY(16px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                /* Hover zoom only on large screens */
                @media (min-width: 768px) {
                  .bs-img:hover {
                    transform: scale(1.05);
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

export default BestSellers;
