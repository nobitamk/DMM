import React, { useEffect, useState } from "react";

const Sales = () => {
  const baseImg = "/mk.jpg"; // collage in public folder

  // -----------------------------
  // WISHLIST STATE (LocalStorage)
  // -----------------------------
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlist-updated")); // notify header
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // -----------------------------
  // CART STATE (LocalStorage)
  // -----------------------------
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated")); // notify header
  }, [cart]);

  const toggleCart = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // -----------------------------
  // SAREE CARD DATA
  // -----------------------------
  const sarees = [
    { id: 1, title: "Red Bridal Dharmavaram Saree", price: "₹14,999", pos: "left top" },
    { id: 2, title: "Gold Zari Silk Saree", price: "₹12,499", pos: "right top" },
    { id: 3, title: "Classic Beige Saree", price: "₹10,999", pos: "left bottom" },
    { id: 4, title: "Premium Pattu Saree", price: "₹13,999", pos: "right bottom" }
  ];

  return (
    <div style={{ padding: "20px", background: "#fff", minHeight: "100vh" }}>
      <h1 style={{ color: "#8B0000", fontWeight: "700" }}>Sales</h1>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "18px",
          marginTop: "20px",
        }}
      >
        {sarees.map((s) => {
          const liked = wishlist.includes(s.id);
          const addedToCart = cart.includes(s.id);

          return (
            <div
              key={s.id}
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              {/* TOP RIGHT ICONS */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  gap: "10px",
                  zIndex: 10,
                }}
              >
                {/* ❤️ LIKE BUTTON */}
                <svg
                  onClick={() => toggleWishlist(s.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={liked ? "#E63946" : "none"}
                  stroke={liked ? "#E63946" : "#8B0000"}
                  strokeWidth="2"
                  style={{
                    width: "26px",
                    height: "26px",
                    cursor: "pointer",
                  }}
                >
                  <path d="M12 21s-6.7-4.6-9.3-8.5C-1 8 2.1 3 6.8 3c2.1 0 3.8 1.3 5.2 3 1.4-1.7 3.1-3 5.2-3 4.7 0 7.8 5 4.1 9.5C18.7 16.4 12 21 12 21z"/>
                </svg>

                {/* 🛒 CART BUTTON */}
                <svg
                  onClick={() => toggleCart(s.id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={addedToCart ? "#007bff" : "none"}        // Blue when added
                  stroke={addedToCart ? "#007bff" : "#8B0000"}   // Outline when not added
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  style={{
                    width: "26px",
                    height: "26px",
                    cursor: "pointer",
                  }}
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l3.6 9.6a2 2 0 0 0 2 1.4h9.3a2 2 0 0 0 2-1.7L23 6H6" />
                </svg>
              </div>

              {/* IMAGE CROPPED */}
              <div
                style={{
                  width: "100%",
                  height: "230px",
                  backgroundImage: `url(${baseImg})`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: s.pos,
                }}
              ></div>

              {/* TEXT */}
              <div style={{ padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#8B0000", fontWeight: "600" }}>
                  {s.title}
                </div>
                <div style={{ marginTop: "5px", fontWeight: "700" }}>
                  {s.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sales;
